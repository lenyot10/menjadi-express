const express = require('express')
const app =express()
const port = 3000
const bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
// //instal app
// bikin folder di dalam folder
// npm init --yes
// npm i express --save
// install nodemon
// npm instal -g nodemon
app.get('/',(req, res) => res.send('Hello word-'))
//run aplikasi 
// node server.js / nodemon server.js
// aplikasi bisa dibuka dengan localhost:3000
const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/belajarmongo')//,{useNewUrlParser : true});
//bikin model untuk collection person
const PersonModel = mongoose.model("person",{
    firstname: String,
    lastname: String 
});

app.post('/create',async (req, res)=>{
    //Do something here
    console.log(req.body)
    var person = new PersonModel(req.body);
    var result = await person.save();
    const response = {
        statusCode : 200,
        error : "",
        message : "create Person",
        content : result
    }
    res.json(response);
})
app.get('/list', async (req, res) =>{
    var person = await PersonModel.find().exec();
    const response = {
        statusCode : 200,
        error : '',
        message : "List Person",
        content : person
    }
    res.json(response)
})
app.get('/hello', function(req,res){
    const respon = {
        statusCode : 200,
        error : "",
        message :'Hello Json'
    }
    res.json(respon);
})
app.post('/Profile' , function(req, res){
    console.log(req.body)
    const respon = {
        statusCode : 200,
        error : "",
        content : req.body
    }
    res.json(respon);
})
app.listen(port, () => console.log(`Example app listening on port $(port)!`))

