angular.module('ngContactMep.campaignsListController',[])
  .controller('campaignsListController',campaignsListController);

campaignsListController.$inject = [];

function campaignsListController() {
  var vm = this;
  vm.scopeConnected = true;
}