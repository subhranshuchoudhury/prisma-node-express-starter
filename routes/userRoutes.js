const express = require("express");
const {
  signUp,
  updateUser,
  getUser,
  deleteUser,
} = require("../controllers/userController");
const router = express.Router();

router.route("/signup").post(signUp);
router.route("/update-user").post(updateUser);
router.route("/get-user-id").post(getUser);
router.route("/delete-user-id").post(deleteUser);

module.exports = router;
