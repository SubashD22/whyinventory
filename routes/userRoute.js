const express = require('express')
const router = express.Router();
router.get('/user',async(req,res)=>{
  res.status(200).send('user')
})
module.exports = router