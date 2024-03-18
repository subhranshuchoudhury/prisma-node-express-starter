const {
  createPost,
  getAllUsersPosts,
  deletePost,
} = require("../controllers/postController");
const express = require("express");
const router = express.Router();

router.route("/create-post").post(createPost);
router.route("/get-users-posts").get(getAllUsersPosts);
router.route("/delete-post").post(deletePost);

module.exports = router;
