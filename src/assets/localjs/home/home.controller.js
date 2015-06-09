angular.module('ngContactMep.homeController',[])
  .controller('homeController',homeController);

homeController.$inject = [];

function homeController() {
  var vm = this;
  vm.scopeConnected = true;
  
}