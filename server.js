const express = require('express')
const cors = require('cors')
// Required Modules 
const cityRouter = require('./routes/cityRouter')
const adminRouter = require('./routes/adminRouter')



const app = express()


// Middleware
app.use(cors())

app.use(express.json())

app.use(express.urlencoded({ extended: true }))


app.get('/test', (req, res) => {
    res.send('I am alive !')
})

// Routers
app.use('/api/cities', cityRouter)

app.use('/api/admin', adminRouter)


//Port

// const PORT = process.env.PORT || 8080 //For Development only
const PORT = process.env.PORT || 3306 //For Production only


//Server

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})