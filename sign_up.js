const express = require("express");
const mysql = require("mysql");
const app = express();
const ejs = require("ejs");
const fs = require("fs");
const body_parser = require("body-parser");
const { urlencoded } = require("express");
var birds = require('./birds');
app.use( birds);

app.use(body_parser.urlencoded({extended:true}));

app.set("view engine","ejs");

// app.get('/',(req,res)=>{
//     // res.sendFile('/home/banner/Desktop/somesh@/login_sign/sign.html');
//     res.render(__dirname+"/view/home.ejs");
// })
// app.get("/signup",(req,res)=>{
//     res.render(__dirname+"/view/sign.ejs");
// })

// app.get("/login",(req,res)=>{
//     res.render(__dirname+"/view/login.ejs");
// })

// app.post("/sign",(req,res)=>{
//     console.log(req.body);
//     res.send("done");
// });



app.listen(8080,()=>{
    console.log("server is running:-....");
});