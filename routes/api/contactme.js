const router = require("express").Router();
const contactMeController = require("../../controllers/contactMeController");

// Matches with "/api/contactme"
router.route("/")
  .get(contactMeController.findAll)
  .post(contactMeController.create);

// Matches with "/api/contactme/:id"
router
  .route("/:id")
  .get(contactMeController.findById)
  .put(contactMeController.update)
  .delete(contactMeController.remove);

module.exports = router;