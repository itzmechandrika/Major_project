const { request } = require('express');
const user = require('../modles/userModle');
const bcrypt = require('bcrypy');

const registerload= async(req, res)=>{
try{
res.render('register');
   } catch(error){
        console.log(error.message);
    }

}
const register=async(req, res)=>{
try{
    const passwordHash = bcrypt.hash(request.body.password, 10 );

    const user =new user({
        name: req.body.name,
        email:req.body.email,
        image:'images/'+req.file.filename,
        passwordHash: passwordHash
    });
    await user.save();
    res.render('register',{message:'registration sucsessfull'})

   } catch(error){
        console.log(error.message);
    }
}
const loadlogin=async(req,res)=>{
    try {
        res.render('login');
    } catch (error) {
        console.log(error.message);
    }
}
const login=async(req,res)=>{
    try {
        const email= req.body.email;
        const password=req.body.password;
        
        const userData = await user.findone({ email:email});
        if(userData){
            const passwordMatch = await bcrypt.compare(password, userData.password)
            if(passwordMatch){
                req.session.user = userData;
                res.redirect('/dashboard');
            }
            else{
                res.render('login', {message: 'email and passwordis incorrect!'});
            }
        }
        else{
            res.render('login', {message: 'email and passwordis incorrect!'});
        }

    }
     catch (error) {
        console.log(error.message);
    }
}
const loadlogout=async(req,res)=>{
    try {
        req.session.destroy();
        res.redirect('/');
    } catch (error) {
        console.log(error.message);
    }
}
const loaddashboard=async(req,res)=>{
    try {
        res.render('dashboard', {user:req.session.user});
    } catch (error) {
        console.log(error.message);
    }
}

module.exports ={
    registerload,
    register,
    loadlogin,
    login,
    loadlogout,
    loaddashboard,
};