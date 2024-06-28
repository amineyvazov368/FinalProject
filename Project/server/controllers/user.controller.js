const UserModel = require("../models/user.model");
const dotenv = require("dotenv");
dotenv.config();

const user_controller = {
    getAll: async (req, res) => {
        const { title } = req.query
        if (title) users = await UserModel.find({ title: title })
        else users = await UserModel.find()

        if (users.length > 0) {
            res.send({ users })
        } else {
            res.send({
                message: 'not found',
                data: null
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
    post: async (req, res) => {
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

    patch: async (req, res) => {
        const { id } = req.params
        response = await UserModel.findByIdAndUpdate(id, req.body)
        res.send({
            message: "update",
            data: response
        })
    }

}
module.exports = user_controller;
