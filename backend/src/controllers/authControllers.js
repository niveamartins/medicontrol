const { v4 } = require('uuid')

const {
    select,
    insert,
    remove,
    update
} = require("../models/models");

module.exports = {
    async login(id) {
        const token = v4();

        const isLogged = await select("sessions", {
            FK_SQ_UserID: id
        }, ["*"])

        if (isLogged.status) {
            return {
                status: false,
                message: "Already logged."
            }
        }

        const response = await insert("sessions", {
            STR_Token: token,
            FK_SQ_UserID: id
        }, ["STR_Token"])

        if (response.status) {
            return {
                status: true,
                data: token
            };
        } else {
            return response;
        }
    },
    async verify(token) {
        const response = await select("sessions", {
            STR_Token: token
        }, ["*"])

        if (response.status) {
            return true;
        } else {
            return false;
        }
    },
    async getUserID(token) {
        const response = await select("sessions", {
            STR_Token: token
        }, ["FK_SQ_UserID"])

        return response;
    },
    async logout(token) {
        const response = await remove("sessions", {
            STR_Token: token
        })

        return response;
    }

};