const express = require("express");
const { engine } = require('express-handlebars'); 


const userController = require("./controllers/UserController.js");
const generalController = require("./controllers/GeneralController.js");
const { application } = require("express");


const app = express();


app.use(express.static("public")); 
//TELL THE APP THAT EXPRESS HANDLEBARS IS OUR TEMPLATE ENGINE!
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');

//This tells express how to intepret the incomming FORM DATA!!! 

//MUST COME BEFORE ALL OF YOUR ROUTES!!!!!! 
app.use(express.urlencoded({extended:true}));


app.use("/users",userController);
app.use("/",generalController);


//start up your server on a specific PORT
const PORT =3000;
app.listen(PORT,()=>{
    console.log(`Web Server is up and running on PORT ${PORT}`)
})