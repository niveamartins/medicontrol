exports.up = function (knex) {
    return knex.schema.createTable('sessions', function (table) {
        table.string('STR_Token').unique().notNullable();
        table.integer('FK_SQ_UserID').notNullable();

        table.foreign("FK_SQ_UserID").references("SQ_User").inTable("user");
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('sessions');
};