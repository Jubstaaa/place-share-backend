const express = require("express");

const placesControllers = require("../controllers/places-controllers");
const placesValidations = require("../validations/places-validations");

const router = express.Router();

router.post("/add", placesValidations.addPlace, placesControllers.createPlace);

router.get("/:placeId", placesControllers.getPlaceById);

router.get("/user/:userId", placesControllers.getPlacesByUserId);

router.patch(
  "/:placeId",
  placesValidations.updatePlace,
  placesControllers.updatePlaceByUserId
);

router.delete("/:placeId", placesControllers.deletePlaceByUserId);

module.exports = router;
