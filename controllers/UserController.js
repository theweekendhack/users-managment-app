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

router.post("/register",(req,res)=>{
    
  
});

module.exports = router;
