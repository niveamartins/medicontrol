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

        if (!auth.verify(token)) {
            return res.status(401).send({
                message: `Not logged.`,
            });
        }

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
        const token = req.headers['authorization']?.replace('Bearer ', '')

        if (!auth.verify(token)) {
            return res.status(401).send({
                message: `Not logged.`,
            });
        }

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
        const token = req.headers['authorization']?.replace('Bearer ', '')

        if (!auth.verify(token)) {
            return res.status(401).send({
                message: `Not logged.`,
            });
        }

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
        const token = req.headers['authorization']?.replace('Bearer ', '')

        if (!auth.verify(token)) {
            return res.status(401).send({
                message: `Not logged.`,
            });
        }

        const userID = auth.getUserID(token)

        if (userID.status) {
            let response = await select("medicine", {
                FK_SQ_UserID: userID.data[0].FK_SQ_UserID
            }, "*")

            if (response.status) {
                return res.status(200).send(response);
            } else {
                return res.status(500).send("Couldn't find any medicine. Please, try again later.");
            }
        } else {
            return res.status(401).send({
                message: `Not logged.`,
            });
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