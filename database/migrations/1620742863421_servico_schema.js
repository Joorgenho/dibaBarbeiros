'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ServicoSchema extends Schema {
  up () {
    this.create('servicos', (table) => {
      table.increments()
      table.string('tipo_servico', 55).notNullable()
      table.string('nome_servico').notNullable()
      table.string('preco_servico').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('servicos')
  }
}

module.exports = ServicoSchema
