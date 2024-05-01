const express = require('express')
const cors = require('cors')
const phones = require('./phones.json')
const app = express()
const port = 5000

app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/phones', (req, res) => {
    res.send(phones)
})

app.get('/phones/:id', (req, res) => {
    const id = parseInt(req.params.id);
    console.log("Phone id is:", id)
    const phone = phones.find(phone => phone.id === id) || {};
    res.send(phone)
})

app.get('/data', (req, res) => {
    res.send('Data is coming soon 4')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})