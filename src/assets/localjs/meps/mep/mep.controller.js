angular.module('ngContactMep.mepController',['ngContactMep.mepsFactory'])
  .controller('mepController', mepController);

mepController.$inject = ['mepsFactory','$stateParams'];

function mepController(mepsFactory,$stateParams) {
  var vm = this;
  vm.loading = true;
  mepsFactory.getMep($stateParams.id,function(response){vm.mepData=response;vm.loading=false;});
}