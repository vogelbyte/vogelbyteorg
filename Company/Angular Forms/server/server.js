const express = require('express');
const bodyParser = require('body-parser');
const cors =require('cors');

const PORT=3000;

const app =express();

app.use(bodyParser.json());

app.use(cors());

app.get('/', function(req, res){
res.send('server working')
})
app.post('/enroll',function(req, res){
    console.log(req.body);
    res.status(200).send({"message":"Data recived"});
})
app.listen(PORT,function(){
    console.log("server work on port:" + PORT);
});