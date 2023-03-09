const router = require("express").Router();

const { signUp } = require("../controller/api");


router.post("/signup", signUp)

module.exports = router;