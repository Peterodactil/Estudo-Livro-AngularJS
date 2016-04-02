angular
  .module('app.basico')
  .controller('BasicoController', BasicoController);

function BasicoController() {
  var vm = this;

  vm.hello = "Hello";
  vm.goodbye = "Goodbye";

  vm.onClickTrocarMensagem = function() {
      if (vm.mensagem == "Hello"){
          vm.mensagem = 'Goodbye';
      } else {
          vm.mensagem = 'Hello';
      }
  };

  vm.lista = [
      {id: 1, label: 'Nota 1', done: false},
      {id: 2, label: 'Nota 2', done: true},
      {id: 3, label: 'Nota 3', done: false},
      {id: 4, label: 'Nota 4', done: true}
  ];

  vm.getNoteClass = function(status) {
      return { 'text-success': status, 'text-danger': !status };
  };
}
