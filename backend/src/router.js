const express = require("express");

const { UploadController } = require("./controllers");

const router = express.Router();

router.post("/upload", UploadController.upload);

module.exports = router;
