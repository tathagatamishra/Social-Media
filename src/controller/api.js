// importing...
const UserModel = require('../model/usermodel')


exports.collectData = (data) => {
    console.log(data);
}

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