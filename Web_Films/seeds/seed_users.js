
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {  userId : 1,
           userName: 'chung',
           Role: 'Admin',
           PassWords: chun125
          
        },
       
      ]);
    });
};
