const Teacher = require('../../model/teachers');

const getTeacher = function (req) {
    try {
        return Teacher.find(req.query).limit(parseInt(req.query.limit)).skip(parseInt(req.query.skip)).sort({"name": req.query.sortBy});
    } catch (e) {
        return e;
    }
};

const getTeacherById = function (req) {
    try {
        return Teacher.findById(req.params.id);
    } catch (e) {
        return e;
    }
};

const saveTeacher = function (req) {
    try{
        var teacher = new Teacher(req.body);
        return teacher.save();
    }catch(e){
        return e;
    }
};

const updateTeacher = function (req) {
    try{
        return Teacher.findByIdAndUpdate(req.params.id,req.body);
    }catch(e){
        return e;
    }
};

const deleteTeacher = function (req) {
    try{
        return Teacher.findByIdAndDelete(req.params.id);
    }catch(e){
        return e;
    }
};

module.exports = {
    getTeacher,
    saveTeacher,
    updateTeacher,
    deleteTeacher,
    getTeacherById
};