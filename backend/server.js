const express = require ('express');
const http = require('http');
const app = express();
const userRoutes = require('./routes/user.js');
const cors = require ('cors');


app.use(cors());
app.use(express.json())
app.use('/users', userRoutes);


app.get('/',(req,res ) =>{
    res.send('hello world');
});



app.listen(3001,()=>{
    console.log("server is running on port 3001")
})
