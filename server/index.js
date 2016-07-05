var express = require('express');
var app = express();
var knex  = require('./db');

var port = 4000;

app.listen(port);

console.log("Listening on port", port);

knex('users')
  .then(() => {
    return knex('users').insert({username: 'user6', password: 'password1', status: 'archived'})
  })
  .then(() => {
    return knex("users").where('username', 'user6').update({status: 'deleted'});
  })
  .then(() => {
    return knex('users').select('username', 'password', 'status').toSQL()
      .map((row) => {
        console.log(row);
      })
  })
  .catch((e) => {
    console.error(e);
  });

