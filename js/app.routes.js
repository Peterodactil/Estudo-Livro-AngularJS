angular
    .module('app')
    .config(function($routeProvider) {
        var site_prefix = this.document.location.pathname.replace('/', '');

        $routeProvider.when('/', {
            template: '<h3>Página Inicial</h3>'
        })
        .when(site_prefix + '/basico', {
            templateUrl:  site_prefix + '/modulos/basico/basico.html',
            controller: 'BasicoController',
            controllerAs: 'basicoCtrl'
        })
        .when('/diretiva', {
            templateUrl:  site_prefix + '/modulos/diretiva/diretiva.html',
            controller: 'DiretivaController',
            controllerAs: 'diretivaCtrl'
        })
        .when('/formulario', {
            templateUrl:  site_prefix + '/modulos/formulario/formulario.html',
            controller: 'FormularioController',
            controllerAs: 'formCtrl'
        })
        .when('/filtro', {
            templateUrl: site_prefix + '/modulos/filtro/filtro.html',
            controller: 'FiltroController',
            controllerAs: 'filtroCtrl'
        })
        .otherwise({redirectTo: '/'});
    });
