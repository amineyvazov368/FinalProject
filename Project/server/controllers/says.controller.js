const SaysModel = require("../models/says.model");

const says_controller = {
    getAll: async (req, res) => {
        const { title } = req.query
        if (title) says = await SaysModel.find({ title: title })
        else says = await SaysModel.find()
    
        if (says.length > 0) {
            res.send({ says })
        } else {
            res.send({
                message: 'not found',
                data: null
            })
        }
    },

    getOne: async (req, res) => {
        const { id } = req.params
        let says
        try {
            says = await SaysModel.findById(id)
        } catch (error) {
            res.send({
                error: error
            })
        }
        if (says) {
            res.send({
                message: "success",
                data: says
            })
        } else {
            res.send({
                message: "not found",
                data: null
            })
        }
    },

    post: async (req, res) => {
        const says = new SaysModel (req.body)
        await says.save()
        res.send({
            message: "posted",
            data: says
        })
    },

    delete: async (req, res) => {
        const { id } = req.params
        let response
        try {
            response = await SaysModel.findByIdAndDelete(id)
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
        response = await SaysModel.findByIdAndUpdate(id, req.body)
        res.send({
            message: "update",
            data: response
        })
    }

}
module.exports = says_controller;