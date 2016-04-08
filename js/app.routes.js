angular
    .module('app')
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/', {
            template: '<h3>Página Inicial</h3>'
        })
        .when('/basico', {
            templateUrl: '/modulos/basico/basico.html',
            controller: 'BasicoController',
            controllerAs: 'basicoCtrl'
        })
        .when('/diretiva', {
            templateUrl: '/modulos/diretiva/diretiva.html',
            controller: 'DiretivaController',
            controllerAs: 'diretivaCtrl'
        })
        .when('/formulario', {
            templateUrl: '/modulos/formulario/formulario.html',
            controller: 'FormularioController',
            controllerAs: 'formCtrl'
        })
        .when('/filtro', {
            templateUrl: '/modulos/filtro/filtro.html',
            controller: 'FiltroController',
            controllerAs: 'filtroCtrl'
        })
        .otherwise({redirectTo: '/'});
    }]);
