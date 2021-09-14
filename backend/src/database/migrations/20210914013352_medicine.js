
exports.up = function(knex) {
    return knex.schema.createTable('medicine', function (table){
        table.increments('SQ_Medicine').primary();
        table.integer('FK_SQ_UserID').notNullable();
        table.float('NR_Dosage').notNullable();
        table.integer('FK_SQ_UnitDosageID').notNullable();
        table.float('NR_Frequency').notNullable();
        table.integer('FK_SQ_UnitFrequencyID').notNullable();

        table.foreign("FK_SQ_UserID").references("SQ_User").inTable("user");
        table.foreign("FK_SQ_UnitDosageID").references("SQ_Unit").inTable("units");
        table.foreign("FK_SQ_UnitFrequencyID").references("SQ_Unit").inTable("units");
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('medicine');
};
