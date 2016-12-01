var app = angular.module('musicMod');

// app.controller('mainCtrl', function($scope, $location){
app.controller('mainCtrl', function($scope, $location, ytFactory){

//user selection:

	//arrays for populating select options:
	$scope.yearArray = ['1990','2000','2010'];
	$scope.genreArray = ['rock','pop','rap','country'];

	//handle user selections & create string for YT query:
	$scope.sendChoices = function(year, genre){

		//parse genre string & set text for YT query & change the view
		var userGenre;

		if (genre === "rock"){
			userGenre = "rock music video";
			$location.path('/rock');
			console.log("changed to rock view");
		}
		else if (genre === "pop") {
			userGenre = "pop music video";
			$location.path('/pop');
			console.log("changed to pop view");
		}
		else if (genre === "rap") {
			userGenre = "rap music video";
			$location.path('/rap');
			console.log("changed to rap view");
		}
		else if (genre === "country") {
			userGenre = "country music video";
			$location.path('/country');
			console.log("changed to country view");
		}

		//create YT query string from the user's choices:
		var queryStringYT = year + ' ' + userGenre;
		console.log(queryStringYT);

		//send the query string to the YT Factory via queryYT method (& trigger the YT API call):
			ytFactory.queryYT(queryStringYT);

	}


});
