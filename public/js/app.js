var app = angular.module('musicMod', ['ngRoute']);

app.config(function($routeProvider){

  $routeProvider
  .when('/', {
    controller: 'mainCtrl',
    templateUrl: 'partials/main.html'
  })

  .when('/rock', {
    controller: 'musicCtrl',
    templateUrl: 'partials/rock.html'
  })

  .when('/pop', {
    controller: 'musicCtrl',
    templateUrl: 'partials/pop.html'
  })

  .when('/country', {
    controller: 'musicCtrl',
    templateUrl: 'partials/country.html'
  })

  .when('/rap', {
    controller: 'musicCtrl',
    templateUrl: 'partials/rap.html'
  });

});
