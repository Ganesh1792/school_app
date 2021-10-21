const mongoose = require('mongoose');

const TeacherSchema = mongoose.Schema({
    
    name:{
        type: String,
        trim: true,
        required: true
    },
    department: {
        type: String,
        trim: true,
        required: true,
    }
});

const Teacher = mongoose.model("Teacher", TeacherSchema);

module.exports = Teacher;