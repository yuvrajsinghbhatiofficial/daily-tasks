const sql = require("./db");


    const findByEmail = async (email) => {
    try {
        const result = await sql.query(
            'SELECT * FROM public.user WHERE email = $1',
            [email]
        );

        // If no user found, return null vlaue to the user.js  
        if (result.rows.length === 0) {
            return null;
        }

        // Return the user object (only the mail)
        return result.rows[0];
    } catch (error) {
        console.error('Error occured in findByEmail:', error);
        
    }
};

module.exports = {findByEmail};