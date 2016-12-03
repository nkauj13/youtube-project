var app = angular.module('musicMod');

app.controller('musicCtrl', function($scope, $http, ytFactory){

	// Create a variable to store the returned videoID in
	var stuff = ytFactory.getYTData();
	var stuff2 = ytFactory.getYTData();

	var idArray = [];

	stuff2.items.forEach(function(vidID) {
		var newVidId = vidID.id.videoId;
		idArray.push(vidID.id.videoId);
		console.log(newVidId);
	});

	console.log(idArray);

	var youtubeStuff = stuff.items[0].id.videoId;
	//console.log(stuff.items[0].id.videoId);

	// YouTube Embed
	$scope.link = 'https://www.youtube.com/watch?v=' + youtubeStuff;

//lastFM
	//format YT data for LastFM API:
	var ytChannelData = stuff.items[0].snippet.channelTitle;
	console.log(ytChannelData);

	var formattedYTString = ytChannelData.substr(0, ytChannelData.length-4);
	console.log(formattedYTString);

	var lastFMQueryString = spacecamel(formattedYTString);

	//to remove camel case
	function spacecamel(s){
    	return s.replace(/([a-z])([A-Z])/g, '$1 $2');
	}

	console.log(lastFMQueryString);

	$http.get('http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=' +lastFMQueryString+ '&api_key=ccdf156dfa78f0a2462aa132687608f0&format=json')
			.then(function successCallback(response){

				//console.log(response.data.artist.bio.content);
				//console.log($scope.artistBio);

				//console.log(response.data.artist.bio.content);

				if(!response.data.artist.bio.content) {

					$scope.artistBio = "Sorry, we could not find the artist's bio";
				}
				else {

					$scope.artistBio = response.data.artist.bio.content;
				}

	});

	$http.get('http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=' + lastFMQueryString + '&api_key=ccdf156dfa78f0a2462aa132687608f0&format=json')
			.then(function successCallback(response){

				//console.log(response.data.topalbums);
				//console.log($scope.albumArray);

				if(!response.data.topalbums.album) {

					$scope.albumArray = "Sorry, we could not find any top albums";
				}
				else {

					$scope.albumArray = response.data.topalbums.album;
				}

	});

	$http.get('http://ws.audioscrobbler.com/2.0/?method=artist.getsimilar&artist=' + lastFMQueryString + '&api_key=ccdf156dfa78f0a2462aa132687608f0&format=json')
			.then(function successCallback(response){

				//console.log(response.data);
				//console.log($scope.simArtistArray);

				if(!response.data.similarartists.artist) {

					$scope.simArtistArray = "Sorry, we could not find similar artists";
				}
				else {

					$scope.simArtistArray = response.data.similarartists.artist;
				}

	});

});
