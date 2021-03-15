const express = require('express');

const app = express();

const port = process.env.PORT || 3000
app.listen(port);

app.get('/auth',(req,res)=>{
    console.log('auth route');
    res.send('auth route');
})