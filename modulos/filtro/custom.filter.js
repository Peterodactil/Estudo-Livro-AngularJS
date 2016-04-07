angular
  .module('app.filtro')
  .filter('custom1', function() {
    return function(input) {
      return input += "_filtrado" ;
    }
  });
