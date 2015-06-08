angular.module('ngContactMep',['ui.router','ngContactMep.homeController'])
  .config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
    $stateProvider
      .state('home',{
      url:'/',
      views:{
        main:{
         templateUrl:'./assets/localjs/home/home.view.html',
         
        }
      } 
    });
    $urlRouterProvider.otherwise('/');
  }]);