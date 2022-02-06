// alert("hello!!");

var randomNumber1=Math.random();
randomNumber1=Math.floor((randomNumber1*6)+1);
alert(randomNumber1);

var image1=randomimage(randomNumber1);

function randomimage(randomNumber){

if(randomNumber==1){
  document.querySelector(".dice .img1").setAttribute("src","images\dice1.png");
}

else if(randomNumber==2){
  document.querySelector(".dice .img1").setAttribute("src","images\dice2.png");
}

else if(randomNumber==3){
  document.querySelector(".dice .img1").setAttribute("src","images\dice3.png");
}

else if(randomNumber==4){
  document.querySelector(".dice .img1").setAttribute("src","images\dice4.png");
}

else if(randomNumber==5){
  document.querySelector(".dice .img1").setAttribute("src","images\dice5.png");
}

else if(randomNumber==6){
  document.querySelector(".dice .img1").setAttribute("src","images\dice6.png");
}
}
