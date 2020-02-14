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

    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        const newUsers = new Users({
            _id: mongoose.mongo.ObjectId(),
            name: req.body.name,
            password: hashedPassword,
            role: req.body.role,
            email: req.body.email,
        })

        newUsers.save().then(user => res.json(user))
    } catch (error) {
        console.log(error)
    }

})

// router.post("/login", async(req, res) => {
//     if (!Users.find({ name: req.body.name })) {
//         return res.send("no users")
//     }
//     try {
//         if(bcrypt.compare(req.body.password, ))
//     } catch (error) {
//         console.log(error)
//     }
// })

module.exports = router