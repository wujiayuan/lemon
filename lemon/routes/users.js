var express = require('express');
var router = express.Router();

var user = require('./user');
/* GET users listing. */

/* 添加用户 */
router.post('/', user.addUser);

module.exports = router;