const express = require('express')
const bodyParser = require('body-parser');
const app = express()
const port = 8000


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use((req, res, next) => {
    const {originalUrl} = req
    const { authorization } = req.headers
    console.log("id>>>>>", req.headers)
    if(originalUrl === '/test/1') {
        next()
    } else {
        res.send({product: 'hgghjgjhg'})
    }
})

app.get('/:urlParams/:page', (req, res) => {
    console.log("req", req.params)
    res.send('hello word')
})

app.post('/test', (req, res) => {

    // console.log('usename>>>>', req)
    const { usename } = req.body
    console.log('usename>>>>', usename)
    res.send('hello word ')
})

app.listen(port, (err) => {
    console.log('err>>>>>>', err)
})