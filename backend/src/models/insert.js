const connection = require("../database/connection");

module.exports = {
  async insert(table, data, toReturn) {
    let response;

    await connection(table)
      .insert(data)
      .returning(toReturn)
      .then(function (res) {
        response = {
            status: true,
            data: res
        }
      })
      .catch(function (err) {
          console.log(err)
          response = {
              message: `[ERROR INSERTING IN ${table.toString().toUpperCase()} TABLE]`,
              status: false
          };
      });

      return response
  }
};