angular.module('ngContactMep.mepsListController',['ngContactMep.mepsFactory'])
  .controller('mepsListController',mepsListController);

mepsListController.$inject = ['mepsFactory'];

function mepsListController(mepsFactory) {
  var vm = this;
  vm.loading = true;
  mepsFactory.getMepsList(function(response){vm.mepsList=response;vm.loading=false;});
}