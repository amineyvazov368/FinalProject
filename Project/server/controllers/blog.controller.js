const BlogModel = require("../models/blog.model");

const blog_controller = {
    getAll: async (req, res) => {
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
    },

    getOne: async (req, res) => {
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
    },

    post: async (req, res) => {
        const blogs = new BlogModel (req.body)
        await blogs.save()
        res.send({
            message: "posted",
            data: blogs
        })
    },

    delete: async (req, res) => {
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
    },
    patch:async (req, res) => {
        const { id } = req.params
        response = await BlogModel.findByIdAndUpdate(id, req.body)
        res.send({
            message: "update",
            data: response
        })
    }

}
module.exports = blog_controller;