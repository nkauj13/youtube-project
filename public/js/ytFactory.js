var app = angular.module('musicMod');


app.factory('ytFactory', function($http) {

	//console.log('factory is working');

	var ytData = {};


	var queryYT = function(query) {

      	//$http.get("https://www.googleapis.com/youtube/v3/search?part=snippet&chart=mostPopular&maxResults=1&q=" +query+ "VEVO&type=video&key=AIzaSyBIupTaipxwn9WorBosS7NqGyn7tNMMkQM").then(function successCallback(response) {
      	$http.get("https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=" +query+ "VEVO&type=video&key=AIzaSyBIupTaipxwn9WorBosS7NqGyn7tNMMkQM").then(function successCallback(response) {
		

			//store results in ytData;
			ytData.info = response.data;
      		//console.log(ytData.info);

		});
  	};

	var getYTdata = function() {
		console.log("called the getYTdata function");
		return ytData;	
	};

	return {

		queryYT: queryYT,
		getYTdata: getYTdata
	};

});
