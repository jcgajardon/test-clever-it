const express = require("express");
const router = express.Router();

const functionController = require("../controller/functionController");

router.get("/api/function/primeNumbers/:number/", functionController.getPrimesNumbers);

module.exports = router;
