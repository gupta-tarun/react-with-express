const express = require('express')
const router = express.Router();

router.post('/login',  (req, res) => {
    req.session.userId = 1;
    res.redirect('/app/index.html')
})

router.get('/register',  (req, res) => {
    res.send('Regiesters')
})

module.exports = router