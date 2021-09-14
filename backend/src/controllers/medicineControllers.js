const validators = require("../validators/validators");
const bcrypt = require("bcrypt");
const {
    select,
    insert,
    remove,
    update
} = require("../models/models");

module.exports = {
    async create(req, res) {
        const emptyValidate = validators.notEmptyFields(req.body, ["name", "dosage", "dosage_unit", "frequency", "frequency_unit"])
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
            dosage_unit,
            frequency,
            frequency_unit
        } = req.body

        let response = await insert("medicine", {
            STR_Medicine: name,
            NR_Dosage: dosage,
            FK_SQ_UnitDosageID: dosage_unit,
            NR_Frequency: frequency,
            FK_SQ_UnitFrequencyID: frequency_unit,
        }, ["SQ_Medicine"]);

        if (response.status) {
            return res.status(200).send("OK");
        } else {
            return res.status(500).send("Couldn't sign up this medicine at this time. Please, try again later.");
        }
    },
    async update(req, res) {
        const emptyValidate = validators.notEmptyFields(req.body, ["id"])

        if (
            !emptyValidate.status
        ) {
            return res.status(500).send({
                message: `Verify if ${emptyValidate.emptyKey.capitalize()} field is not empty`,
            });
        }
        const {
            id,
            name,
            dosage,
            dosage_unit,
            frequency,
            frequency_unit
        } = req.body

        const data = {
            STR_Medicine: name,
            NR_Dosage: dosage,
            FK_SQ_UnitDosageID: dosage_unit,
            NR_Frequency: frequency,
            FK_SQ_UnitFrequencyID: frequency_unit,
        }

        for (key in data) {
            if (data[key] === undefined) {
                delete data[key]
            }
        }

        let response = await update("medicine", {
            SQ_Medicine: id
        }, data, ["SQ_Medicine"])

        if (response.status) {
            return res.status(200).send("OK");
        } else {
            return res.status(500).send("Couldn't update this medicine at this time. Please, try again later.");
        }

    },
    async removeMedicine(req, res) {
        const emptyValidate = validators.notEmptyFields(req.body, ["id"])

        if (
            !emptyValidate.status
        ) {
            return res.status(500).send({
                message: `Verify if ${emptyValidate.emptyKey.capitalize()} field is not empty`,
            });
        }
        const {
            id
        } = req.body

        let response = await remove("medicine", {
            SQ_Medicine: id
        })

        if (response.status) {
            return res.status(200).send("OK");
        } else {
            return res.status(500).send("Couldn't delete this medicine at this time. Please, try again later.");
        }
    },
    async selectAll(req, res) {

        let response = await select("medicine", {

        }, "*")

        if (response.status) {
            return res.status(200).send(response);
        } else {
            return res.status(500).send("Couldn't find any medicine. Please, try again later.");
        }
    },
    async selectByID(req, res) {
        const {
            id
        } = req.query;

        let response = await select("medicine", {
            SQ_Medicine: id
        }, "*")

        if (response.status) {
            return res.status(200).send(response);
        } else {
            return res.status(500).send("Couldn't find any medicine. Please, try again later.");
        }
    }
};