var app = angular.module('musicMod');


app.factory('ytFactory', function($http) {

	console.log('factory is working');

	var ytData = {};


	var queryYT = function(query) {

      	$http.get("https://www.googleapis.com/youtube/v3/search?part=snippet&chart=mostPopular&maxResults=1&q=" +query+ "VEVO&type=video&key=AIzaSyBIupTaipxwn9WorBosS7NqGyn7tNMMkQM").then(function successCallback(response) {

			//store results in ytData;
			ytData = response.data;
      		console.log(response.data);
		});
  	};

	var getYTdata = function() {

		return ytData;

	};

		return {

		queryYT: queryYT,
		getYTdata: getYTdata
		};

});
