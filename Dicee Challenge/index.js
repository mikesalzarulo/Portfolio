var randomNumber1 = Math.floor(Math.random() * 6);
var randomNumber2 = Math.floor(Math.random() * 6);
var randomImages = new Array ("images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png", 
"images/dice5.png", "images/dice6.png");

document.getElementById('img1').setAttribute('src',randomImages[randomNumber1]);
document.getElementById('img2').setAttribute('src',randomImages[randomNumber2]);

if (randomNumber1 > randomNumber2){
    document.getElementById("title").innerHTML = "Player 1 Wins!";
  }
  else if (randomNumber2 > randomNumber1){
    document.getElementById("title").innerHTML = "Player 2 Wins!";
  }
  else if (randomNumber1 === randomNumber2){
    document.getElementById("title").innerHTML = "Draw!";
  } 