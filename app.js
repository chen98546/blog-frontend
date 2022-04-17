let path = require('path');
let express = require('express');
let cors = require('cors');


let app = express()

app.use(cors())

app.use('/bootstrap', express.static(path.join(__dirname, '/bootstrap')))
app.use('/css', express.static(path.join(__dirname, '/css')))
app.use('/js', express.static(path.join(__dirname, '/js')))
app.use('/image', express.static(path.join(__dirname, '/image')))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/index.html'))
})
app.get('/cate', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/cate.html'))
})
app.get('/detail', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/detail.html'))
})

app.listen(10086, () => {
    console.log('server is running at port 10086');
})