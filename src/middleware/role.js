const compose = require ('composable-middleware');

const checkRole = function(role){
    return compose()
        .use(function(req,res,next){
            if(req.admin.role !== role){
                return res.status(403).send("Unauthorised");
            }
            next();
        })
}

module.exports = checkRole;