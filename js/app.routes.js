angular
    .module('app')
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/', {
            template: '<h5>Página Inicial</h5>'
        })
        .when('/basico', {
            templateUrl: '/modulos/basico/basico.html',
            controller: 'BasicoController',
            controllerAs: 'basicoCtrl'
        })
        .when('/filtro', {
            templateUrl: '/modulos/filtro/filtro.html',
            controller: 'FiltroController',
            controllerAs: 'filtroCtrl'
        })
        .otherwise({redirectTo: '/'});
    }]);