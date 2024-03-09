const express = require('express');
const { executeQuery } = require('../database/queryFunc');
const router = express();

router.post('/login',async(req,res)=>{
    try{
    const {username,password}=req.body.userData;
    console.log("hello world..!",req.body.userData);
    const query = `SELECT * FROM users where username=?`
   const user= await executeQuery(query,[username]);
   console.log(user);
    res.send(user);
    }catch(e){
        res.sendStatus('400');
    }

});

module.exports = router;