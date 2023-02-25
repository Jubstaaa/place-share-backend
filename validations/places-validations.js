const { check } = require("express-validator");

const addPlace = [
  check("title").not().isEmpty(),
  check("description").isLength({ min: 5 }),
  check("address").not().isEmpty(),
];

const updatePlace = [
  check("title").not().isEmpty(),
  check("description").isLength({ min: 5 }),
];

exports.addPlace = addPlace;
exports.updatePlace = updatePlace;
