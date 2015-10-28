'use strict';

//http://spin.atomicobject.com/2013/11/22/pass-rails-data-angularjs/

angular.module('searchApp', [])
  .controller('searchController', function($scope, $http){
    var pendingTask;
	 $scope.items = [25, 50, 75, 100];

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
