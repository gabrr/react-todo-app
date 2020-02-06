const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const app = express()


// routes 
const users = require("./routes/api/users")

app.use(bodyParser.json())

const db = "mongodb://127.0.0.1:27017/"

mongoose.connect(db, { useUnifiedTopology: true, useNewUrlParser: true })
    .then(a => {
        console.log("it's working")
    })
    .catch(err => console.log(err))

app.use("/api/users", users)

app.listen(3001)