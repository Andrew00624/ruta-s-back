const express = require('express');
const router  = express.Router();
const User = require('../../models/User')


/*router.get('/:id', (req,res,next)=>{
    Promise.all([User.findById(req.params.id)])
    .then(result=>{
        const user = result[0]
        user.pictures = result[1]
        res.status(200).json(user)
    }).catch(e=>{
        console.log(e)
    })
})*/

module.exports = router