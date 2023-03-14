const express = require("express");

const usersControllers = require("../controllers/users-controllers");
const usersValidations = require("../validations/users-validations");
const fileUpload = require("../middleware/file-upload");

const router = express.Router();

router.get("/", usersControllers.getUsers);

router.post(
  "/signup",
  fileUpload.single("image"),
  usersValidations.signup,
  usersControllers.signup
);

router.get("/login", usersControllers.login);

module.exports = router;
