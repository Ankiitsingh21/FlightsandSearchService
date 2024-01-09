const express =require('express');
//require('dotenv').config()


const {PORT} = require('./config/serverconfig');
const setupandStartServer=async()=>{
   // create the express object
   const app = express();
   app.listen(PORT,()=>{
        console.log(`server started at ${PORT}`)
   });

}

setupandStartServer();