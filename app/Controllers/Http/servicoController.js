const Servico   = use('App/Models/Servico')


class servicoController {
    async index ({ req, res, view }) {
        const servico = await Servico.all();
    return servico
    }
}

module.exports = servicoController