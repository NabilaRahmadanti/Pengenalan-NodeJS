// Create server

const express = require('express'); // import module express
const app = express(); //eksekusi module express

//eksekusi express dgn memanggil variabel app
app.get('/', function(request, respone){
    respone.send("Hello Nabila")
})

app.listen('1010');