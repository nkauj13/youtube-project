var app = angular.module('musicMod');

app.controller('mainCtrl', function($scope, $location, $timeout, ytFactory){

	// arrays for populating select options:
	$scope.yearArray = [];
	$scope.genreArray = [
		'country',
		'rap',
		'rock',
		'pop',
	];

	// loops through years from 1990-2016
	for(var i = 2016; i >= 1990; i--) {
		i.toString();
		$scope.yearArray.push(i);
	}

	// handle user selections, create string for YT query:
	$scope.sendChoices = function(year, genre){

		// create YT query string from the user's choices:
		var queryStringYT = year + ' ' + genre + " music video";


		// send the query string to the YT Factory via queryYT method (& trigger the YT API call):
		ytFactory.queryYT(queryStringYT);

		// this function will grab the genre from the sendChoices function and basically send the user to that path. You have to put a delay on this(hence the $timeout) because the musicCtrl loads before the factory sends it the data.
		$timeout(function() {
			$location.path('/' + genre);
		}, 500);


	};



});
