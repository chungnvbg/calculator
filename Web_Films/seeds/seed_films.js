
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('films').del()
    .then(function () {
      // Inserts seed entries
      return knex('films').insert([
        { filmsId: 1, 
          filmsName: 'cuộc chiên quái vật',
          filmsLinks:'./',
          description: 'phim rất hay'
        },
      ]);
    });
};
