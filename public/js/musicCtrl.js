var app = angular.module('musicMod');

app.controller('musicCtrl', function($scope, $http, ytFactory){

/*
	 - use data to set the YT video - drill down into the ytData object, store it in a variable on the $scope & put in the view with an expression
	 - use data to make calls to lastFM api
*/

//get YT data from the factory
	// var ytDataMusicCtrl = ytFactory.getYTdata();
	ytFactory.queryYT().then(function(data) {
				console.log(data);
	});


//set the youTube video:

		// $scope.videoID = ytDataMusicCtrl.info.items[0].id.videoId;
		// console.log($scope.videoID);


//lastFM api:

	/*
	PROBLEM - how to format the artist info data from YT for last FM:
	- we can trim off the VEVO from the results:
		var dataFromYoutube = property on YT object that has this data
		var formattedString = dataFromYoutube.substr(0, dataFromYoutube.length-4);
	---------------------------------------------------------------------------------------------------------------------------------
	PROBLEM - how to format formattedString into something Last FM can use ????? How to break up the camel case into multiple words?

	-run formattedString through this function:

	function spacecamel(s){
    	return s.replace(/([a-z])([A-Z])/g, '$1 $2');
	}

	var artistForLFM = spacecamel(formattedString);

	and send THIS variable to lastFM

	-----------------------------------------------------------
	PROBLEM - how to respond when no data from last FM?

	-set up if else logic (see example for aristist Bio):

		if (!whateverTheYoutubeData)  {
				$scope.someVar = "Sorry, we could not find your data";
		}
	*/


});
