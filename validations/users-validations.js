const { check } = require("express-validator");

const signup = [
  check("name").not().isEmpty(),
  check("email").normalizeEmail().isEmail(),
  check("password").isLength({ min: 6 }),
];

exports.signup = signup;
