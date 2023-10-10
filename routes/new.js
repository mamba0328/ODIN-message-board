const express = require('express');
const router = express.Router();

const messages = require('../mockDB/mockMessages')

router.get('/', function(req, res, next) {
    res.render('new', { title: 'New message' });
});

router.post('/', function(req, res, next) {
    const {user, text} = req.body;
    messages.push({
        text,
        user,
        added: new Date()
    })
    res.render('new');
});


module.exports = router;