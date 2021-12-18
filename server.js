const express = require('express')

const app = express()

app.use(express.urlencoded({ extended:true }))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.post('/user', (req, res) => {
    if(req.body.username === 'admin' && req.body.password === 'password') {
        res.redirect('/resource')
    } else {
        res.redirect('/')
    }
})

app.get('/resource', (req, res) => {
    res.send('Hello admin')
})

app.listen(3000, () => console.log('Server started!'))