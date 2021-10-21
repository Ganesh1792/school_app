const mongoose = require('mongoose');

const SchoolSchema = mongoose.Schema({
    
    name: {
        type: String,
        trim: true,
        required: true
    },
    address: {
        street: String,
        city: String,
        state: {
            type: String,
            uppercase: true,
            required: true,
            enum: ["TAMILNADU", "KERALA", "KARNATAKA", "A.P"]
        },
        pincode: Number
    }
});

const School = mongoose.model("School", SchoolSchema);

module.exports = School;