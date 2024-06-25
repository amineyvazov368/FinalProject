const PricesModel = require("../models/prices.model");

const prices_controller = {
    getAll: async (req, res) => {
        const { title } = req.query
        if (title) prices = await PricesModel.find({ title: title })
        else prices = await PricesModel.find()
    
        if (prices.length > 0) {
            res.send({ prices })
        } else {
            res.send({
                message: 'not found',
                data: null
            })
        }
    },

    getOne: async (req, res) => {
        const { id } = req.params
        let prices
        try {
            prices = await PricesModel.findById(id)
        } catch (error) {
            res.send({
                error: error
            })
        }
        if (prices) {
            res.send({
                message: "success",
                data: prices
            })
        } else {
            res.send({
                message: "not found",
                data: null
            })
        }
    },

    post: async (req, res) => {
        const prices = new PricesModel (req.body)
        await prices.save()
        res.send({
            message: "posted",
            data: prices
        })
    },

    delete: async (req, res) => {
        const { id } = req.params
        let response
        try {
            response = await PricesModel.findByIdAndDelete(id)
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
        response = await PricesModel.findByIdAndUpdate(id, req.body)
        res.send({
            message: "update",
            data: response
        })
    }

}
module.exports = prices_controller;