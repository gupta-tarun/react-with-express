const express = require('express')
const router = express.Router();

router.get('/',  (req, res) => {
    res.send('Welcome')
})

router.post('/login',  (req, res) => {
    req.session.userId = 1;
    res.redirect('/app/index.html')
})

module.exports = router