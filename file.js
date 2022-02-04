
const gameBoard = (() => {
   let gameBoard = []
   let currentMarker=""
   function marker() {
   if (currentMarker==Player1.getMarker()) {currentMarker = Player2.getMarker()}
   else if (currentMarker==Player2.getMarker()) {currentMarker = Player1.getMarker()}
   else {currentMarker=Player1.getMarker()}
   return currentMarker}
   function winner() {
    let winner = (currentMarker==Player1.getMarker()) ? Player1.getName() : 
    (currentMarker==Player2.getMarker()) ? Player2.getName() : ""
    return winner}

   function evaluateWinner() {
       alert(`${winner()} wins!`)
   }
   function tieGame() {
       alert("You tied!")
   }
   function endGame() {
       if (gameBoard[0]==gameBoard[1] && gameBoard[1]==gameBoard[2] && gameBoard[1] !== undefined ||
        gameBoard[0]==gameBoard[3] && gameBoard[3]==gameBoard[6] && gameBoard[3] !== undefined ||
        gameBoard[1]==gameBoard[4] && gameBoard[4]==gameBoard[7] && gameBoard[4]!==undefined ||
         gameBoard[2]==gameBoard[5] && gameBoard[5]==gameBoard[8] && gameBoard[5]!==undefined || 
         gameBoard[3]==gameBoard[4] && gameBoard[4]==gameBoard[5] && gameBoard[4] !==undefined ||
         gameBoard[6]==gameBoard[7] && gameBoard[7]==gameBoard[8] && gameBoard[7] !==undefined || 
         gameBoard[0]==gameBoard[4] && gameBoard[4]==gameBoard[8] && gameBoard[4] !==undefined ||
         gameBoard[2]==gameBoard[4] && gameBoard[4]==gameBoard[6] && gameBoard[4] !==undefined)
         {evaluateWinner()} else if (gameBoard.length>8) {tieGame()} else {}
}
    return {gameBoard, evaluateWinner, tieGame, endGame, marker}
})();
//created gameboard
const Player = (name, marker) => {
    const getName = () => name;
    const getMarker = () => marker;
    return {getName, getMarker};
};
//create factory for players
const Player1 = Player("Player 1", "x")
const Player2 = Player("Player 2", "o")

let box1 = document.getElementById("1")
let box2 = document.getElementById("2")
let box3 = document.getElementById("3")
let box4 = document.getElementById("4")
let box5 = document.getElementById("5")
let box6 = document.getElementById("6")
let box7 = document.getElementById("7")
let box8 = document.getElementById("8")
let box9 = document.getElementById("9")

box1.addEventListener("click", () => 
{let currentMarker=gameBoard.marker()
if (box1.textContent=="") {
box1.textContent=currentMarker,
gameBoard.gameBoard[0] = currentMarker} 
else {return}
gameBoard.endGame()})

box2.addEventListener("click", () => 
{let currentMarker=gameBoard.marker()
if (box2.textContent=="") {
box2.textContent=currentMarker,
gameBoard.gameBoard[1] = currentMarker}
else {return}
gameBoard.endGame()
})
box3.addEventListener("click", () => 
{let currentMarker=gameBoard.marker()
if (box3.textContent=="") {
box3.textContent=currentMarker,
gameBoard.gameBoard[2] = currentMarker} 
else {return}
gameBoard.endGame()
})
box4.addEventListener("click", () => 
{let currentMarker=gameBoard.marker()
if (box4.textContent=="") {
box4.textContent=currentMarker,
gameBoard.gameBoard[3] = currentMarker} 
else {return}
gameBoard.endGame()
})
box5.addEventListener("click", () => 
{let currentMarker=gameBoard.marker()
if (box5.textContent=="") {
box5.textContent=currentMarker,
gameBoard.gameBoard[4] = currentMarker} 
else {return}
gameBoard.endGame()
})
box6.addEventListener("click", () => 
{let currentMarker=gameBoard.marker()
if (box6.textContent=="") {
box6.textContent=currentMarker,
gameBoard.gameBoard[5] = currentMarker} 
else {return}
gameBoard.endGame()
})
box7.addEventListener("click", () => 
{let currentMarker=gameBoard.marker()
if (box7.textContent=="") {
box7.textContent=currentMarker,
gameBoard.gameBoard[6] = currentMarker} 
else {return}
gameBoard.endGame()
})
box8.addEventListener("click", () => 
{let currentMarker=gameBoard.marker()
if (box8.textContent=="") {
box8.textContent=currentMarker,
gameBoard.gameBoard[7] = currentMarker} 
else {return}
gameBoard.endGame()
})
box9.addEventListener("click", () => 
{let currentMarker=gameBoard.marker()
if (box9.textContent=="") {
box9.textContent=currentMarker,
gameBoard.gameBoard[8] = currentMarker} 
else {return}
gameBoard.endGame()
})
// box.forEach((div) => 
// div.addEventListener("click", () => 
// {div.textContent=Player1.getMarker()}))
//when a div is clicked, it will display the marker of the player

const openform = document.querySelector("button.newGame")
const overlay = document.getElementById("overlay")
const submit = document.getElementById("submit")
let form = document.querySelector("form")

// openform.addEventListener("click", function () {
//     form.classList.add("active")
//     overlay.classList.add("active")
// })

// function closeForm() {
//     form.classList.remove("active")
//     overlay.classList.remove("active")
// }
// submit.addEventListener("click", (e) => {
//     name1=document.getElementById("player1").value
//     name2.getName()=document.getElementById("player2").value
//     gameBoard.changeName(name1, name2)
// })