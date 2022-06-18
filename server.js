const express = require("express");
const { engine } = require('express-handlebars'); 


const userController = require("./controllers/UserController.js");
const generalController = require("./controllers/GeneralController.js");
const { application } = require("express");


const app = express();

//TELL THE APP THAT EXPRESS HANDLEBARS IS OUR TEMPLATE ENGINE!
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');


app.use("/users",userController);
app.use("/",generalController);


//start up your server on a specific PORT
const PORT =3000;
app.listen(PORT,()=>{
    console.log(`Web Server is up and running on PORT ${PORT}`)
})