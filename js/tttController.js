angular
	.module('tttApp')
	.controller('TTTController', TTTController);

TTTController.$inject = ['$firebase'];

function TTTController($firebase) {
	var self = this;
	self.players = [ "X", "O"];
	self.playerOneWon = false;
	self.playerTwoWon = false;
	self.playerOne = new Player("Playe One");
	self.playerTwo = new Player("Player Two");
	//self.playersTie = false;
	self.players.ties = 0;
	self.marianottt = marianottt(); 
	// self.marianottt.tiles = [];

				// ************** Connection to Firebase ************
	function marianottt(){
		var ref = new Firebase('https://marianottt.firebaseio.com/');
		var mttt = $firebase(ref).$asObject();
		//console.log(mttt);
		return mttt;
	}

	self.marianottt.$loaded().then(function() {
		if(self.marianottt.waitPlayerTwo) {
			self.player = "O";
			self.marianottt.waitPlayerTwo = false;
		}
		else {
			self.player = "X";
			self.marianottt.waitPlayerTwo = true;
			self.marianottt.currentTurn = "X";

			self.marianottt.tiles = [];

			  	 // *************** Array Constructor **************

			(function tilePusher(){
				for(var i = 0; i < 9; i++){
					self.marianottt.tiles.push(new tile(i));
				}	self.marianottt.$save();
			})();


			function tile(position) {
				this.position = position;
				this.players = '';
	    	// this.playerOne = false;
	    	// this.playerTwo = false;
	    	}

			}
			self.marianottt.$save();
			});

	function Player(name) {
		this.name = name;
		this.wins = 0;
	}

				// ************** Click Tiles ******************

	self.click = function($index){
		if (self.marianottt.tiles[$index].players === '' && self.marianottt.currentTurn === "X" && self.player === "X"){
			self.marianottt.tiles[$index].players = "X";
			p1WinCheck();
			if (self.playerOneWon === false ){
				tieCheck();
			}
			self.marianottt.currentTurn = "O";
		}
		else if (self.marianottt.tiles[$index].players === '' && self.marianottt.currentTurn == "O" && self.player === "O"){
			self.marianottt.tiles[$index].players = "O";
			p2WinCheck();
			if (self.playerTwoWon === false){
				tieCheck();
			}
			self.marianottt.currentTurn = "X";
		}
		self.marianottt.$save();
	};

	     		// *********** New Game Clears Tiles ***********
	
	function newGame() {
		for(var i = 0; i < 9; i++){
			self.marianottt.tiles[i].players = '';
		}
		 self.marianottt.$save();
	}

				// ************ Checks for tie ***************
	function tieCheck(){
		var check = 0;
		for(i = 0; i < 9; i++){
			if(!self.marianottt.tiles[i].players == ""){
				check++;
			}
		} 
			if (check > 8){
				self.players.ties++;
				 alert("Tie");
				 newGame();
		}
			return check;
		//playersTie = true;
			self.marianottt.$save();
		}


 			// *************** Checks for winning possibilities ***************

	function p1WinCheck() {
		if((self.marianottt.tiles[0].players == "X" && self.marianottt.tiles[1].players == "X" && self.marianottt.tiles[2].players == "X") ||
			(self.marianottt.tiles[3].players == "X" && self.marianottt.tiles[4].players == "X" && self.marianottt.tiles[5].players == "X") ||
			(self.marianottt.tiles[6].players == "X" && self.marianottt.tiles[7].players == "X" && self.marianottt.tiles[8].players == "X") ||
			(self.marianottt.tiles[0].players == "X" && self.marianottt.tiles[3].players == "X" && self.marianottt.tiles[6].players == "X") ||
			(self.marianottt.tiles[1].players == "X" && self.marianottt.tiles[4].players == "X" && self.marianottt.tiles[7].players == "X") ||
			(self.marianottt.tiles[2].players == "X" && self.marianottt.tiles[5].players == "X" && self.marianottt.tiles[8].players == "X") ||
			(self.marianottt.tiles[0].players == "X" && self.marianottt.tiles[4].players == "X" && self.marianottt.tiles[8].players == "X") ||
			(self.marianottt.tiles[2].players == "X" && self.marianottt.tiles[4].players == "X" && self.marianottt.tiles[6].players == "X")) {
			alert(self.playerOne.name + " Wins");
			self.playerOne.wins++;
			self.playerOneWon = true;
			newGame();
		} 
		self.marianottt.$save();
	}

	function p2WinCheck() {
		if((self.marianottt.tiles[0].players == "O" && self.marianottt.tiles[1].players == "O" && self.marianottt.tiles[2].players == "O") ||
			(self.marianottt.tiles[3].players == "O" && self.marianottt.tiles[4].players == "O" && self.marianottt.tiles[5].players == "O") ||
			(self.marianottt.tiles[6].players == "O" && self.marianottt.tiles[7].players == "O" && self.marianottt.tiles[8].players == "O") ||
			(self.marianottt.tiles[0].players == "O" && self.marianottt.tiles[3].players == "O" && self.marianottt.tiles[6].players == "O") ||
			(self.marianottt.tiles[1].players == "O" && self.marianottt.tiles[4].players == "O" && self.marianottt.tiles[7].players == "O") ||
			(self.marianottt.tiles[2].players == "O" && self.marianottt.tiles[5].players == "O" && self.marianottt.tiles[8].players == "O") ||
			(self.marianottt.tiles[0].players == "O" && self.marianottt.tiles[4].players == "O" && self.marianottt.tiles[8].players == "O") ||
			(self.marianottt.tiles[2].players == "O" && self.marianottt.tiles[4].players == "O" && self.marianottt.tiles[6].players == "O")) {
			alert(self.playerTwo.name + " Wins");
			self.playerTwo.wins++;
			self.playerTwoWon = true;
			newGame();
		} 
		self.marianottt.$save();
	}

}



	//var coinFace = Math.floor(Math.random() * 2);
//flip coin!
	//while(coinFace === 0){
	//console.log("Heads! Flipping again...");
	//var coinFace = Math.floor(Math.random() * 2);
	//}
	//console.log("Tails! Done flipping.");