// Check if the user is logged in before accessing a route
module.exports.isAuthenticated = function (req, res, next) {
    if(req.isAuthenticated()) {
        return next();
    } else {
        req.flash('error_msg', 'You must be logged in to access this page.');
        res.redirect('/users/login');
    }
};