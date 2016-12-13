var app = angular.module('musicMod');

app.controller('musicCtrl', function($scope, $http, ytFactory){
	console.log("music controller!")

	// Create a variable to store the returned videoID in
	var stuff2 = ytFactory.getYTData();

	var ytArray =[];

	stuff2.items.forEach(function(vidData) {
		var newData =
			{
			vidID: vidData.id.videoId,
			title: vidData.snippet.channelTitle
		};
		ytArray.push(newData);
		// ytArray.push(vidID.snippet.channelTitle);
		//console.log(newData);
	});

	//console.log(ytArray);

	var youtubeStuff = ytArray[Math.floor(Math.random()*ytArray.length)];
	//console.log(stuff.items[0].id.videoId);

	// YouTube Embed
	$scope.link = 'https://www.youtube.com/watch?v=' + youtubeStuff.vidID;

//lastFM
	//format YT data for LastFM API:
	var ytChannelData = youtubeStuff.title;
	//console.log(ytChannelData);

	var formattedYTString = ytChannelData.substr(0, ytChannelData.length-4);
	//console.log(formattedYTString);

	var lastFMQueryString = spacecamel(formattedYTString);

	//to remove camel case
	function spacecamel(s){
    	return s.replace(/([a-z])([A-Z])/g, '$1 $2');
	}

	//console.log(lastFMQueryString);

	$http.get('http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=' +lastFMQueryString+ '&api_key=ccdf156dfa78f0a2462aa132687608f0&format=json')
			.then(function successCallback(response){

				//console.log(response.data);
				//console.log($scope.artistBio);
				//console.log(response.data);

				if(response.data.message === "The artist you supplied could not be found" || response.data.artist.bio.content === "") {

					$scope.artistBio = "Sorry, we could not find the artist's bio";
					//console.log(response.data.message);
				}
				else {

					$scope.artistBio = response.data.artist.bio.content;
				}

	});

	$http.get('http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=' + lastFMQueryString + '&autocorrect=1&api_key=ccdf156dfa78f0a2462aa132687608f0&format=json')
			.then(function successCallback(response){

				//console.log(response.data.topalbums);
				//console.log($scope.albumArray);

				//console.log(response.data);

				if(response.data.message === "The artist you supplied could not be found" || response.data.topalbums.album.length === 0) {

					$scope.showAlbumError = true;
					$scope.albumErrorMsg = 'Sorry, we could not find any top albums';
					//console.log(response.data.message);
					//console.log(response.data.topalbums);
					
				}
				else {

					$scope.showAlbumData = true;

					//console.log(response.data.topalbums);
				
					//create an empty array to hold objects with properties
					$scope.topAlbumArray = [];

					//store data from response in an array
					var albumData = response.data.topalbums;

					//loop through the array & populate the empty arrwy with objects
					albumData.album.forEach(function(element) {
						var albumObj =
							{
								name: element.name,
								url: element.url
							};
						$scope.topAlbumArray.push(albumObj);
					});	
					//console.log($scope.topAlbumArray);		
				}

	});

	$http.get('http://ws.audioscrobbler.com/2.0/?method=artist.getsimilar&artist=' + lastFMQueryString + '&api_key=ccdf156dfa78f0a2462aa132687608f0&format=json')
			.then(function successCallback(response){

				//console.log(response.data);
				//console.log($scope.simArtistArray);

				if(response.data.message === "The artist you supplied could not be found"  || response.data.similarartists.artist.length === 0) {

					$scope.showSimArtistError = true;
					$scope.simArtistErrorMsg = "Sorry, we could not find similar artists";
					//console.log(response.data.message);
					//console.log(response.data.similarartists);

				}
				else {
					
					$scope.showSimArtistData = true;
					//console.log(response.data.similarartists);
					
					//create an empty array to hold objects with properties
					$scope.simArtistArray = [];

					//store data from response in an array
					var artistData = response.data.similarartists;

					//loop through the array & populate the empty arrwy with objects
					artistData.artist.forEach(function(element) {
						var newObj =
							{
								name: element.name,
								url: element.url
							};
						$scope.simArtistArray.push(newObj);
						//console.log(newObj);
					});

					//console.log($scope.simArtistArray);
				}
				
	});

});
