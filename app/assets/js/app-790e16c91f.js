angular.module('ngContactMep.homeController',[])
  .controller('homeController',homeController);

homeController.$inject = [];

function homeController() {
  var vm = this;
}
angular.module('ngContactMep',['ui.router','ngContactMep.homeController'])
  .config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlProvider){
    $stateProvider
      .state('home',{
      url:'/',
      views:{
        main:{
         templateUrl:'./home/home.view.html',
         controller:'homeController',
         controllerAs:'home' 
        }
      } 
    });
  }]);