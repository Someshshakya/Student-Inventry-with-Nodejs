const express = require("express");
const mysql = require("mysql");
const app = express();
const ejs = require("ejs");
const fs = require("fs");
var knex = require("./knexmodule");
const body_parser = require("body-parser");

app.set('view engine', 'ejs');

var sign = require('./sign');
app.use( sign);
let login=express.Router();
app.use('/',login)
require('./routes/login')(login,knex)

app.use(body_parser.urlencoded({extended:true}));


app.listen(8080,()=>{ 
    console.log("server is running:-....");
});