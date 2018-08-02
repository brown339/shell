(function () {
  'use strict';

  angular
    .module('app')
    .config(config);

  config.$inject = ['$stateProvider', '$urlRouterProvider'];
  function config ($stateProvider, $urlRouterProvider) {
    var home = {
      name: 'home',
      url: '/',
      views: {
        'header': {
          templateUrl: 'header/header.html',
          controller: 'HeaderController as header'
        },
        'main': {
          templateUrl: 'home/home.html',
          controller: 'HomeController as home'
        },
        'footer': {
          templateUrl: 'footer/footer.html',
          controller: 'FooterController as footer'
        }
      }
    };

    $stateProvider
      .state('home', home);
  }
})()