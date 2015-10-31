
var playButton = document.getElementById("play-button");
var textArea = document.getElementById("text-area");
playButton.addEventListener("click", function() {
	textArea.innerHTML = "";
	game.keepArray = [];
	game.roll();
	game.menu();
	game.menu();
	game.keepAll();
	check.checkAll();
});

var game = {
	rollArray: [],
	keepArray: [],
	continue: true,
	roll: function() {
		for (i = 0; i < 5 - game.keepArray.length; i++) {
			game.rollArray[i] = Math.floor((Math.random() * 6) + 1);
		}
		textArea.innerHTML = "You rolled: " + game.rollArray + "<br> You are keeping: " + game.keepArray;
	},
	keep: function() {
		var keepValue = prompt("Which number would you like to keep?");
		for (i = 0; i < game.rollArray.length; i++) {
			if (parseInt(keepValue) === game.rollArray[i]) {
				game.keepArray.push(parseInt(keepValue));
				game.rollArray.splice(i, 1);
				break;
			}
		}
		game.keepArray.sort();
		textArea.innerHTML ="You are keeping: " + game.keepArray.sort() + 
							"<br>You still have: " + game.rollArray;
	},
	removeNum: function() {
		var rmValue = prompt("Which number would you like to remove?");
		for (i = 0; i< game.keepArray.length; i++) {
			if (parseInt(rmValue) === game.keepArray[i]) {
				game.rollArray.push(parseInt(rmValue));
				game.keepArray.splice(i, 1);
				break;
			}
		}
		game.keepArray.sort();
		textArea.innerHTML ="You are keeping: " + game.keepArray.sort() + 
							"<br>You still have: " + game.rollArray;
	},
	keepAll: function() {
		for (i = 0; i < game.rollArray.length; i++) {
			game.keepArray.push(game.rollArray[i]);
		}
		game.keepArray.sort();
		textArea.innerHTML ="You have: " + game.keepArray.sort();
	},
	menu: function() {

		var userChoice = prompt("Enter k to keep a number, r to roll again, rm to remove a number, or q to quit.");
		userChoice = userChoice.toLowerCase();
		switch(userChoice) {
		case "k":
			game.keep();
			game.menu();
			break;
		case "r": 
			game.roll();
			break;
		case "rm":
			game.removeNum();
			break;
		case "q":
			throw new Error();
			break;
		default:
			textArea.innerHTML = "Invalid input.  Please try again. <br> You are keeping: " + game.keepArray.sort() + 
							"<br>You still have: " + game.rollArray;
			game.menu();
		}
	}
}

var check = {
	checkArray: [],
	counter: function() {
		var count = {};
		for(var i = 0; i < 5; i++) {
			var num = game.keepArray[i];
			count[num] = count[num] ? count[num] + 1 : 1;
		}
		check.checkArray = [];
		for (var n in count) {
		    check.checkArray.push(count[n]);
		    check.checkArray = check.checkArray.sort().reverse();
		    console.log(check.checkArray);
		}
	},
	straight: function() {
		var count = 0;
		for(var i = 0; i < 5; i++ ) {
			if (game.keepArray[i] === game.keepArray[i-1] + 1) {
				count++;
			}
		}
		if (count === 4) {
			textArea.innerHTML = game.keepArray + "<br><h2>Large straight!</h2>";
		}
		if (count === 3) {
			textArea.innerHTML = game.keepArray + "<br><h2>Small straight!</h2>";
		}
	},
	yahtzee: function() {
		check.counter();
		if (check.checkArray[0] === 5) {
			textArea.innerHTML = game.keepArray + "<br><h1>Yahtzee!</h1>";
		}
	},
	fullHouse: function() {
		check.counter();
		if (check.checkArray[0] === 3 && check.checkArray[1] === 2) {
			textArea.innerHTML = game.keepArray + "<br><h2>Full house!</h2>";
		}		
	},
	fourOfKind: function() {
		check.counter();
		if (check.checkArray[0] === 4) {
			textArea.innerHTML = game.keepArray + "<br><h2>Four of a kind!</h2>";
		}		
	},
	threeOfKind: function () {
		check.counter();
		if (check.checkArray[0] == 3 && check.checkArray[1] !== 2 ) {
			textArea.innerHTML = game.keepArray + "<br><h2>Three of a kind!</h2>";
		}		
	},
	checkAll: function() {
		check.yahtzee();
		check.straight();
		check.fullHouse();
		check.fourOfKind();
		check.threeOfKind();
	}
}