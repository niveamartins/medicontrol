const uuid = require('uuid')

const {
    select,
    insert,
    remove,
    update
} = require("../models/models");

module.exports = {
    login(id) {
        const token = uuid();

        const reponse = await insert("sessions", {
            STR_Token: token,
            FK_SQ_UserID: id
        }, ["STR_Token"])

        if (reponse.status) {
            return {
                status: true,
                data: token
            };
        } else {
            return reponse;
        }
    },
    verify(token) {
        const response = await select("sessions", {
            STR_Token: token
        }, ["*"])

        if (response.status) {
            return true;
        } else {
            return false;
        }
    },
    getUserID(token) {
        const response = await select("sessions", {
            STR_Token: token
        }, ["FK_SQ_UserID"])

        return response;
    },
    logout(token) {
        const response = await remove("sessions", {
            STR_Token: token
        })

        return response;
    }

};