const express = require ('express')
const router = express.Router ()
const Route = require ('../../models/Route')
const User = require ('../../models/User')
const {verifyToken} = require ('../../helpers/jwt')



router.get('/routes-list',verifyToken,  (req,res,next) => {
  Route.find()
  .then (routes=>{
    console.log('lol')
    res.status(201).json(routes)
  })
  .catch(error=>{
    res.status(500).json(error)
  })
})

router.post('/create-route', verifyToken,  (req,res,next)=>{
  req.body.creador = req.user._id
  Route.create(req.body)
  .then (route=>{
    res.status(201).json(route)
  })
  .catch(error=>{
    res.status(500).json(error)
  })
})


module.exports = router