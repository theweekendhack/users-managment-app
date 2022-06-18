const db = require("../config/db.js")

class User 
{

    static async createUsers(user)
    {
       await db.query(`INSERT INTO users (first_name,last_name,username,password,location) VALUES('${user.firstName}','${user.lastName}','${user.username}', '${user.password}','${user.location}')`);
       
    }
    static async getAllUsers()
    {
        const results= await db.query("SELECT id, first_name,last_name,location,username,password FROM users;");
  
        return results.rows;
    }

    static async getUser(id)
    {
        const results= await db.query(`SELECT id, first_name,last_name,location,username,password FROM users WHERE id = ${id}`);
        return results.rows[0]; 
        
    }

    static async deleteUser(id)
    {
        await db.query(`DELEETE FROM users WHERE id = ${id}`);
       
    }

    static async updateUser(id)
    {

    }

  
}


module.exports = User;