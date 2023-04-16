
const jwt = require('jsonwebtoken')
const userModel= require('../models/userModel')

const createUser= async function(req,res){
    try{
        let data = req.body
        if (Object.keys(data).length == 0) return res.status(400).send({ status: false, Msg: "Request body can't be empty"})
        let { title, name, phone, email, password } = data

        if (!title) return res.status(400).send({ status: false, msg: "Title is mandatory" })
        if (!name) return res.status(400).send({ status: false, msg: "name is mandatory" })
        if (!phone) return res.status(400).send({ status: false, msg: "phone is mandatory" })
        if (!email) return res.status(400).send({ status: false, msg: "email is mandatory" })
        if (!password) return res.status(400).send({ status: false, msg: "password is mandatory" })
        let createUser= await userModel.create(data)
        return res.status(201).send({status:true,data:createUser})
    }catch(error){
        return res.status(500).send({errorMsg:false,errorMsg:error.message})
    }
}
const login = async function(req,res){
    try {
        let data = req.body
        if(!data.password) return res.status(400).send({status:false,msg:"password is required"})
        if(!data.email) return res.status(400).send({status:false,msg:"email is required"})
        let {password,email} = data
        let findUser = await userModel.findOne({password:password,email:email})
        if(!findUser) return res.status(400).send({status:false,msg:"Invalid Credentials"})
        let payload = {userId:findUser._id.toString(),email:findUser.email}
        let token = jwt.sign(payload,'secretKey')
        return res.status(200).send({status:true,data:token})
    } catch (error) {
        return res.status(500).send({ status: false, msg: error.message })
    }
}

module.exports = { createUser, login }