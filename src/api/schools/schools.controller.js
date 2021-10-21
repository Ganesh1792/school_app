const service = require('./school.service');

const  getSchool = async function(req,res){
    try{
        const school = await service.getSchool(req);
        res.status(200).send(school);
    }catch(e){
        res.status(500).send(e);
    }
};

const  getSchoolById = async function(req,res){
    try{
        const school = await service.getSchoolById(req);
        res.status(200).send(school);
    }catch(e){
        res.status(500).send(e);
    }
};

const  saveSchool = async function(req,res){
    try{
        const school = await service.saveSchool(req);
        res.status(200).send(school);
    }catch(e){
        res.status(500).send(e);
    }
};

const  updateSchool = async function(req,res){
    try{
        await service.updateSchool(req);
        res.status(200).send("Update successfully");
    }catch(e){
        res.status(500).send(e);
    }
};

const  deleteSchool = async function(req,res){
    try{
        await service.deleteSchool(req);
        res.status(200).send("Delete successfully");
    }catch(e){
        res.status(500).send(e);
    }
};

module.exports = {
    getSchool,
    saveSchool,
    updateSchool,
    deleteSchool,
    getSchoolById
};