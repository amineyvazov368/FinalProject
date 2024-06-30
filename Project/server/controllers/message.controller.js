const MessageModel = require("../models/message.model");

const message_controller = {
    getAll: async (req, res) => {
        const { title } = req.query
        if (title) message = await MessageModel.find({ title: title })
        else message = await MessageModel.find()
    
        if (message.length > 0) {
            res.send({ message })
        } else {
            res.send({
                message: 'not found',
                data: null
            })
        }
    },

    getOne: async (req, res) => {
        const { id } = req.params
        let message
        try {
            message = await MessageModel.findById(id)
        } catch (error) {
            res.send({
                error: error
            })
        }
        if (message) {
            res.send({
                message: "success",
                data: message
            })
        } else {
            res.send({
                message: "not found",
                data: null
            })
        }
    },

    post: async (req, res) => {
        const message = new MessageModel (req.body)
        await message.save()
        res.send({
            message: "posted",
            data: message
        })
    },

    delete: async (req, res) => {
        const { id } = req.params
        let response
        try {
            response = await MessageModel.findByIdAndDelete(id)
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
        response = await MessageModel.findByIdAndUpdate(id, req.body)
        res.send({
            message: "update",
            data: response
        })
    }

}
module.exports = message_controller;