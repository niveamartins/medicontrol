const connection = require("../database/connection");

module.exports = {
  async select(table, toFind, columns) {
    let response;

      let response;
      await connection(table)
      .where(toFind)
      .select(columns)
      .then(function (res) {
        response = {
          status: true,
          data: res
      }
      })
      .catch(function (err) {
        console.log(err)
        response = {
            message: `[ERROR SELECTING IN ${table.toString().toUpperCase()} TABLE]`,
            status: false
        };
      });
  
      return response;
    
  }
};