const express = require('express')
const router = express.Router()
const User = require('../models/user')


router.get('/', async(req,res) => {
    try{
           const users = await User.find()
           res.json(users)
    }catch(err){
        res.send('Error ' + err)
    }
})

router.get('/:id', async(req,res) => {
    try{
           const user = await User.findById(req.params.id)
           res.json(user)
    }catch(err){
        res.send('Error ' + err)
    }
})


router.post('/register', async(req,res) => {
    const user = new User({
        username: req.body.username,
        email: req.body.eamil,
        password: req.body.password
    })

    try{
        const result =  await user.save() 
        res.json(result)
    }catch(err){
        res.send(err)
    }
})

router.patch('/:id',async(req,res)=> {
    try{
        const user = await User.findById(req.params.id) 
        user.username = req.body.username
        const result = await user.save()
        res.json(result)   
    }catch(err){
        res.send('Error')
    }

})

module.exports = router