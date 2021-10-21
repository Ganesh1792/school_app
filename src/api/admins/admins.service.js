const Admin = require('../../model/admins')

const getAdmin = function (req) {
    try {
        return Admin.find(req.query);
    } catch (e) {
        return e;
    }
}

const getAdminById = function (req) {
    try {
        return Admin.find(req.params.id);
    } catch (e) {
        return e;
    }
}

const saveAdmin = function (req) {
    try{
        var admin = new Admin(req.body)
        return admin.save();
    }catch(e){
        return e;
    }
}

const updateAdmin = function (req) {
    try{
        return Admin.findByIdAndUpdate(req.params.id,req.body);
    }catch(e){
        return e;
    }
}

const deleteAdmin = function (req) {
    try{
        return Admin.findByIdAndDelete(req.params.id);
    }catch(e){
        return e;
    }
}

const logoutAdmin = async function (req) {
    try {
        var tokenArr = req.admin.tokens;
        req.admin.tokens = tokenArr.filter(function(item){
            return item.token !== req.token;
        });
        await req.admin.save();
        return;
    } catch (e) {
        return e;
    }
}

const logoutAllAdmin = async function (req) {
    try {
        req.admin.tokens = [];
        await req.admin.save();
        return;
    } catch (e) {
        return e;
    }
}

module.exports = {
    getAdmin,
    saveAdmin,
    updateAdmin,
    deleteAdmin,
    getAdminById,
    logoutAdmin,
    logoutAllAdmin
};