const express = require('express')
var handlebars = require('express-handlebars');
const path = require('path');
const app = express()
const port = 3000

//template engine
app.engine('hbs', handlebars.engine({
    extname: '.hbs' // config
}));
app.set('view engine', 'hbs');

app.set('views', path.join(__dirname, 'resources', 'views'))


//http://localhost:3000/phuong-kk
app.get('/phuong-kk', (req, res) => {
    res.render('phuong-kk');
});

app.get('/news', (req, res) => {
    res.render('home');
});

// app.get('/', function (req, res) {
//     return res.send('Hello World!')
//   })

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))

