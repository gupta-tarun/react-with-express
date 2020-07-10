const ensureLogin = (req, res, next) => {
    console.log('checking if the request is authed! '+JSON.stringify(req.session))
    if(!req.session || !
        req.session.userId) { return res.redirect('/login.html') }
    next();
}

module.exports.ensureLogin = ensureLogin;