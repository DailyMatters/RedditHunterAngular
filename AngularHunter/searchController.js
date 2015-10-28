'use strict';

/* https://github.com/sitepoint-editors/fastr */

angular.module('searchApp', [])
  .controller('searchController', function($scope, $http){
    var pendingTask;

    if($scope.search === undefined){
      $scope.search = "Entrepreneur";
      fetch();
    }

	$scope.change = function(){
      if(pendingTask){
        clearTimeout(pendingTask);
      }
      pendingTask = setTimeout(fetch, 800);
    };

    function fetch(){
      /*$http.get("http://www.omdbapi.com/?t=" + $scope.search + "&tomatoes=true&plot=full")
       .success(function(response){ $scope.details = response; });*/
	   
	   $http.get("http://www.reddit.com/r/entrepreneur/search.json?q=" + $scope.search + "&limit=2")
       .success(function(response){ $scope.results = response; });
    }

	//Change or delete this
    $scope.update = function(movie){
      $scope.search = movie.Title;
      $scope.change();
    };

	//Change or delete this
    $scope.select = function(){
      this.setSelectionRange(0, this.value.length);
    }	
	
  });