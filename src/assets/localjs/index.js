angular.module('ngContactMep', ['ui.router', 'ngContactMep.homeController','ngContactMep.mepController','ngContactMep.mepsListController','ngContactMep.campaignController','ngContactMep.campaignsListController'])
  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        views: {
          main: {
            templateUrl: './assets/localjs/home/home.view.html',
            controller:'homeController',
            controllerAs:'home'
          }
        }
      })
      .state('meps', {
        abstract: true,
        views: {
          main: {
            templateUrl: './assets/localjs/meps/meps.view.html'
          }
        }
      })
      .state('meps.list', {
        url: '/meps',
        views: {
          meps: {
            templateUrl: './assets/localjs/meps/list/mepsList.view.html',
            controller: 'mepsListController',
            controllerAs: 'mepsList'
          }
        }
      })
      .state('meps.mep', {
        url: '/meps/:id',
        views: {
          meps: {
            templateUrl: './assets/localjs/meps/mep/mep.view.html',
            controller: 'mepController',
            controllerAs: 'mep'
          }
        }
      })
      .state('campaigns', {
        abstract: true,
        views: {
          main: {
            templateUrl: './assets/localjs/campaigns/campaigns.view.html'
          }
        }
      })
      .state('campaigns.list', {
        url: '/campaigns',
        views: {
          campaigns: {
            templateUrl: './assets/localjs/campaigns/list/campaignsList.view.html',
            controller: 'campaignsListController',
            controllerAs: 'campaignsList'
          }
        }
      })
      .state('campaigns.campaign', {
        url: '/campaigns/:id',
        views: {
          campaigns: {
            templateUrl: './assets/localjs/campaigns/campaign/campaign.view.html',
            controller: 'campaignController',
            controllerAs: 'campaign'
          }
        }
      });
    $urlRouterProvider.otherwise('/');
  }]);