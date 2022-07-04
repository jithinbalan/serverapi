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

const PORT =  3306

//Server

app.listen(process.env.PORT || PORT, () => {
    console.log(`server is running on port ${PORT}`)
})