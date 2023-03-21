const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () =>{console.log(`Example app listening on port ${port}!`)})

app.get('/home', (req, res) =>{
   res.sendFile(path.join(__dirname, 'views/home.html'))
});
app.get('/cart', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/cart.html'))
});
app.get('/DetailProduct', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/DetailProduct.html'))
});
app.get('/formInit', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/formInit.html'))
});
app.get('/formRegistro', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/formRegistro.html'))
});

