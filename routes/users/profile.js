const express = require('express');
const router  = express.Router();
const User = require('../../models/User')
const {verifyToken} = require ('../../helpers/jwt')


// router.post('/profile/:id', verifyToken,  (req,res,next)=>{
//     Route.findById()
//     .then ()
//     .catch(error=>{
//       res.status(500).json(error)
//     })
//   })


router.post('/add-route', verifyToken,  (req,res,next)=>{
    const {_id} = req.user
    User.findByIdAndUpdate(_id,{$push:{routes:req.body.routeid}},{new:true})
    .then (user=>{
      res.status(201).json(user)
    })
    .catch(error=>{
      res.status(500).json(error)
    })
  })



  

module.exports = router