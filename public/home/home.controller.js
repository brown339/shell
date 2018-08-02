(function () {
  'use strict';

  angular
    .module('app')
    .controller('HomeController', HomeController);

  HomeController.$inject = [];
  function HomeController () {
    const self = this;

    function cat() {
      console.log('no');
    }
  }
})();