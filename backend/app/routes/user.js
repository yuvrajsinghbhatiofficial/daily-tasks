const express = require('express');
const conection = require('../models/db');
const { findByEmail } = require('../models/auth.model');
const router = express.Router();
const jwt = require('jsonwebtoken');

const JWT_SECRET = 'supersecretkey';



router.post('/login',async(req,res)=>{
    const {email,password} = req.body;
    if ( !email || !password ){
        return res.status(400).json({
            "success":false,
            "message":'insert required credentials'
        });
    }
   const user = await findByEmail(email);

        if (!user) {
            return res.status(401).json({
                success: false,
                message: 'you are not a valid No account found with that email address. Please sign up or check your spelling'
            });
        }
       
         if (user.password !== password) {
            return res.status(401).json({
                success: false,
                message: 'Invalid password',
            });
        }
        //JWT implementing 
        const token = jwt.sign(
            {id:user.id, email:user.email},
            JWT_SECRET,{expiresIn:'1h'}
        );
        return res.status(200).json({
            success:true,
            message:'logged in successfully',
            token,
            user:{email:user.email}
        });

        
       
    
    
});


module.exports = router; 