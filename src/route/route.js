// importing...
const router = require("express").Router();

const { signUp, login, profile, update } = require("../controller/firstfour");


// APIs...
router.get("/test", (req, res) => res.send("working"));

// First 4 APIs...
router.post ("/signup",     signUp  )
router.post ("/login",      login   )
router.get  ("/profile",    profile )
router.post ("/update",     update  )


module.exports = router;