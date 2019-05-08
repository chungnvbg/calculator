
exports.up = function(knex, Promise) {
    return knex.schema
    .createTable('payment', function (table) {
       table.increments('payId');
       table.string('payName', 255);
       table.foregin('usersId').references('payId').inTable('users');
    })
};

exports.down = function(knex, Promise) {
    return knex.schema
    .dropTable("payment")
};
