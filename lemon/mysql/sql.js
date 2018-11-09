module.exports = {
    //添加用户
    ADD_USER: "insert into userlist (user_id,nike_name) values(?,?)",
    //查询用户名是否存在
    SEARCH_USER: "select * from userlist where nike_name=?"
        //添加
}