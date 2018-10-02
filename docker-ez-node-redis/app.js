const express = require('express')
const redis = require('redis')

const client = redis.createClient(6379, 'redis')
client.on('connect', () => console.log('redis connected'))

const app = express()
app.get('/', (req, res, next) => {
    res.send('Hello world!')
})

app.listen(3000, () => console.log('Server started'))