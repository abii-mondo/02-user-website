const express = require('express')
const mongoose = require('mongoose')

const app = express()
const port = 8080

// Connection to Atlas MongoDB
mongoose.connect('mongodb+srv://amondo:amondo@ngalabiiscluster.lurxh.mongodb.net/hiVisitorsWebsite?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true}, function(err, database){
    if (err){
        throw err
    }
    console.log("Connected to MongoDB...")
})

app.use(express.json())

const userRouter = require('./routes/userRoute')
app.use(userRouter)

app.listen(port, () => {
    console.log('Server started...')
})