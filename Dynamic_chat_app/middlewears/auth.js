const islogout = async(req,res, next)=>{
    try {
        if (req.session.user) {
            
        } else {
            res.redirect('/dashboard');
        }

        next();
    } catch (error) {
        console.log(erroe.message);
    }
}
module.exports = {
    islogin,
    islogout,
}