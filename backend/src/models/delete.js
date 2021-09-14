const connection = require("../database/connection");

module.exports = {
  async delete(table, toFind) {
    let response;

    await connection(table)
      .where(toFind)
      .del()
      .then(function () {
        response = {
            status: true
        }
      })
      .catch(function (err) {
          console.log(err)
          response = {
              message: `[ERROR DELETING IN ${table.toString().toUpperCase()} TABLE]`,
              status: false
          };
      });
      return response
  }
};