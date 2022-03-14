function div(name) {
    let x = document.createElement("div")
    x.classList.add(name)
    return x
}
console.log(div("home"))
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
       gameBoard.splice(0, gameBoard.length)

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
         {evaluateWinner()} else if (gameBoard.length>8 && gameBoard.includes(undefined)== false) {tieGame()} else {}
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


let boxes = document.querySelectorAll("div.box")
boxes.forEach(item => {
    item.addEventListener("click", () => {
    let currentMarker=gameBoard.marker()
    if (item.textContent=="") {
    item.textContent=currentMarker
    let i = item.id - 1
    console.log(i)
    gameBoard.gameBoard[i] = currentMarker} 
    else {return}
    gameBoard.endGame() 
    console.table(gameBoard.gameBoard)
})})

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