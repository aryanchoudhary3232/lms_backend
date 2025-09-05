const express = require('express')
const app = express()
require('dotenv').config()
const mongoose  = require('mongoose')


const authRoutes = require('./routes/authRoutes')

app.use(express.json())

mongoose.connect(`${process.env.MONGODB_URL}`).then(() => console.log('mongodb connected')).catch((err) => console.log('error comes',err))

app.get('/', (req,res) => {
    res.send('backend is running')
})

app.use('/auth', authRoutes)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`server is listening on ${PORT}`)
})