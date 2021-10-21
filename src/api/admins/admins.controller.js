const service = require('./admins.service');
const Admin = require('../../model/admins');

const  getAdmin = async function(req,res){
    try{
        const admin = await service.getAdmin(req);    
        res.status(200).send(admin);
    }catch(e){
        res.status(500).send(e);
    }
};

const  getAdminById = async function(req,res){
    try{
        const admin = await service.getAdminById(req)
        res.status(200).send(admin);
    }catch(e){
        res.status(500).send(e);
    }
};

const  saveAdmin = async function(req,res){
    try{
        const admin = await service.saveAdmin(req)
        res.status(200).send(admin);
    }catch(e){
        res.status(500).send(e);
    }
};

const  updateAdmin = async function(req,res){
    try{
        await service.updateAdmin(req);
        res.status(200).send("Update successfully");
    }catch(e){
        res.status(500).send(e);
    }
};

const  deleteAdmin = async function(req,res){
    try{
        await service.deleteAdmin(req);
        res.status(200).send("Delete successfully");
    }catch(e){
        res.status(500).send(e);
    }
};
const loginAdmin = async function(req,res){
    try{
        var admin = await Admin.findByCredentials(req.body.email,req.body.password);
        var token = await admin.generateAuthToken();
        res.cookie('jwt',token);
        res.status(200).send({
            admin,
            token
        })
    }catch(e){
        console.log(e);
        res.status(400).send({
            err: e
        });
    } 
};

const logoutAdmin = async function(req, res){
    try{
        await service.logoutAdmin(req);
        res.status(200).send("logout successfully");
    }catch(e){
        res.status(500).send("unable to logout");
    }
};

const logoutAllAdmin = async function(req, res){
    try{
        await service.logoutAllAdmin(req);
        res.status(200).send("logout successfully");
    }catch(e){
        res.status(500).send("unable to logout")
    }
};

module.exports = {
    getAdmin,
    saveAdmin,
    updateAdmin,
    deleteAdmin,
    loginAdmin,
    logoutAdmin,
    getAdminById,
    logoutAllAdmin
};