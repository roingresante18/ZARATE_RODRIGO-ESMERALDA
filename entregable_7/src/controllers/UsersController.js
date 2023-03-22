const fs = require('fs');
const path = require('path');


const home = (req, res) =>{
    res.render(path.join(__dirname, '../views/pages/home.ejs'))};
    
const cart = (req, res) =>{
    res.render(path.join(__dirname, '../views/pages/cart.ejs'))}; 
    
const DetailProduct = (req, res) =>{
    res.render(path.join(__dirname, '../views/pages/DetailProduct.ejs'))};
        
const login = (req, res) =>{
    res.render(path.join(__dirname, '../views/pages/login.ejs'))}; 

const register = (req, res) =>{
    res.render(path.join(__dirname, '../views/pages/register.ejs'))}; 

module.exports = {
    home,
    cart,
    DetailProduct,
    login,
    register
 }