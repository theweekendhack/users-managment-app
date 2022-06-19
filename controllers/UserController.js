const express = require('express');
const router = express.Router();


const userModel = require("../models/UserModels.js")

router.get("/login",(req,res)=>{
   

    res.render("index",{
        title : "Login Page",
    
    });
});

router.get("/",async (req,res)=>{


    const users_data = await userModel.getAllUsers(); //abstraction!!!!!! 
   
   
    res.render("users",{
        title:"User Listing Page",
        users_data 
    })
});

router.get("/register",(req,res)=>{

    res.render("register",{
        title:"Register Listing Page"
    })
});




//For a sec, this is going to work

router.get("/details/:userid",async(req,res)=>{


    //This allows express to grab the dynamic id in the URL
    const id =  parseInt(req.params.userid);

    //abstraction 
    const user = await userModel.getUser(id);//this is going to query our DATA LAYER!

    res.render("userdetails",{
        title:"User Details Page",
        user 
    
    })
});

router.post("/registration",async(req,res)=>{


  /*
        1. Get the information from the body of the request and store in an object
        2. Call the userModel to create the user
        3. res.redirect("/users") // GET A REQUEST!!! 
    */


    const user_data = req.body; // pluck out the data that was submitted via the form, from the body of the request 
    
    await userModel.createUsers(user_data);

    res.redirect("/users"); // SENDS A GET REQUEST TO /USERS 

  
});

router.post("/delete/:id",async(req,res)=>{


    /*
        1. GET ID FOR URL
        2. CALL MODEL
        3 REDIRECT USDR

    */

    const user_id  = parseInt(req.params.id);

    await userModel.deleteUser(user_id);

    res.redirect("/users")
})






module.exports = router;
