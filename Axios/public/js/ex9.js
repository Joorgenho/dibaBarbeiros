Vue.component('tabela-servico',{
  props:['lista'],
  template: '<table>\
  <tr>\
      <th>Tipo de servico</th>\
      <th>Nome do serviço</th>\
      <th>Preço do serviço</th>\
  </tr>\
  <tr v-for="item of lista">\
      <td>{{item.tipo_servico}}</td>\
      <td>{{item.nome_servico}}</td>\
      <td>{{item.preco_servico}}</td>\
  </tr>\
</table>'
})

var app = new Vue({
	el: "#servico",
  data: {
    novoServico:{},
    servico:[]
  },
  methods:{
    refresh: function(){
      axios
        .get('http://127.0.0.1:3333/api/servico')
        .then(response=>{
          this.servico = response.data;
          console.log("Response: ",response) 
        });
    }
  },
  created: function(){
    console.log("Iniciando...")
    this.refresh();
  }
});