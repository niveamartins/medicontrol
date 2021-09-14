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
  },
  async remove(table, toFind) {
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
  },
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
  },
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