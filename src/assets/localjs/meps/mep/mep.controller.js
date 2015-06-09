angular.module('ngContactMep.mepController',[])
  .controller('mepController', mepController);

mepController.$inject = [];

function mepController() {
  var vm = this;
  vm.scopeConnected = true;
}