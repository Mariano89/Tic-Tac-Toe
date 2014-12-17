var TicTacToeApp = angular.module("TicTacToeApp", []);

TicTacToeApp.controller("TTTController", ['$scope', function($scope){

	
$scope.tiles = [
		[{owner:""},{owner:""},{owner:""}],
		[{owner:""},{owner:""},{owner:""}],
		[{owner:""},{owner:""},{owner:""}]
	];

	$scope.click = function(){
		console.log($scope.tiles[0][0].cellState == "X" && $scope.grid[0][1].cellState == "X" && $scope.tiles[0][2].cellState == "X")
		alert("CLICK!!");
	};
	
}]);