const router = require("express").Router();
const apiRoutes = require("./change");

router.use("/change", apiRoutes);

module.exports = router;
