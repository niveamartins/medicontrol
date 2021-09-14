
exports.up = function(knex) {
    return knex.schema.createTable('units', function (table){
        table.increments('SQ_Unit').primary();
        table.string('STR_UnitName').notNullable();
        table.boolean('B_Dosage').notNullable();
        table.boolean('B_Frequency').notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('units');
};
