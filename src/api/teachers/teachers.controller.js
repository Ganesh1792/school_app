const service = require('./teachers.service');

const  getTeacher = async function(req,res){
    try{
        const teacher = await service.getTeacher(req);
        res.status(200).send(teacher);
    }catch(e){
        res.status(500).send(e);
    }
};

const  getTeacherById = async function(req,res){
    try{
        const teacher = await service.getTeacherById(req);
        res.status(200).send(teacher);
    }catch(e){
        res.status(500).send(e);
    }
};

const  saveTeacher = async function(req,res){
    try{
        const teacher = await service.saveTeacher(req);
        res.status(200).send(teacher);
    }catch(e){
        res.status(500).send(e);
    }
};

const  updateTeacher = async function(req,res){
    try{
        await service.updateTeacher(req);
        res.status(200).send("Update successfully");
    }catch(e){
        res.status(500).send(e);
    }
};

const  deleteTeacher = async function(req,res){
    try{
        await service.deleteTeacher(req);
        res.status(200).send("Delete successfully");
    }catch(e){
        res.status(500).send(e);
    }
};

module.exports = {
    getTeacher,
    saveTeacher,
    updateTeacher,
    deleteTeacher,
    getTeacherById
};