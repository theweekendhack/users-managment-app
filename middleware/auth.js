const ensureLoggedIn=(req,res,next)=>
{

    //if session doesn't exists
    if(!req.session.user)
    {
        res.redirect("/");
    }


    //if session do exists
    next();
}

module.exports = ensureLoggedIn;