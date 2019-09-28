const router = require("express").Router();
const registerController = require("../../controllers").registerController;

// Matches with "/api/books"
router.route("/")  
  .post(registerController.create);
console.log(registerController)
console.log("register API ")
// Matches with "/api/books/:id"
// router.route("/:id")
//   .get(controller.findById)
//   .put(controller.update)
//   .delete(controller.remove);

module.exports = router;