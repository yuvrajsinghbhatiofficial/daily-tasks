const express = require('express');
const router = express.Router();
// app.use(express.json())



const user = {
    'name': "username",
    'email': "root@gmail.com",
}

router.get('/', (req, res) => {
    res.send("this is user route");
});

router.post('/login', (req, res) => {
    console.log(req.body);
    res.json({success:true,message:'Successfully login'});
});

module.exports = router;