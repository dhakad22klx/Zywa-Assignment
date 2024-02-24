const express = require("express");
const userController = require("../Controller/userController");

const router = express.Router();

router.get("/getcardstatus",userController.getCardStatus);

module.exports = router;
