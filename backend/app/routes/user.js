const express = require('express');
const conection = require('../models/db');
const { findByEmail } = require('../models/auth.model');
const router = express.Router();
const jwt = require('jsonwebtoken');

const JWT_SECRET = 'supersecretkey';



router.post('/login',async(req,res)=>{
    const {email,pass} = req.body;
    if ( !email || !pass ){
        return res.status(400).json({
            "success":false,
            "message":'the email and password are incorrect'
        });
    }
   const user = await findByEmail(email);

        if (!user) {
            return res.status(401).json({
                success: false,
                message: 'Invalid email'
            });
        }
       
         if (user.pass !== pass) {
            return res.status(401).json({
                success: false,
                message: 'Invalid email or password',
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