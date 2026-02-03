const express = require ('express');
const http = require('http');
const app = express();
require("dotenv").config();
const db = require('./app/models/db.js')
const userRoutes = require('./app/routes/user.js');
const cors = require ('cors');



app.use(cors());
app.use(express.json())
app.use('/login', userRoutes);


app.get('/',(req,res ) =>{
    res.send('hello world');
});





app.listen(3001,()=>{
    console.log("server is running on port 3001")
})
