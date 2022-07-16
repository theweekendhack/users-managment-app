const express = require("express");
const { create } = require('express-handlebars'); 
const session = require("express-session");

const userController = require("./controllers/UserController.js");
const generalController = require("./controllers/GeneralController.js");
const authController = require("./controllers/authController.js");

const app = express();

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
  }));

const hbs = create({
    // Specify helpers which are only registered on this instance.
    helpers: {
        if_eq(val1,val2,options) { 

                if(val1 === val2)
                {
                  return  options.fn(this);
                }
         }


    }
});


app.use(express.static("public")); 
//TELL THE APP THAT EXPRESS HANDLEBARS IS OUR TEMPLATE ENGINE!
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

//This tells express how to intepret the incomming FORM DATA!!! 

//MUST COME BEFORE ALL OF YOUR ROUTES!!!!!! 
app.use(express.urlencoded({extended:true}));


app.use((req,res,next)=>{

    res.locals.user = req.session.user; // this is avaiable to every handlebars page
    console.log(res.locals.user);
    next();
});

app.use("/users", userController);
app.use("/auth", authController);
app.use("/",generalController);


//start up your server on a specific PORT
const PORT =3000;
app.listen(PORT,()=>{
    console.log(`Web Server is up and running on PORT ${PORT}`)
})