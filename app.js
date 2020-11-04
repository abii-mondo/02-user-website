const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const ejs = require('ejs')
const app = express()
const port = 8080
const userRouter = require('./routes/userRoute')

app.use(express.json())
app.use(userRouter)
app.use(cors())

app.set('view engine', 'ejs')

route.set('views', __dirname + './public/views')
route.use(express.static(__dirname + './public'))




// Connection to Atlas MongoDB
mongoose.connect('mongodb+srv://amondo:amondo@ngalabiiscluster.lurxh.mongodb.net/hiVisitorsWebsite?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true}, function(err, database){
    if (err){
        throw err
    }
    console.log("Connected to MongoDB...")
})


app.listen(port, () => {
    console.log('Server started...')
})