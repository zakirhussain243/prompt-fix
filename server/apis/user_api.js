const exp = require('express');
const user_model = require('../models/user_model.js')
const user_app = exp.Router();//this one helps in linking between server file and this file and it helps in get post put request
const express_async_hanlder = require('express-async-handler')
//creating new user 
user_app.post('/user',express_async_hanlder(async(req,res)=>{
    let new_user = req.body
    let user = new user_model(new_user)
    let new_user_doc = await user.save()
    res.status(201).send({message:"login success",payload:new_user_doc})
}))
//fetching emails 
user_app.get('/useremails',express_async_hanlder(async(req,res)=>{
    try{
        const users_data = await user_model.find({},{email:1,_id:0});
        res.send(users_data);
    }catch(err){
        res.status(400).send({message:"error fetching emails"})
    }
}))
module.exports = user_app