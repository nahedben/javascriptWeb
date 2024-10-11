// const express = require("express");
// const router = express.Router();
// const postsController = require("../controllers/post.controller");

// router.get("/", postsController.index);

// module.exports = router;

const express = require("express");
const postController = require("../controllers/post.controller");
const router = express.Router();
router.get("/", postController.save);

module.exports = router;
