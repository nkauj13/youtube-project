var app = angular.module('musicMod');


app.factory('ytFactory', function($http) {

  // Create a variable to "store" the response in!
  var ytData;

  // Factories return objects...soo...we return two functions!
  return {

    // This function makes the API call and stores the response in ytData from line 6
    queryYT: function(query,topic) {
      $http({
        method: "GET",
        url: "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=" + query + "&type=video&topicId=" + topic + "&key=AIzaSyBIupTaipxwn9WorBosS7NqGyn7tNMMkQM"
      })
        .then(function successCallback(response) {
        ytData = response.data;
        console.log(ytData);
        //console.log(ytData);
        //console.log('Factory grabbed: ' + ytData);
        return ytData;
      });
    },

    // This function returns the ytData variable to the musicCtrl!
    getYTData: function() {
      console.log('Grabbing data from factory');
      return ytData;
    }

  };

});
