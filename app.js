const express = require('express');
const port = 3120;
const app = express();
 
app.get('/', (req, res)=>{
res.status(200).json({
    report: true,
    msg: "This is a get method"
    
});
res.end();
});

app.get('/id', (req,res)=>{
    res.status(200).json({
    report: true,
    msg: `This is my second get method $ {req.params.id}`
    });
res.end();
});

app.post('/', (req,res)=>{
    res.status(200).json({
    report: true,
    msg: "This is my post method"
    });
res.end();
});

app.put('/id', (req,res)=>{
    res.status(200).json({
    report: true,
    msg: `This is a put method $ {req.params.id}`
    });
res.end();
});

app.listen(port, (req, res)=>{
console.log(`My Server is now listening to my port`);
});