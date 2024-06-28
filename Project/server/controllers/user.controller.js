const UserModel = require("../models/user.model");
const dotenv = require("dotenv");
dotenv.config();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const user_controller = {
    getAll: async (req, res) => {
        const { title } = req.query
        if (title) users = await UserModel.find({ title: title })
        else users = await UserModel.find()

        if (users.length > 0) {
            res.send({
                message: 'success',
                data: users
            })
        } else {
            res.send({
                message: 'not found',
                data: []
            })
        }
    },

    getOne: async (req, res) => {
        const { id } = req.params
        let users
        try {
            users = await UserModel.findById(id)
        } catch (error) {
            res.send({
                error: error
            })
        }
        if (users) {
            res.send({
                message: "success",
                data: users
            })
        } else {
            res.send({
                message: "not found",
                data: null
            })
        }
    },

    delete: async (req, res) => {
        const { id } = req.params
        let response
        try {
            response = await UserModel.findByIdAndDelete(id)
        } catch (error) {
            res.send({ error: error })
        }
        res.send({
            message: "delete",
            data: response
        })
    },

    patch: async (req, res) => {
        const { id } = req.params
        response = await UserModel.findByIdAndUpdate(id, req.body)
        res.send({
            message: "update",
            data: response
        })
    },
    login: async (req, res) => {
        try {
            const { email, password } = req.body
            const user = await UserModel.findOne({ email: email })
            if (user && await bcrypt.compare(password, user.password)) {
                res.status(201).send(
                    {
                        _id: user._id,
                        username: user.username,
                        email: user.email,
                        role: user.role,
                        password: user.password,
                        src: user.src,
                        favorites: user.favorites,
                        token: await generateToken({
                            id: user._id,
                            username: user.username,
                            email: user.email,
                            role: user.role,
                            src: user.src,
                            favorites: user.favorites
                        })
                    }
                )
            } else {
                res.send('Password Or Email Incorrect')
            }
        } catch (error) {
            res.send(error)
        }
    },
    register: async (req, res) => {
        try {
            const { username, email, role, password,src,favorites } = req.body
            // const existEmail = await UserModel.find({ email: email })
            // if (existEmail) {
            //     res.send('This Email Is Exist')
            // }


            const salt = await bcrypt.genSalt(10)
            const hashedPassword = await bcrypt.hash(password, salt)

            const createUser = new UserModel({
                username: username,
                email: email,
                role: role,
                password: hashedPassword,
                src:src,
                favorites:favorites
            })

            await createUser.save()

            res.status(201).send(
                {
                    _id: createUser._id,

                    username: createUser.username,
                    email: createUser.email,
                    role: createUser.role,
                    password: createUser.password,
                    src: createUser.src,
                    favorites: createUser.favorites,
                    token: await generateToken({
                        id: createUser._id,
                        username: createUser.username,
                        email: createUser.email,
                        role: createUser.role,
                        src: createUser.src,
                        favorites: createUser.favorites,
                    })
                }
            )
        } catch (err) {
            res.send(err)
        }

    },
    getMe: async (req, res) => {
        res.send(req.user)
    }

}


const generateToken = async ({ id, username, email, role, src, favorites }) => {
    return jwt.sign({ id, username, email, role, src, favorites }, 'amin', {
        expiresIn: '2h'
    })
}
module.exports = user_controller;
