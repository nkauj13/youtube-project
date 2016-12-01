var app = angular.module('musicMod');

app.controller('mainCtrl', function($scope){
//app.controller('mainCtrl', function($scope, $location, ytFactory){

//user selection: 

	//arrays for populating select options:
	$scope.yearArray = ['1990','2000','2010'];
	$scope.genreArray = ['rock','pop','rap','country'];

	//handle user selections & create string for YT query:
	$scope.sendChoices = function(year, genre){

		//parse genre string & set text for YT query:
		var userGenre;

		if (genre === "rock"){
			userGenre = "rock music video";
		}
		else if (genre === "pop") {
			userGenre = "pop music video";
		}
		else if (genre === "rap") {
			userGenre = "rap music video";
		}
		else if (genre === "country") {
			userGenre = "country music video";
		}

		//create YT query string from the user's choices:
		var queryStringYT = year + ' ' + userGenre;
		console.log(queryStringYT);

		//send the query string to the YT Factory via queryYT method (& trigger the YT API call):
			//ytFactory.queryYT(queryStringYT);

	}

//change view:

	/*	
		//configure the $location service:
		$locationProvider.html5Mode(true); //pulled this example from https://docs.angularjs.org/guide/$location

		//change the view based on user selection:
		$scope.changeViews = function(genre){
	
			if (genre === "rock"){
				$location.path('/rock');
				console.log("changed to rock view");
			}
			else if (genre === "pop") {
				$location.path('/pop');
				console.log("changed to pop view");
			}
			else if (genre === "rap") {
				$location.path('/rap');
				console.log("changed to rap view");
			}
			else if (genre === "country") {
				$location.path('/country');;
				console.log("changed to country view");
			}

		}

	*/

});