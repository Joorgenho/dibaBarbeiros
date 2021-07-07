'use strict'
class Register {
  get rules () {
    return {
      nome:'required',
      email:'required|email|unique:email',
      senha:'required|min:8'
    }
  }

  get messages(){
    return{
      'nome.required':'Insira um nome',
      'email.required':'Insira um e-mail',
      'email.unique':'e-mail já existe',
      'senha.required':'Insira uma senha',
      'senha.min':'A senha deve haver 8 caracteres'
    }
  }
}
module.exports = Register