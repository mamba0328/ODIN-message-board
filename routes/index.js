var express = require('express');
const newRouter = require('./new');
var router = express.Router();

const messages = require('../mockDB/mockMessages')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', messages,});
});

router.use('/new', newRouter);


module.exports = router;
