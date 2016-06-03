angular
    .module('app')
    .config(['$routeProvider', function($routeProvider) {
        var site_prefix = '/Estudo-Livro-AngularJS/#';

        $routeProvider.when(site_prefix + '/', {
            template: '<h3>Página Inicial</h3>'
        })
        .when(site_prefix + '/basico', {
            templateUrl: 'modulos/basico/basico.html',
            controller: 'BasicoController',
            controllerAs: 'basicoCtrl'
        })
        .when(site_prefix + '/diretiva', {
            templateUrl: 'modulos/diretiva/diretiva.html',
            controller: 'DiretivaController',
            controllerAs: 'diretivaCtrl'
        })
        .when(site_prefix + '/formulario', {
            templateUrl: 'modulos/formulario/formulario.html',
            controller: 'FormularioController',
            controllerAs: 'formCtrl'
        })
        .when(site_prefix + '/filtro', {
            templateUrl: 'modulos/filtro/filtro.html',
            controller: 'FiltroController',
            controllerAs: 'filtroCtrl'
        });
        //.otherwise({redirectTo: '/'});
    }]);
