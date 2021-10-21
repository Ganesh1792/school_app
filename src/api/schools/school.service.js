const School = require('../../model/schools');

const getSchool = function (req) {
    try {
        return School.find(req.query).limit(parseInt(req.query.limit)).skip(parseInt(req.query.skip)).sort({"name": req.query.sortBy});
    } catch (e) {
        return e;
    }
};

const getSchoolById = function (req) {
    try {
        return School.find(req.query);
    } catch (e) {
        return e;
    }
};

const saveSchool = function (req) {
    try{
        var school = new School(req.body)
        return school.save();
    }catch(e){
        return e;
    }
};

const updateSchool = function (req) {
    try{
        return School.findByIdAndUpdate(req.params.id,req.body);
    }catch(e){
        return e;
    }
};

const deleteSchool = function (req) {
    try{
        return School.findByIdAndDelete(req.params.id);
    }catch(e){
        return e;
    }
};

module.exports = {
    getSchool,
    saveSchool,
    updateSchool,
    deleteSchool,
    getSchoolById
};