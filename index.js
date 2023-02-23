const express = require('express');
const mongoose = require('mongoose')
require('dotenv').config();
const Port = process.env.PORT || 5000;
const app = express();
mongoose.set('strictQuery',false)
mongoose.connect(`mongodb+srv://subashD:sub0222@mern.vjalb.mongodb.net/whyinventory`,{ useNewUrlParser: true, useUnifiedTopology: true })
.then(()=>console.log('connected to db')).catch(err=> console.log(err))

app.listen(Port,()=>{
    console.log(`connected to Port ${Port}`)
})