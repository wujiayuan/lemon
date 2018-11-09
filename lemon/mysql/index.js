var mysql = require('mysql');
var obj = {
    user: "root",
    password: "root",
    port: 3306,
    database: "sortlist", //库名
    connectionLimit: 100
}
var pool = mysql.createPool(obj);

module.exports = function(sql, query, fn) {
    fn = fn ? fn : query;
    query = query || [];

    function connection(err, con) {
        if (err) {
            fn(err)
        }
        con.query(sql, query, function(err, results) {
            if (err) {
                fn(err)
            } else {
                fn(null, results);
            }
            con.release();
        })
    }
    pool.getConnection(connection);
}