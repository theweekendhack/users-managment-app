const express = require('express');
const router = express.Router();

router.get("/",(req,res)=>{
    
    
    res.render("index",{
        title : "Home Page"
    });
});

router.get("/about",(req,res)=>{

    res.render("about",{
        title : "About US Page"
    });
});



module.exports = router;