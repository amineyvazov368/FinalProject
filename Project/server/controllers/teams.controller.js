const TeamsModel = require("../models/teams.model");

const teams_controller = {
    getAll: async (req, res) => {
        const { title } = req.query
        if (title) teams = await TeamsModel.find({ title: title })
        else teams = await TeamsModel.find()
    
        if (teams.length > 0) {
            res.send({ teams })
        } else {
            res.send({
                message: 'not found',
                data: null
            })
        }
    },

    getOne: async (req, res) => {
        const { id } = req.params
        let teams
        try {
            teams = await TeamsModel.findById(id)
        } catch (error) {
            res.send({
                error: error
            })
        }
        if (teams) {
            res.send({
                message: "success",
                data: teams
            })
        } else {
            res.send({
                message: "not found",
                data: null
            })
        }
    },

    post: async (req, res) => {
        const teams = new TeamsModel (req.body)
        await teams.save()
        res.send({
            message: "posted",
            data: teams
        })
    },

    delete: async (req, res) => {
        const { id } = req.params
        let response
        try {
            response = await TeamsModel.findByIdAndDelete(id)
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
        response = await TeamsModel.findByIdAndUpdate(id, req.body)
        res.send({
            message: "update",
            data: response
        })
    }

}
module.exports = teams_controller;