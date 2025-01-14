const config = require('./config')
const mongoose = require('mongoose')

const uri = config.database.uri

mongoose.connect(uri)
.then( () => console.log('connection successful'))
.catch( () => console.log('connection successful'))