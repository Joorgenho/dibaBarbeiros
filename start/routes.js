'use strict'
const Route = use('Route')


Route.get("/", 'LoginController.login')
Route.get('/cadastro', 'LoginController.cadastro')
Route.post('/cadastro', 'LoginController.adicionaUsuario')
Route.post('/auth', 'LoginController.autenticar')
Route.get('/admin', 'LoginController.admin')
Route.get('/logout','LoginController.logout')
Route.get('/bemvindo', 'LoginController.bemVindo')

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