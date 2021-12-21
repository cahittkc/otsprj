const validate = require("../middlewares/validate");
const authenticate = require("../middlewares/authenticate");
const schemas = require("../validations/Lessons")

const express = require("express")
const { create,list } = require("../controllers/Lessons")
const router = express.Router();



router.route("/").get(authenticate, list);
router.route("/").post(authenticate,validate(schemas.createValidation), create);


module.exports = router;

