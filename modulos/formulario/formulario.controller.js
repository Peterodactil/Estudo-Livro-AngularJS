angular
  .module('app.formulario')
  .controller('FormularioController', FormularioController);

function FormularioController($scope) {
  var vm = this;

  vm.onChangeSexo = function() {
    if (vm.Sexo == 'F') {
      vm.enumEstadoCivil = {
        Solteiro: "Solteira",
        Casado: "Casada",
        Viuvo: "Viúva",
        Separado: "Separada",
        Divorciado: "Divorciada"
      };
    } else {
      vm.enumEstadoCivil = {
        Solteiro: "Solteiro",
        Casado: "Casado",
        Viuvo: "Viúvo",
        Separado: "Separado",
        Divorciado: "Divorciado"
      };
    }
  };

  vm.onChangeSexo();

};
