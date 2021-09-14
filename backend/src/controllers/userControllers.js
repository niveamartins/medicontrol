const validators = require("../validators/validators");
const bcrypt = require("bcrypt");
const {
  select,
  insert
} = require("../models/models");

module.exports = {
  async signUp(req, res) {

    const emptyValidate = validators.notEmptyFields(req.body, ["name", "password", "email"])
    if (
      !emptyValidate.status
    ) {
      return res.status(500).send({
        message: `Verify if ${emptyValidate.emptyKey.capitalize()} field is not empty`,
      });
    }

    if (validators.verifyFields(req.body.email, "email")) {
      return res.status(500).send({
        message: "Invalid e-mail",
      });
    }

    const crypto = require("crypto");

    const userKey = crypto.randomBytes(6).toString("hex")

    let response = await insert("user", {
      STR_UserKey: userKey,
      STR_Name: req.body.name,
      STR_Password: bcrypt.hashSync(req.body.password + userKey, 10),
      STR_Email: req.body.email,
    }, ["SQ_User"]);

    if (response.status) {
      return res.status(200).send("OK");
    } else {
      return res.status(500).send("Couldn't sign up this user at this time. Please, try again later.");
    }
  },
  async signIn(req, res) {

    const emptyValidate = validators.notEmptyFields(req.body, ["password", "email"])
    if (
      !emptyValidate.status
    ) {
      return res.status(500).send({
        message: `Verify if ${emptyValidate.emptyKey.capitalize()} field is not empty`,
      });
    }

    const userFound = await select("user", {
      STR_Email: req.body.email
    }, "*");

    let password;

    userFound
      ?
      (password = req.body.password + userFound[0].STR_UserKey) :
      res.status(500).send("E-mail or password sent is invalid.");

    bcrypt.compareSync(password, userFound.STR_Password) ?
      res.status(200).send("OK") :
      res.status(500).send("E-mail or password sent is invalid.");
  },
};