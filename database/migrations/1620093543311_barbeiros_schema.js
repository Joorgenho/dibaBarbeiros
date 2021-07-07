'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class BarbeirosSchema extends Schema {
  up () {
    this.create('barbeiros', (table) => {
      table.increments()
      table.string('nome_barbeiro', 55).notNullable()
      table.string('data_aniversario').notNullable()
      table.string('endereco_barbeiro').notNullable()
      table.string('especialidade_barbeiro').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('barbeiros')
  }
}

module.exports = BarbeirosSchema
