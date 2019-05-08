
exports.up = function(knex, Promise) {
    return knex.schema
    .createTable('product_films', function (table) {
       table.increments('proId');
       table.string('proName', 255).notNullable();
       table.foregin('filmsId').references('proId').inTable('films');
    })
    
};

exports.down = function(knex, Promise) {
    return knex.schema
    .dropTable("product_films")
};
