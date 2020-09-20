const express = require('express')
const bodyparser = require('body-parser')

//importing csyn


const app = express()
app.use(express.urlencoded({extended:true}) )

app.use(express.static(__dirname+'/public'));
let csyntax = require('./csyn')

var code

app.get("/",function(req,res){
    res.sendFile(__dirname + '/first.html');
})

app.post("/",function(req,res){
    code = req.body.code;
    // console.log(code);
    var final_code = csyntax.input(code)
    console.log(final_code);
    res.write("<body>")
    res.write("<code style=\"font-size:20px;\">CodePaste</code><br><br><br>")
    res.write(final_code)
    res.write("</body>")
    res.end() 
})









app.listen(3000,function(req,res){
    console.log("Started Server");    
})
