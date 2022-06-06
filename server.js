const express = require("express")
const fs = require('fs');
const app = express();
const data=[
    {id:1, name:"Elturan"},
    {id:2, name:"Murad"},
    {id:3, name:"Samxal"}
]
const cards=[
    {id:1, number:"1234564325"},
    {id:2, number:"5436325645"},
    {id:3, number:"9766387532"},
    {id:4, number:"4728148354"}
]

app.get('/', (req,res)=>{
    res.send('Home')
})
app.get('/datalar', (req,res)=>{
    fs.readFile('./isciler.json', 'utf8', (err, data)=>{
        if(!err){
            let newData = JSON.parse(data)
            res.send(JSON.stringify(newData))
        }
        else{
            res.send('Xeta bash verdi')
        }
    })
})
app.get('/datalar', (req,res)=>{
    const count = parseInt(req.query.count);
    const offset = parseInt(req.query.offset);
    res.send({ datas: data.slice(offset, offset + count) })
})
app.get('/datalar/:id', (req,res)=>{
    let id=req.params.id
    let newData=data.find(item=> item.id==id)
    if(newData){
       return res.json(newData)
    }
    res.send('Istifacedi yoxdur')
})
app.get('/card', (req,res)=>{
    res.json(cards)
})
app.get('/card/:id', (req,res)=>{
    let id=req.params.id
    let newData=cards.find(item=>item.id==id)
    if(newData){
        return res.json(newData)
    }
    res.send(404)
})
app.listen(5000, ()=>{
    console.log('MY SERVER RUNNING IN THE 3000. PORT')
})