const express = require("express");

const usersControllers = require("../controllers/users-controllers");
const usersValidations = require("../validations/users-validations");

const router = express.Router();

router.get("/", usersControllers.getUsers);

router.post("/signup", usersValidations.signup, usersControllers.signup);

router.get("/login", usersControllers.login);

module.exports = router;
