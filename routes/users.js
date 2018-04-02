var express = require('express');
var router = express.Router();
 var path = require('path');

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.sendFile(path.normalize(__dirname + '/utilData.json'))
});

module.exports = router;
