const express = require('express')
const bodyParser = require('body-parser')
var cors = require('cors')
var app = express()
const mongoose = require('mongoose');
app.use(cors())
app.use(bodyParser.json())
const PORT = 7070;

//userrrr
const UserSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: Number,
    src:String,
    role: {
        type: String,
        enum: ["admin", "client"]
    },
    favorites: Array
})
const UserModel = mongoose.model("Users", UserSchema)


////blogggg

const BlogSchema= new mongoose.Schema({
    title:String,
    description:String,
    src:String,
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "Users" },
    likes: { type: Array, default: [] },
    comments: { type: Array, default: [] },
})

const BlogModel= mongoose.model("Blogs",BlogSchema)







getAll('/api/users', async (req, res) => {
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
}),
    getOne('/api/users/:id', async (req, res) => {
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
    }),

    post("/api/users", async (req, res) => {
        const users = new UserModel(req.body)
        await users.save()
        res.send({
            message: "posted",
            data: users
        })
    }),

    delete('/api/users/:id', async (req, res) => {
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
    }),

    patch("/api/users/:id", async (req, res) => {
        const { id } = req.params
        response = await UserModel.findByIdAndUpdate(id, req.body)
        res.send({
            message: "update",
            data: response
        })
    })
////blog crad

getAll('/api/blogs', async (req, res) => {
    const { title } = req.query
    if (title) blogs = await BlogModel.find({ title: title })
    else blogs = await BlogModel.find()

    if (blogs.length > 0) {
        res.send({ blogs })
    } else {
        res.send({
            message: 'not found',
            data: null
        })
    }
}),
    getOne('/api/blogs/:id', async (req, res) => {
        const { id } = req.params
        let blogs
        try {
            blogs = await BlogModel.findById(id)
        } catch (error) {
            res.send({
                error: error
            })
        }
        if (blogs) {
            res.send({
                message: "success",
                data: blogs
            })
        } else {
            res.send({
                message: "not found",
                data: null
            })
        }
    }),

    post("/api/blogs", async (req, res) => {
        const blogs = new BlogModel (req.body)
        await blogs.save()
        res.send({
            message: "posted",
            data: blogs
        })
    }),

    delete('/api/blogs/:id', async (req, res) => {
        const { id } = req.params
        let response
        try {
            response = await BlogModel.findByIdAndDelete(id)
        } catch (error) {
            res.send({ error: error })
        }
        res.send({
            message: "delete",
            data: response
        })
    }),

    patch("/api/blogs/:id", async (req, res) => {
        const { id } = req.params
        response = await BlogModel.findByIdAndUpdate(id, req.body)
        res.send({
            message: "update",
            data: response
        })
    })


mongoose.connect('mongodb+srv://amineyvazov:aminamin@project2.ws3s31d.mongodb.net/?retryWrites=true&w=majority&appName=project2').
    then(() => console.log("Connected!"))


app.listen(PORT, () => {
    console.log(`Server listennig  on port ${PORT}`)
})

