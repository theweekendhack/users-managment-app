const userFormValidation=(req,res,next)=>{

    const errors = []; // length 0

    //destructring 
    const {firstName,lastName,location,username,password} = req.body;

    if(firstName === "")
    {
            errors.push("You must enter a first name");
    }

    if(lastName === "")
    {
        errors.push("You must enter a last name");
    }

    if(location === "")
    {
        errors.push("You must enter a location");
    }

    if(username === "")
    {
        errors.push("You must enter a username");
    }

    if(password === "")
    {
        errors.push("You must enter a password");
    }


    //THE ARE ERRORS
    if(errors.length > 0)
    {
        //cycle will be broken
        res.render("register",{
        title:"Register Listing Page",
        errors,
        current_form_data : req.body

        });

    }

    //NO ERROS
    else
    {
       next();
    }

 




}



module.exports = userFormValidation;