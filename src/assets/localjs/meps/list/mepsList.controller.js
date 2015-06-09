angular.module('ngContactMep.mepsListController',[])
  .controller('mepsListController',mepsListController);

mepsListController.$inject = [];

function mepsListController() {
  var vm = this;
  vm.scopeConnected = true;
}