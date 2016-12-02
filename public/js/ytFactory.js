var app = angular.module('musicMod');


app.factory('ytFactory', function($http) {

  var ytData = {};

  queryYT = function(query) {
    return {

      $http
        .get('https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=' + query + 'VEVO&type=video&key=AIzaSyBIupTaipxwn9WorBosS7NqGyn7tNMMkQM').then(function successCallback(response) {
          ytData.data = response;
          return ytData;
      })

      // $http.get("https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=" +query+ "VEVO&type=video&key=AIzaSyBIupTaipxwn9WorBosS7NqGyn7tNMMkQM").then(function successCallback(response) {
      //   ytData.data = response.data;
      //
      //   return ytData;
      // })

    };

  };

  // getYTdata = function() {
  //   console.log("called the getYTdata function");
  //   return ytData;
  // };

  return {
    queryYT: queryYT
    // getYTdata: getYTdata
  };

});
