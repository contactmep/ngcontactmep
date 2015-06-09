angular.module('ngContactMep.campaignController',[])
  .controller('campaignController',campaignController);

campaignController.$inject = [];

function campaignController() {
  var vm = this;
  vm.scopeConnected = true;
}