
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('advertisements').del()
    .then(function () {
      // Inserts seed entries
      return knex('advertisements').insert([
        { adsId: 1, 
          adsName: 'Quảng cáo Lavi'
        
        },
        
      ]);
    });
};
