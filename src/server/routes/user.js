const { resgisterUser } = require("../controller/userController");

const express = require("express"),
  router = new express.Router();

router.get("/register", resgisterUser);

module.exports = router;
