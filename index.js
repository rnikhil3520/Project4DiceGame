// alert("hello!!");
var player1=prompt("Enter Player1 Name.");
var player2=prompt("Enter Player2 Name.");

// Uppercasing first name
var length1=player1.length;
var firstLetter1=player1.slice(0,1);
firstLetter1=firstLetter1.toUpperCase();
var remainingLetter1=player1.slice(1,length1);
remainingLetter1=remainingLetter1.toLowerCase();
player1=firstLetter1+remainingLetter1;

// Uppercasing second name
var length2=player2.length;
var firstLetter2=player2.slice(0,1);
firstLetter2=firstLetter2.toUpperCase();
var remainingLetter2=player2.slice(1,length2);
remainingLetter2=remainingLetter2.toLowerCase();
player2=firstLetter2+remainingLetter2;

document.querySelectorAll(".playername")[0].textContent=player1;
document.querySelectorAll(".playername")[1].textContent=player2;

var randomNumber1=Math.random();
randomNumber1=Math.floor((randomNumber1*6)+1);

var randomNumber2=Math.random();
randomNumber2=Math.floor((randomNumber2*6)+1);

var randomDiceImage1="dice" + randomNumber1 + ".png";
var randomImageSource1="images/" + randomDiceImage1;
var image1= document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource1);

randomDiceImage2="dice" + randomNumber2 + ".png";
randomImageSource2="images/" + randomDiceImage2;
var image2= document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSource2);

if(randomNumber1>randomNumber2){
  document.querySelector("h1").textContent="🚩 " + player1 +" wins!!";
}

else if(randomNumber1<randomNumber2){
  document.querySelector("h1").textContent=player2 +" wins!! 🚩";
}
else{
  document.querySelector("h1").textContent="🚩 Draw!! 🚩";
}
