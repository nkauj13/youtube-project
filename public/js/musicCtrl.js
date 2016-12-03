var app = angular.module('musicMod');

app.controller('musicCtrl', function($scope, $http, ytFactory){

	// Create a variable to store the returned videoID in
	var stuff = ytFactory.getYTData();
	var youtubeStuff = stuff.items[0].id.videoId;
	console.log(stuff.items[0].id.videoId);

	// YouTube Embed
	$scope.link = 'https://www.youtube.com/watch?v=' + youtubeStuff;

});
