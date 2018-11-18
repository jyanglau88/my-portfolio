const router = require("express").Router();
const myController = require("../../controllers/myController");

// Matches with "/api/myportfolio"
router.route("/")
  .get(myController.findAll)
  .post(myController.create);

// Matches with "/api/myportfolio/:id"
router
  .route("/:id")
  .get(myController.findById)
  .put(myController.update)
  .delete(myController.remove);

module.exports = router;