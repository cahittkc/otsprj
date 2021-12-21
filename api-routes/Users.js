const validate = require("../middlewares/validate");

const schemas = require("../validations/Users")

const express = require("express")
const { create,list,login } = require("../controllers/Users")
const router = express.Router();



router.get("/", list);
router.route("/").post(validate(schemas.createValidation), create);
router.route("/login").post(validate(schemas.loginValidation), login);


module.exports = router;
