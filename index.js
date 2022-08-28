let scoreHome = document.getElementById("score-home");
let scoreGuest = document.getElementById("score-guest");
let countHome = 0;
let countGuest = 0;
function plusOneHome(){
    countHome += 1;
    scoreHome.textContent = countHome;
}
function plusTwoHome(){
    countHome += 2;
    scoreHome.textContent = countHome;
    
}
function plusThreeHome(){
    countHome += 3;
    scoreHome.textContent = countHome;
}
function plusOneGuest(){
    countGuest += 1;
    scoreGuest.textContent = countGuest;
}
function plusTwoGuest(){
    countGuest += 2;
    scoreGuest.textContent = countGuest;
}
function plusThreeGuest(){
    countGuest += 3;
    scoreGuest.textContent = countGuest;
}
let winner = document.getElementById("Winner");
function result(){
if (countGuest > countHome){
    winner.textContent = "Guest!!";
}
else if (countGuest < countHome){
    winner.textContent = "Home!!";
}
else{
  winner.textContent = "Tie!";  
}
}