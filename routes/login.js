module.exports=(login,knex)=>{
  
login.post("/login",async(req,res)=>{
    const email = req.body.email;
    const password = req.body.password;
    knex.select('*')
     .from("Persons")
     .where('email',email)
     .then(data=>{
      console.log(data);
        if (data[0].Password==password){
          console.log(email+"  "+password);
          console.log(data[0]);
          res.render('response',{data:data[0]});
        }else{
        console.log(email+"  "+password);
          console.log("Sorry User id or Password is incorrect")
          res.render("passwordincorrect");
        };
      })
    .catch((err)=>{
      console.log("this id does not exists");
      res.render("loginnot");
    })
  })
login.get("/login",(req,res)=>{
  res.render('login');
})
}
