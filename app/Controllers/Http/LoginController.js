const bcrypt    = require('bcrypt')
const Usuario   = use('App/Models/Usuario')
const Barbeiros = use('App/Models/Barbeiros')
const Servico   = use('App/Models/Servico')

class LoginController {
    async index ( {view}  ) { 
        return view.render("index")
    } 
    
    async login ( {view}  ) { 
        return view.render("login")
    }

    async cadastro ( {view}  ) { 
        return view.render("cadastro")
    }

    async logout ({ auth, response }) {
        await auth.logout()
        return response.route('/')
    }

    async adicionaUsuario({ request, response }){
        const data = request.only(["email", "nome", "senha"])
        const user = await Usuario.create(data)
        return response.redirect('/dibaBarbeiros')
    }
    
    async autenticar ( {request, response, session} ) { 
        const usuario = await Usuario.findBy('email', request.input('email'))
        if(usuario && usuario.senha == request.input("senha")){  
            session.put("email", usuario.email)
            return response.redirect('/admin')   
        } else  {
            session.flash({ 
                notification: "Usuário ou senha invalidos"
            })
            return response.redirect('back')
        }        
    }

    async admin ({ view, response, session }) { 
        const email = session.get("email")
        if(email){
            return view.render("admin", {email:email})
        } else {
            return response.redirect('/dibaBarbeiros')
        }
    }

    //barbeiros
    async barbeiros ({ view }) { 
        const barbeiros = await Barbeiros.all()
        console.log(barbeiros);
        return view.render('barbeiros', { barbeiros: barbeiros.toJSON() })
    }

    async adicionaBarbeiros({ request, session, response }){
        const barbeiros = await Barbeiros.create({
            nome_barbeiro: request.input('nome_barbeiro'),
            cpf_barbeiro: request.input('cpf_barbeiro'),
            data_aniversario: request.input('data_aniversario'),
            telefone_barbeiro: request.input('telefone_barbeiro'),
            cep_barbeiro: request.input('cep_barbeiro'),
            rua_barbeiro: request.input('rua_barbeiro'),
            numeroCasa_barbeiro: request.input('numeroCasa_barbeiro'),
            bairro_barbeiro: request.input('bairro_barbeiro'),
            cidade_barbeiro: request.input('cidade_barbeiro'),
            estado_barbeiro: request.input('estado_barbeiro'),
            especialidade_barbeiro: request.input('especialidade_barbeiro')
        })
            session.flash({ 'successmessage': 'Barbeiro adicionado'})
            return response.redirect('/barbeiros')
    }

    async edit_barbeiros ({ params, view }) {
        const barbeiros = await Barbeiros.find(params.id)
        return view.render('barbeiros-edite', {
            barbeiros: barbeiros.toJSON()
        })
    }

    async atualizaBarbeiros ({ params, request, response }) {
        const barbeiros = await Barbeiros.find(params.id)
        barbeiros.nome_barbeiro          = request.input('nome_barbeiro')
        barbeiros.data_aniversario       = request.input('data_aniversario')
        barbeiros.endereco_barbeiro      = request.input('endereco_barbeiro')
        barbeiros.especialidade_barbeiro = request.input('especialidade_barbeiro')
        await barbeiros.save()
        return response.redirect('/barbeiros')
    }

    async deletaBarbeiros ({ params, response, session }) {
        const barbeiros = await Barbeiros.find(params.id)
        await barbeiros.delete()
        session.flash({'successmessage': 'Quote has been deleted'})
        return response.redirect('/barbeiros')
    }

    //servico

    async servico ({ view }) { 
        const servico = await Servico.all()
        console.log(servico);
        return view.render('servico', { servico: servico.toJSON() })
    }

    async adicionaServico({ request, session, response }){
        const servico = await Servico.create({
            tipo_servico: request.input('tipo_servico'),
            nome_servico: request.input('nome_servico'),
            preco_servico: request.input('preco_servico')
        })
            session.flash({ 'successmessage': 'Serviço adicionado'})
            return response.redirect('/servico')
    }

    async edita_servico ({ params, view }) {
        const servico = await Servico.find(params.id)
        return view.render('servico-edite', {
            servico: servico.toJSON()
        })
    }

    async atualizaServico ({ params, request, response }) {
        const servico = await Servico.find(params.id)
        servico.tipo_servico  = request.input('tipo_servico'),
        servico.nome_servico = request.input('nome_servico'),
        servico.preco_servico = request.input('preco_servico')
        await servico.save()
        return response.redirect('/servico')
    }

    async deletaServico ({ params, response, session }) {
        const servico = await Servico.find(params.id)
        await servico.delete()
        session.flash({'successmessage': 'Serviço deletado'})
        return response.redirect('/servico')
    }
}
module.exports = LoginController