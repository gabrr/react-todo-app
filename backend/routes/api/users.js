const express = require('express')
const router = express.Router()

// const mongoose = require('mongoose')
// const bodyParser = require('body-parser')


const Users = require('../../models/users')

router.get("/", (req, res) => {
    // the code bellow is to prevent the CORS error
    res.header('Access-Control-Allow-Origin', '*')

    Users.find()
        .sort({ date: -1 })
        .then(user => res.json(user))
})

router.post("/", (req, res) => {
    // the code bellow is to prevent the CORS error
    res.header('Access-Control-Allow-Origin', '*')

    const newUsers = new Users({
        name: req.body.name,
        password: req.body.password,
        role: req.body.role,
        email: req.body.email,
    })

    newUsers.save().then(user => res.json(user))
})

module.exports = router