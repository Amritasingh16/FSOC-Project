const express = require('express')
const route = require('./route/route')
const mongoose = require('mongoose')
var cors = require('cors')
const multer= require("multer");
const { AppConfig } = require('aws-sdk');


const app = express()
app.use(express.json())
app.use(cors())
app.use( multer().any())

mongoose.set('strictQuery', false)
mongoose.connect("mongodb+srv://AmritaSingh:AAsingh1627@cluster016.jdmspyj.mongodb.net/amritasingh1627", {
    useNewUrlParser: true
})
    .then(() => console.log("MongoDB is connected"))
    .catch(err => console.log(err))

app.use("/", route)

app.listen(3000, function () {
    console.log("Express app running on port 3000")
})