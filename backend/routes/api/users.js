const express = require('express')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const router = express.Router()


// const mongoose = require('mongoose')
// const bodyParser = require('body-parser')


const Users = require('../../models/users')

router.get("/", async(req, res) => {
    // the code bellow is to prevent the CORS error, another method is just to add "proxy": "http://localhost:3001" 
    // to the package.json of the client side. Using this way we can fetch data by just typing the uri
    // res.header('Access-Control-Allow-Origin', '*')
    try {
        Users.find()
            .sort({ date: -1 })
            .then(user => res.json(user))
    } catch (error) {
        console.log(error)
    }
})

router.post("/signup", async(req, res) => {
    // the code bellow is to prevent the CORS error
    // res.header('Access-Control-Allow-Origin', '*')
    const user = await Users.findOne({ email: req.body.email })

    if (user) {
        return res.send('User already exists')
    }

    try {
        const newUsers = new Users({
            _id: mongoose.mongo.ObjectId(),
            name: req.body.name,
            password: bcrypt.hashSync(req.body.password, 10),
            role: req.body.role,
            email: req.body.email,
        })

        await newUsers.save().then(user => res.json(user))

    } catch (error) {
        console.log("woops!", error.message)
    }

})


router.post("/login", async(req, res) => {
    const user = await Users.findOne({ email: req.body.email })

    if (!user || !bcrypt.compareSync(req.body.password, user.password)) {
        return res.send("no users")
    }
    try {
        return res.send("Success")
    } catch (error) {
        console.log(error)
    }
})

module.exports = router