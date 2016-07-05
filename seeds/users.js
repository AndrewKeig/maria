
exports.seed = function(knex, Promise) {

  return knex('users').del()
    .then(function () {
      return Promise.all([
        knex('users').insert({username: 'user1', password: 'password1', status: 'active'}),
        knex('users').insert({username: 'user2', password: 'password2', status: 'active'}),
        knex('users').insert({username: 'user3', password: 'password3', status: 'active'})
      ]);
    });
};
