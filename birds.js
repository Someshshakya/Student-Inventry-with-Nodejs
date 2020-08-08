var express = require('express')
var router = express.Router()


router.get('/',(req,res)=>{
  // res.sendFile('/home/banner/Desktop/somesh@/login_sign/sign.html');
  res.render(__dirname+"/view/home.ejs");
})
router.get("/signup",(req,res)=>{
  res.render(__dirname+"/view/sign.ejs");
})

router.get("/login",(req,res)=>{
  res.render(__dirname+"/view/login.ejs");
})

router.post("/sign",(req,res)=>{
  console.log(req.body);
  res.send("done");
});

module.exports = router