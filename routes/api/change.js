const router = require("express").Router();
const changeController = require("../../controllers").changeController;

// Matches with "/api/books"
router.route("/").post(changeController.create);
console.log(changeController);
console.log("change API ");
// Matches with "/api/books/:id"
// router.route("/:id")
//   .get(controller.findById)
//   .put(controller.update)
//   .delete(controller.remove);

module.exports = router;
