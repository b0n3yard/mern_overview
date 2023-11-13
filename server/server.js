const express = require('express')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')
require('dotenv').config()
const app = express()
const myroutes = require('./routes')
const db = require('./config/connection')
const PORT = process.env.PORT || 3333
app.use(express.json())
app.use(cookieParser())
app.use('/', myroutes)
db.on( 'open', ()=>{
    console.log('db conected')

    app.listen(PORT,()=> { console.log(`listening on ${PORT}`)})
})