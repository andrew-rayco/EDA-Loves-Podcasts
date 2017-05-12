exports.up = function (knex, Promise) {
  return knex.schema.createTable('podcasts', function (table) {
    table.increments('id').primary()
    table.string('name')
    table.text('imgURL')
    table.text('url')
    table.text('description')

  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('podcasts')
}
