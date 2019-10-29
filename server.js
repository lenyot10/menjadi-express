const express = require('express')
const app =express()
const port = 3000
//memanggil libary body parser
const bodyParser = require('body-parser');
//config body parser
app.use(bodyParser.urlencoded({extended:true})); //menangkap type request dalam bentuk form urlencoded

app.use(bodyParser.json());//menangkap url dalam bentuk json

const Mongoose = require('./MongoModel/mongoConfig')
const PersonModel = Mongoose.model("person",{
    firstname : String,//field firstname
    lastname : String // field lastname
}) // cmt -m memanggil MongoConfig dan Membuat Model PersonModel sebagai penampung collection person

app.post('/Profile/create' , async(req, res)=>{
    //do something here
    console.log(req.body)
    const insert = {
        firstname : req.body.firstname,
        lastname  : req.body.lastname
    }
    var person = new PersonModel(insert);
    var result = await person.save();
    const respon = {
        statusCode : 200,
        error : "",
        message : "Create Person",
        content : result
    }
    res.json(respon);

})
 app.get('/',(req, res) => res.send('Hello word-'))

//membuat request post
//nama request firstname dan lastname
app.post('/hello', function(req,res){
    const respon = {
        statusCode : 200,
        error : "",
        message :'Hello Json',
        content :req.body
    }
    res.json(respon);
})
//commit lagi dengan nama "membuat requst post"
app.listen(port, () => console.log(`Example app listening on port $(port)!`))

