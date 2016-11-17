var todoListApp = angular.module('todoList', ['ionic', 'todoList.controllers']);

todoListApp.run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            cordova.plugins.Keyboard.disableScroll(true);

        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();
        }
    });
})

.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider

        .state('listas', {
            url: '/',
            templateUrl: 'templates/listas.html',
            controller: 'ListaController as listaCtrl'
        })

        .state('lista', {
            url: '/lista/:listaId',
            templateUrl: 'templates/lista.html',
            controller: 'ListaDetalleController as listaDetalleCtrl'
        });
});
