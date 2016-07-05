# Maria

Looking at Knex as a possible solution to mariadb

http://knexjs.org/


### Start Application

This will start the application and run migrations on the database, it will also seed that table with data.

```
$ node server
```


### Create a Migration

```
$ knex migrate:make setup
```

### Run Migration


```
$ knex migrate:latest
```


### Rollback Migration

```
$ knex migrate:rollback
```



### Create seed data

```
$ knex seed:make users
```

### Insert seed data

```
$ knex seed:run
```
