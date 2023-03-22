const {name} = require('ejs')
const path = require('path');
const userController = require('../controllers/UsersController')


module.exports = function (app) {
    app.get('/', userController.home);
    app.get('/cart', userController.cart);
    app.get('/DetailProduct', userController.DetailProduct);
    app.get('/login', userController.login);
    app.get('/register', userController.register); 
}