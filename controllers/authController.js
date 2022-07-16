const express = require('express');
const router = express.Router();
const authModel = require("../models/authModel.js");


router.get("/login",(req,res)=>{
    
    
    res.render("login",{
        title : "Login Page"
    });
});



router.post("/login",async(req,res)=>{
    

    const {username,password} = req.body;// grabbing the data that was entered in the form


    // user object or null
    const user = await authModel.authenticate(username,password); //authenticate the user

    if(user)
    {

        /*
            1.creates SESSION and assigns the  user objec to session
            2. Creates A COOKIE and dumps the unqiue sessio id generated into the cookie  
            3. SENDS THE cookie back to the client (BROWSER). 
        */
        req.session.user = user; 

        res.redirect("/users/profile");
    }
    else
    {

        res.render("login",{
            title : "Login Page",
            error : "Username/password is incorrect. Please enter your valid credentials to login"
        });

    }


});


router.get("/logout",(req,res)=>{
    

  //destorys the user session  
  req.session.user=undefined;

  res.redirect("/");
});




module.exports = router;