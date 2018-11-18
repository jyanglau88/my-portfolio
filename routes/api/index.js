const router = require("express").Router();
const contactMeRoutes = require("./contactme");

// contactme routes
router.use("/contactme", contactMeRoutes);

module.exports = router;
