const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const UserModel = require('./models/User')
    
const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://127.0.0.1:27017/crud")

//API for new user
app.post("/createUser", (req,res)=>{
    UserModel.create(req.body)
    .then(user => res.json(user))
    .catch(err => res.json(err))

})


app.get('/' , (req,res)=>{
    UserModel.find({})
    .then(user=>res.json(user))
    .catch(err=>res.json(err))
})

app.listen(3001, ()=>{
    console.log("server sucess")
})