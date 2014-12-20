angular
.module('tttApp')
.controller('TTTController', TTTController);

TTTController.$inject = ['$firebase'];

function TTTController($firebase) {
	var self = this;
	self.players = [ 'X', 'O' ];
	self.tiles = [];
	self.currentTurn = "X";

	//ARRAY
(function tilePusher(){
	for(var i = 0; i < 9; i++){
		self.tiles.push(new tile(i));

	}
})();

function tile(position) {
	console.log(position);
	this.position = position;
	this.players = '';
	this.click = function() {

		// click my tiles
		if(this.players == ''){
			if(self.currentTurn == "X"){
				this.players = "X";
				return self.currentTurn = "O";
			} else if (self.currentTurn == "O"){
				this.players = "O";
				return self.currentTurn = "X";
			}else {prompt("BACKUP")}	;
		}
	};
};

}

	//var coinFace = Math.floor(Math.random() * 2);
//flip coin!
	//while(coinFace === 0){
	//console.log("Heads! Flipping again...");
	//var coinFace = Math.floor(Math.random() * 2);
	//}
	//console.log("Tails! Done flipping.");