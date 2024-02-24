const express = require('express');
const user_route =express();

const bodyparser = require('body-parser');
const session =  require('express-session');
const {SESSION_SECRET} = process.env;
user_route.use(session({secret:SESSION_SECRET}));

user_route.use(bodyparser.json());
user_route.use(bodyparser.urlencoded({ extended:true}));

user_route.set('view engine','ejs');
user_route.set('views','./views');

user_route.use(express.static('public'));
const path =require('path');
const multer = require('multer');

const storage = multer.diskStorage({
    destination:function(req,file,cb){
        const name = Date.now()+'-'+file.originalname;
        cb(null,name);
    }
});

const upload = multer({ storage:storage});
const userController = require('../controlers/userController')
const auth = require('../middlewears/auth');

user_route.get('/register', auth.islogout, userController.registerload);
user_route.get('/register', userController.registerload);
user_route.post('/register',upload.single(image),userController.register );
user_route.get('/', userController.loadlogin);
user_route.get('/', userController.login);
user_route.get('/logout',  auth.islogin, userController.loadlogout);
user_route.get('/dashboard', auth.islogin, userController.loaddashboard);
user_route.get('*',function(req,res){
    resizeBy.redirect('/');
})
module.exports= user_route;
