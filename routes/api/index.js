const path = require("path");
const router = require("express").Router();
const changeMe = require("./change");
// const feedMe = require("./feedme");
// const login = require("./login");
// const register = require("./register");
// const zzz = require("./zzz");

// changeMe routes
router.use("/change", changeMe);
// feedMe routes
// router.use("/feedMe", feedMe);
// // login routes
// router.use("/login", login);
// // register routes
// router.use("/register", register);
// // zzz routes
// router.use("/zzz", zzz);


module.exports = router;