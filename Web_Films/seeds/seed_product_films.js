
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('product_films').del()
    .then(function () {
      // Inserts seed entries
      return knex('product_films').insert([
        { proId: 1, 
          proName: 'Phim Kinh Dị'},
        { proId: 2,
          proName: 'Phim Hành Động'},
        { proId: 3, 
          proName: 'Phim Hoạt Hình'}
      ]);
    });
};
