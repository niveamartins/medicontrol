const connection = require("../database/connection");

module.exports = {
  async update(table, toFind, data, toReturn) {
    let response;

    await connection(table)
      .where(toFind)
      .update(data)
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
              message: `[ERROR UPDATING IN ${table.toString().toUpperCase()} TABLE]`,
              status: false
          };
      });

      return response
  }
};