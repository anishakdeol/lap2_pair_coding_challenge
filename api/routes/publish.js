const express = require("express");
const router = express.Router();
const postController = require("../controllers/publish");

router.get("/", postController.index);
router.get("/:id", postController.show);
router.post("/", postController.create);

module.exports = router;
