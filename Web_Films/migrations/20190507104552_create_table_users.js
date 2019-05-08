
exports.up = function(knex, Promise) {
    return knex.schema
    .createTable('users', function (table) {
       table.increments('usersId');
       table.string('usersName', 255);
       table.string('Role', 255);
       table.text('PassWords', 255);

    })
};

exports.down = function(knex, Promise) {
    return knex.schema
    .dropTable("users")
};
