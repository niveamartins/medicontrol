module.exports = {
    notEmptyFields: (data, fields) => {
        fields.map((key) => {
            if (data[key] === undefined) {
                return {
                    status: false,
                    emptyKey: key
                };
            }
        })
        return {
            status: true,
            emptyKey: null
        };
    },
    verifyFields: (data, type) => {
        const parses = {
            email: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
        }

        return parses[type].test(data)
    }
}