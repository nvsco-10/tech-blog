const router = require('express').Router();
const { User, Post } = require('../models');

router.get('/', async (req, res) => {
    res.render('dashboard', { loggedIn: req.session.loggedIn })
});

router.get('/newpost', async (req, res) => {
    res.render('newpost', { loggedIn: req.session.loggedIn })
});


module.exports = router;