


// import express from ('express');
const express = require("express")
// import {fehleler} from ('./index.js')
const {fehleler}= require('./index.js')
const app = express();
app.get('/', (req,res)=>{
    res.send('Bu route homepage ucundur.')
})
app.get('/fehleler', (req,res)=>{
    res.send(fehleler)
})
app.listen(3000, ()=>{
    console.log('MY SERVER RUNNING IN THE 3000. PORT')
})