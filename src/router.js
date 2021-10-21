const apiRoutes = function (app) {
    
    //api routes
    app.use("/api/admins", require('./api/admins'))
    app.use("/api/schools", require('./api/schools'))
    app.use("/api/teachers", require('./api/teachers'))

}

module.exports = {
    apiRoutes
};