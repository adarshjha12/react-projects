const express = require('express')
const config = require('./config/config')
require('./models/connection')
const port = config.server.port
require('./controllers/index')
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/', (req, res) => {
    res.send('welcome adarsh')
})

app.listen(port, () => {
    console.log(`server is running on ${port}`);
})