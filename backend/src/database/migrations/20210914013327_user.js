
exports.up = function(knex) {
    return knex.schema.createTable('user', function (table){
        table.increments('SQ_User').primary();
        table.string('STR_UserKey').unique();
        table.string('STR_Name', 100).notNullable();
        table.string('STR_Password', 100).notNullable();
        table.string('STR_Email', 100).notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('user');
};
