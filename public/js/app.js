var app = angular.module('musicMod', ['ngRoute', 'ngYoutubeEmbed']);

app.config(function($routeProvider, $locationProvider){

  $routeProvider
  .when('/', {
    controller: 'mainCtrl',
    templateUrl: '../partials/main.html'
  })

  .when('/rock', {
    controller: 'musicCtrl',
    templateUrl: '../partials/rock.html'
  })

  .when('/pop', {
    controller: 'musicCtrl',
    templateUrl: '../partials/pop.html'
  })

  .when('/country', {
    controller: 'musicCtrl',
    templateUrl: '../partials/country.html'
  })

  .when('/rap', {
    controller: 'musicCtrl',
    templateUrl: '../partials/rap.html'

  });

  //configure the $location service:
  if(window.history && window.history.pushState){
  $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
  }

});
