const db = require("../config/db.js");
const bcrypt= require("bcryptjs");

class Auth 
{

    static async authenticate(username,password)
    {
       
        const results=  await db.query(`SELECT id, first_name,last_name,location,username,password FROM users WHERE username= '${username}'`);
        const user = results.rows[0];

        if (user) {

            // compare hashed password to a new hash from password
            const isValid = await bcrypt.compare(password, user.password);
            if (isValid === true) {
              return user;
            }
          }

          return null;


    }
   
  
}


module.exports = Auth;