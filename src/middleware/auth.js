const jwt = require("jsonwebtoken");
const Admin = require("../model/admins");
const auth = async (req, res, next) => {
    try {
        var token = req.header("Authorization").replace("Bearer ", "");
        var decoded = jwt.verify(token, "keyforjwttoken");
        const admin = await Admin.findOne({ _id: decoded._id });
        if (!admin) {
            throw new Error("Unauthentication");
        }
        req.admin = admin;
        req.token = token;
        next();

    } catch (e) {
        res.status(401).send("unauthorised");
    }
}

module.exports = auth;