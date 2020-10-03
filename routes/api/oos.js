const router = require("express").Router();
const ooscontroller = require("../../controllers/ooscontroller");

// Matches with "/api/oos"
router.route("/")
  .get(ooscontroller.findAll)
  .post(ooscontroller.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(ooscontroller.findById)
  .put(ooscontroller.update)
  .delete(ooscontroller.remove);

module.exports = router;