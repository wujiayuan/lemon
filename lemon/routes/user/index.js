var cPool = require('../../mysql');
var sql = require('../../mysql/sql');

function addUser(req, res, next) {
    var name = req.body.nike_name;
    var userId = req.body.user_id;
    console.log(name, userId);
    // res.json({ code: 2, msg: 'madan' })
    if (name) {
        res.json({ code: 0, name });
        // return;
    } else if (!userId) {
        isHas();
    }

    function isHas() {
        query(sql.SEARCH_USER, [name], function(err, results) {
            if (!err) {
                if (results.length > 0) {
                    res.json({ code: 3, msg: "用户名已经存在" });
                } else {
                    add();
                }
            } else {
                res.json({ code: 0, msg: "服务器有问题" });
            }
        })
    }

    function add() {
        query(sql.ADD_USER, [user_id, nike_name], function(err, results) {
            if (!err) {
                res.json({ code: 1, results });
            } else {
                res.json({ code: 0, msg: "添加用户失败" })
            }

        })
    }
}
module.exports = {
    addUser: addUser
}