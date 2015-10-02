var TemplateApp = angular.module('TemplateApp', [
    'factoryProvider'
])

var factoryProvider = angular.module('factoryProvider', [])

/*
TemplateApp.config(['$locationProvider', '$stateProvider', '$urlRouterProvider', '$httpProvider', function($locationProvider, $stateProvider, $urlRouterProvider, $httpProvider) {
	
	$stateProvider

      .state('stage', {
        url: "/stage",
        reloadOnSearch: false, 
        data: {
          'selectedTab': 0
        },
        views: {
          'app': {
            templateUrl: 'views/stage.html',
            controller: 'TemplateAppStage'
          }
        }
      })

    $urlRouterProvider.otherwise('/');
    //$locationProvider.html5Mode(true);

  }]);
*/

