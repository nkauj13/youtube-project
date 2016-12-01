var app = angular.module('musicMod', ['ngRoute']);

app.config(function($routeProvider){

  $routeProvider
  .when('/', {
    controller: 'mainCtrl',
    templateUrl: 'partials/main.html'
  })

  .when('/rock', {
    controller: 'rockCtrl',
    templateUrl: 'partials/rock.html'
  })

  .when('/pop', {
    controller: 'popCtrl',
    templateUrl: 'partials/pop.html'
  })

  .when('/country', {
    controller: 'countryCtrl',
    templateUrl: 'partials/country.html'
  })

  .when('/rap', {
    controller: 'rapCtrl',
    templateUrl: 'partials/rap.html'
  });

});
