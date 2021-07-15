'use strict'
const Route = use('Route')
const servicoController = require('../app/Controllers/Http/servicoController')

Route.get("/dibaBarbeiros", 'LoginController.index')

Route.resource("/api/servico", 'servicoController').apiOnly();
Route.get("/login", 'LoginController.login')
Route.get('/cadastro', 'LoginController.cadastro')
Route.post('/cadastro', 'LoginController.adicionaUsuario')
Route.get('/servico_tabela', 'LoginController.servico_tabela')
Route.post('/auth', 'LoginController.autenticar')
Route.get('/admin', 'LoginController.admin')
Route.get('/logout','LoginController.logout')

Route.get('/barbeiros', 'LoginController.barbeiros')
Route.post('barbeiros', 'LoginController.adicionaBarbeiros')
Route.get('/edita-barbeiros/:id','Logincontroller.edit_barbeiros')
Route.get('/edita-barbeiros/barbeiros-edite/:id', 'Logincontroller.atualizaBarbeiros')
Route.get('/delete-barbeiros/:id','Logincontroller.deletaBarbeiros')

Route.get('/servico', 'LoginController.servico')
Route.post('servico', 'LoginController.adicionaServico')
Route.get('/edita-servico/:id','Logincontroller.edita_servico')
Route.get('/edita-servico/servico-edite/:id', 'Logincontroller.atualizaServico')
Route.get('/delete-servico/:id','Logincontroller.deletaServico')