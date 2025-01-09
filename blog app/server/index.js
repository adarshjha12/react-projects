const express = require('express')
const config = require('./config/config')
require('./config/connection')
const port = config.server.port
require('./controllers/signup')
const cors = require('cors')
const app = express()
const router = require('./routers/routes')

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())
app.use(router)

// app.get('/', (req, res) => {
//     res.send('welcome adarsh')
// })

app.listen(port, () => {
    console.log(`server is running on ${port}`);
})