
exports.up = function(knex, Promise) {
    return knex.schema
    .createTable('advertisements', function (table) {
       table.increments('adsId');
       table.string('adsName', 255);
       table.date('startDate', 255);
       table.date('endDate', 255);
    })
};

exports.down = function(knex, Promise) {
    return knex.schema
    .dropTable("advertisements")
};
