const express = require('express')
const app = express()
const router = express.Router()
const User = require('../models/user')
const path = require('path')
app.use('/views', express.static(path.join(__dirname, 'public')))

router.get('/', async(req,res) => {
    try{
           const users = await User.find()
           res.render('index')
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
        email: req.body.email,
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