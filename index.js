// const fs = require('fs');

const fehleler=[
    {id: 1, ad:"Elturan", yash: 20},
    {id: 2, ad:"Murad", yash: 19},
    {id: 3, ad:"Ferman", yash: 20}
]

module.exports={
    fehleler
}

// fs.readFile('./text.json', 'utf8', (err, data) => {
//     if(err){
//         console.log('xeta')
//     }
//     else{
//         let newdata=JSON.parse(data)
//         let ages=newdata.map(item=>item.age)
//         let sum=0
//         ages.map(item=>sum+=Math.round(parseInt(item)/ages.length))
//         fs.writeFile('./text.text', String(sum), (err)=>{
//             if(!err){
//                 console.log('tamamlandi')
//             }
//             }
//         )}
// });