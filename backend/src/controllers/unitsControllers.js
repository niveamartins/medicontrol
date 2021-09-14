const validators = require("../validators/validators");
const auth = require("./authControllers");
const {
    select,
    insert,
    remove,
    update
} = require("../models/models");

module.exports = {
    async create(req, res) {
        const token = req.headers['authorization']?.replace('Bearer ', '')

        const isLogged = await auth.verify(token)
        if (!isLogged) {
            return res.status(401).send({
                message: `Not logged.`,
            });
        }

        const emptyValidate = validators.notEmptyFields(req.body, ["name", "dosage", "frequency"])
        if (
            !emptyValidate.status
        ) {
            return res.status(500).send({
                message: `Verify if ${emptyValidate.emptyKey.replace("_", " ").capitalize()} field is not empty`,
            });
        }

        const {
            name,
            dosage,
            frequency,
        } = req.body

        let unitFound = await select("units", {
            STR_UnitName: name
        }, ["*"])

        if (unitFound.status) {
            return res.status(500).send("Unit already registered")
        }

        let response = await insert("units", {
            STR_UnitName: name,
            B_Dosage: dosage,
            B_Frequency: frequency
        }, ["SQ_Unit"]);

        if (response.status) {
            return res.status(200).send("OK");
        } else {
            return res.status(500).send("Couldn't sign up this unit at this time. Please, try again later.");
        }
    },
    async select(req, res) {
        const token = req.headers['authorization']?.replace('Bearer ', '')

        const isLogged = await auth.verify(token)

        if (!isLogged) {
            return res.status(401).send({
                message: `Not logged.`,
            });
        }

        const {
            type
        } = req.query;



        let response = await select("units", {
            [type]: true
        }, "*")

        if (response.status) {
            return res.status(200).send(response);
        } else {
            return res.status(500).send("Couldn't find any medicine. Please, try again later.");
        }

    },
};