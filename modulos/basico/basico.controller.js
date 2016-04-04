angular
  .module('app.basico')
  .controller('BasicoController', BasicoController);

function BasicoController() {
  var vm = this;

  vm.hello = "Hello";
  vm.goodbye = "Goodbye";
  vm.mensagem = "Hello"

  vm.lista = [
    {id: 1, label: 'Atividade 1', concluido: false},
    {id: 2, label: 'Atividade 2', concluido: true},
    {id: 3, label: 'Atividade 3', concluido: false},
    {id: 4, label: 'Atividade 4', concluido: true}
  ];

  vm.getStatusConcluido = function(concluido) {
    return { 'text-success': concluido, 'text-danger': !concluido };
  };

  vm.onClickTrocarMensagem = function() {
    if (vm.mensagem == "Hello"){
      vm.mensagem = 'Goodbye';
    } else {
      vm.mensagem = 'Hello';
    }
  };
}
