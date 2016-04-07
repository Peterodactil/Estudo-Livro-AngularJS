angular
  .module('app.filtro')
  .controller('FiltroController', FiltroController);

function FiltroController() {
  var vm = this;

  vm.listaPessoas = [
    { Nome: "Pedro", Idade: 24 },
    { Nome: "Paulo", Idade: 17 },
    { Nome: "Luciene", Idade: 49 },
    { Nome: "Laura", Idade: 22 },
    { Nome: "José", Idade: 52 },
  ];

};
