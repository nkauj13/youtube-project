var app = angular.module('musicMod');

app.controller('mainCtrl', function($scope, $location, $timeout, ytFactory){

	// arrays for populating select options:
	$scope.yearArray = ['1990', '1995', '2000', '2005', '2010', '2015'];
	$scope.genreArray = [
		'country',
		'rap',
		'rock',
		'pop',
	];

	// loops through years from 1990-2016
	/*for(var i = 2016; i >= 1990; i--) {
		i.toString();
		$scope.yearArray.push(i);
	}*/

	// handle user selections, create string for YT query:
	$scope.sendChoices = function(year, genre){

		var topicID;

		// create YT query string from the user's choices:
		//var queryStringYT = year + ' ' + genre + " music video";
		var queryStringYT = year + '+' + genre + "+music+video+vevo";
		console.log(queryStringYT);

		//set the yt topicID based on gere choice:
			if(genre === "country"){
				topicID = '/m/01lyv';
			}
			else if(genre === 'rap'){
				topicID = '/m/0glt670';
			}
			else if(genre === 'rock'){
				topicID = '/m/06by7';
			}
			else if(genre === 'pop'){
				topicID = '/m/064t9';
			}

			console.log(topicID);
		// send the query string & topicID to the YT Factory via queryYT method (& trigger the YT API call):
		ytFactory.queryYT(queryStringYT, topicID);

		// this function will grab the genre from the sendChoices function and basically send the user to that path. You have to put a delay on this(hence the $timeout) because the musicCtrl loads before the factory sends it the data.
		$timeout(function() {
			$location.path('/' + genre);
		}, 1000);
	};
});
