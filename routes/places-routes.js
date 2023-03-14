const express = require("express");

const placesControllers = require("../controllers/places-controllers");
const placesValidations = require("../validations/places-validations");
const fileUpload = require("../middleware/file-upload");

const router = express.Router();

router.post(
  "/",
  fileUpload.single("image"),
  placesValidations.addPlace,
  placesControllers.createPlace
);

router.get("/:placeId", placesControllers.getPlaceById);

router.get("/user/:userId", placesControllers.getPlacesByUserId);

router.patch(
  "/:placeId",
  placesValidations.updatePlace,
  placesControllers.updatePlaceByUserId
);

router.delete("/:placeId", placesControllers.deletePlace);

module.exports = router;
