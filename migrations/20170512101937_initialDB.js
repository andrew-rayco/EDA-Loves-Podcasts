exports.up = function (knex, Promise) {
  return knex.schema.createTable('podcasts', function (table) {
    table.increments('id').primary()
    table.string('name')
    table.string('imgURL')
    table.string('url')
    table.string('description')

  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('podcasts')
}
