
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('payment').del()
    .then(function () {
      // Inserts seed entries
      return knex('payment').insert([
        { payId: 1, 
          payName: 'viettel'},
        
      ]);
    });
};
