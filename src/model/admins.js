const mongoose = require('mongoose');
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');

const AdminSchema = mongoose.Schema({
    name:{
        type: String,
        trim: true,
        required: true
    },
    email: {
        type: String,
        trim: true,
        required: true,
        unique: true
    },
    password: {
        type: String,
        trim: true,
        required: true,
        minlength: 8
    },
    role: {
        type: String,
        required: true,
        default: "SUP_ADMIN",
        enum: ["SUP_ADMIN","SCH_ADMIN"]
    },
    tokens: [{
        token: {
            type: String
        }
    }]
},{
    timestamps: true
});


AdminSchema.statics.findByCredentials = async function (email, password) {
    const admin = await Admin.findOne({ email: email });

    if (!admin) {
        throw new Error("Unable to login");
    }
    console.log(admin);

    var isMatch = await bcrypt.compare(password, admin.password)

    // if (!isMatch) {
    //     throw new Error("Unable to login");
    // }

    return admin;
}

AdminSchema.methods.generateAuthToken = async function(){
    try{
        var admin = this;
        var token = jwt.sign({_id:admin._id},"keyforjwttoken",{
            expiresIn:"1 days"
        });
        admin.tokens = admin.tokens.concat({
            token: token
        });
        await admin.save();
        return token;
    }catch(e){
        return e;
    }
};

AdminSchema.pre("save", async function(next){
    var admin = this;
    admin.password = await bcrypt.hash(admin.password, 8);
    next();
})

const Admin = mongoose.model("Admin", AdminSchema);

module.exports = Admin;