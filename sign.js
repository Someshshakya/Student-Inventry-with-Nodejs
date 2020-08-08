var express = require('express')
var router = express.Router()
var knex = require("./knexmodule");
const body_parser = require("body-parser");
const { table } = require('./knexmodule');
router.use(body_parser.urlencoded({extended:true}));



router.get('/',(req,res)=>{
  res.render(__dirname+"/views/home.ejs");
}); 
router.get("/signup",(req,res)=>{
  res.render(__dirname+"/views/sign.ejs");
});
router.get("/about",(req,res)=>{
  res.render(__dirname+"/views/try.ejs");
});
router.post("/sign",(req,res)=>{   
    var email = req.body.email;
    console.log(email);

    knex.select("*")
    .from ("Persons")
    .where("email",email)
    .then(data=>{
      if (data.length<1){
        var fullname = req.body.firstname+" "+req.body.lastname; 
        knex('Persons').insert(req.body)
        .then(data=>{
          console.log('signup successfully....');
          res.render('output',{data:data[0]});
        })
        .catch(err=>{
          console.log(err)
      })

      }else{
        console.log("This userid is already taken")
        res.render("exists")
      }
    })
    .catch(err=>{
      console.log(err)
    })

});

module.exports = router