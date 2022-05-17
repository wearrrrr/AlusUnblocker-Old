const express = require('express')
const router = express.Router();

router.get('/', function(req, res, next) {
    res.render('games/osu/public/index');
  });
  
  module.exports = router;