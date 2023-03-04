// importing...
const UserModel = require('../model/usermodel')


// controller functions...

exports.signUp = async (req, res) => {
    try {
        let data = req.body

        let userData = await UserModel.create(data)

        res.status(201).send({
            status: true,
            message: "Your account created successfully!",
            data: userData,
        });
    }
    catch (err) {
        res.status(500).send({
            status: false,
            message: "Internal Server Error!",
            error: err.message
        });
    }
};


exports.login = async (req, res) => {
    try {
        let userData = "x";
        res.status(201).send({
            status: true,
            message: "You logged in successfully!",
            data: userData,
        });
    }
    catch (err) {
        res.status(500).send({
            status: false,
            message: "Internal Server Error!",
            error: err.message
        });
    }
};


exports.profile = async (req, res) => {
    try {
        let userData = "x";
        res.status(201).send({
            status: true,
            message: "Profile",
            data: userData,
        });
    }
    catch (err) {
        res.status(500).send({
            status: false,
            message: "Internal Server Error!",
            error: err.message
        });
    }
};


exports.update = async (req, res) => {
    try {
        let userData = "x";
        res.status(201).send({
            status: true,
            message: "Profile updated successfully!",
            data: userData,
        });
    }
    catch (err) {
        res.status(500).send({
            status: false,
            message: "Internal Server Error!",
            error: err.message
        });
    }
};
