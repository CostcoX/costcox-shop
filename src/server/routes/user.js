const { resgisterUser, loginUser } = require("../controller/userController");

const express = require("express"),
  router = new express.Router();

router.get("/register", resgisterUser);
router.post("/login", loginUser);

module.exports = router;
