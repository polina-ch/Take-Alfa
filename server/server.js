require('dotenv').config()
const express = require('express')
const cors = require('cors')

const app = express()
const PORT = process.env.PORT || 3080

const userRouter = require('./routes/userRouter')

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())
app.use('/user', userRouter)

app.get('/', (req, res) => {
    res.json({message: 'works fine'})
})

app.listen(PORT, ()=> {
    console.log(`server started on PORT: ${PORT}`)
})