const express = require('express')
const app = express()
const port = 3000
//http://localhost:3000/phuong-kk
app.get('/phuong-kk', (req, res) => res.send('Hello World!'))

var a=1;
var b=1;

// app.get('/', function (req, res) {
//     return res.send('Hello World!')
//   })

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
