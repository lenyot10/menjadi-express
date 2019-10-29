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

//create person
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

//menampilkan semua data
//url http://localhost:3000/Profile/lis
app.get('/Profile/list',async (req , res) => {
    var person =await PersonModel.find().exec();
    const response = {
        statusCode : 200,
        error : "",
        message : "List Person",
        content : person
    }
    res.json(response);
})

//detail data method get
//http://localhost:3000/Profile/detail/idmongo
app.get('/Profile/detail/(:id)',async(req,res) =>{
    let statusCode = 200
    let message = "Detail Person"
    var person =await PersonModel.findById(req.params.id).exec();
    const response = {
        statusCode : 200,
        error : message ,
        message : message ,
        content : person
    }
    res.status(statusCode).json(response);
})


//update data profile menggunakan method put
//url http://localhost:3000/Profile/update/idmongo
app.put('/Profile/update/(:id)',async(req,res) =>{
    let statusCode = 200
    let message = "Update Person"
    var person =await PersonModel.findByIdAndUpdate(req.params.id,req.body,{new : true});
    const response = {
        statusCode : statusCode,
        error : message ,
        message : message ,
        content : person
    }
    res.status(statusCode).json(response);
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

