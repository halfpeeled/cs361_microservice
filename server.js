if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config()
}
const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const unitConverter = require('./routes/unitConverterRoute.js')
const app = express()
app.use(bodyParser.urlencoded({ limit: '10mb', extended: false }))
app.use(express.json())

app.listen(process.env.PORT || 3500)

app.use('/unit-converter', unitConverter)