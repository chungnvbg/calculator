
exports.up = function(knex, Promise) {
    return knex.schema
    .createTable('films', function (table) {
       table.increments('filmsId');
       table.string('filmsName', 255);
       table.string('filmsLinks', 255);
       table.string('description', 255);
       table.foregin('adsId').references('filmsId').inTable('advertisements');
    })
};

exports.down = function(knex, Promise) {
    return knex.schema
    .dropTable("films")
};
