const fs = require('fs');

fs.readFile('./text.json', 'utf8', (err, data) => {
    if(err){
        console.log('xeta')
    }
    else{
        let newdata=JSON.parse(data)
        let ages=newdata.map(item=>item.age)
        let sum=0
        ages.map(item=>sum+=Math.round(parseInt(item)/ages.length))
        fs.writeFile('./text.text', String(sum), (err)=>{
            if(!err){
                console.log('tamamlandi')
            }
            }
        )}
});