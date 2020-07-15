const express = require('express')
const bodyParser = require('body-parser');

import userController from './Controllers/users'
import createConnection from './DB/index'

const app = express()
const port = 8000

createConnection()


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/users', userController)


app.listen(port, (err) => {
    console.log('err>>>>>>', err)
})