var app = angular.module('musicMod', ['ngRoute']);

app.config(function($routeProvider){

  $routeProvider
  .when('/', {
    controller: 'mainCtrl',
    templateUrl: 'main.html'
  })

  .when('/rock', {
    controller: 'rockCtrl',
    templateUrl: 'rock.html'
  })

  .when('/pop', {
    controller: 'popCtrl',
    templateUrl: 'pop.html'
  })

  .when('/country', {
    controller: 'countryCtrl',
    templateUrl: 'country.html'
  })
  
  .when('/rap', {
    controller: 'rapCtrl',
    templateUrl: 'rap.html'
  });
});
