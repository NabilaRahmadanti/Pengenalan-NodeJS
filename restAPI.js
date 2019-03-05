const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extends: false}))

app.get('/coba', (req, res)=>{
    res.end("ini get XI RPL ");
});

app.post('/coba', (req, res)=>{
    res.end("ini post XI RPL ");
});

app.listen('12345', (e)=>{
    console.log(e);
});