const express = require('express')
const config = require('./config/config')
require('./models/connection')
const port = config.server.port

const app = express()

app.get('/', (req, res) => {
    res.send('welcome adarsh')
})

app.listen(port, () => {
    console.log(`server is running on ${port}`);
})