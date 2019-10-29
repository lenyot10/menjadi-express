const express = require('express')
const app =express()
const port = 3000
//memanggil libary body parser
const bodyParser = require('body-parser');
//config body parser
app.use(bodyParser.urlencoded({extended:true})); //menangkap type request dalam bentuk form urlencoded

app.use(bodyParser.json());//menangkap url dalam bentuk json

app.get('/',(req, res) => res.send('Hello word-'))

//membuat request post
app.post('/hello', function(req,res){
    const respon = {
        statusCode : 200,
        error : "",
        message :'Hello Json'
    }
    res.json(respon);
})
//commit lagi dengan nama "membuat requst post"
app.listen(port, () => console.log(`Example app listening on port $(port)!`))

