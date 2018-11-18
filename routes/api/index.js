const router = require("express").Router();
const myportfolioRoutes = require("./myportfolio");

// myportfolio routes
router.use("/myportfolio", myportfolioRoutes);

module.exports = router;
