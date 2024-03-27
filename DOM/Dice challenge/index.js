var randNum1 = randomIntFromInterval(1, 6)
var randNum2 = randomIntFromInterval(1, 6)

var diceDir1 = "images/dice" + randNum1 + ".png"
var diceDir2  = "images/dice" + randNum2 + ".png"

document.querySelector("img.img1").setAttribute("src", diceDir1)
document.querySelector("img.img2").setAttribute("src", diceDir2)

function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

if(randNum1!=randNum2){
  if(randNum1>randNum2){
    document.querySelector("h1").innerHTML = "Player 1 wins!"
   }else{
    document.querySelector("h1").innerHTML = "Player 2 wins!"
  }
} else{
  document.querySelector("h1").innerHTML = "Draw!"
}
