const CutsModel = require("../models/cuts.model");

const cuts_controller = {
    getAll: async (req, res) => {
        const { title } = req.query
        if (title) cuts = await CutsModel.find({ title: title })
        else cuts = await CutsModel.find()
    
        if (cuts.length > 0) {
            res.send({ cuts })
        } else {
            res.send({
                message: 'not found',
                data: null
            })
        }
    },

    getOne: async (req, res) => {
        const { id } = req.params
        let cuts
        try {
            cuts = await CutsModel.findById(id)
        } catch (error) {
            res.send({
                error: error
            })
        }
        if (cuts) {
            res.send({
                message: "success",
                data: cuts
            })
        } else {
            res.send({
                message: "not found",
                data: null
            })
        }
    },

    post: async (req, res) => {
        const cuts = new CutsModel (req.body)
        await cuts.save()
        res.send({
            message: "posted",
            data: cuts
        })
    },

    delete: async (req, res) => {
        const { id } = req.params
        let response
        try {
            response = await CutsModel.findByIdAndDelete(id)
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
        response = await CutsModel.findByIdAndUpdate(id, req.body)
        res.send({
            message: "update",
            data: response
        })
    }

}
module.exports = cuts_controller;