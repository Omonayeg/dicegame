
   function refreshMe() {
    // FOR DICE 1 
randomNum1 = Math.floor((Math.random() * 6) + 1);

var randomDiceNum = "images/dice" + randomNum1 + ".png";

document.querySelectorAll("img")[0].setAttribute("src", randomDiceNum);

// FOR DICE 2
randomNum2 = Math.floor((Math.random() * 6) + 1);

var randomDiceNum2 = "images/dice" + randomNum2 + ".png";

document.querySelector(".img2").setAttribute("src", randomDiceNum2);
 

    if (randomNum1 > randomNum2) {
        document.querySelector("h1").innerHTML = "Player 1 wins!";
    }
    else if (randomNum1 === randomNum2) {
        document.querySelector("h1").innerHTML = "Draw!";
    }
    else {
        document.querySelector("h1").innerHTML = "Player 2 wins!";

    }
}