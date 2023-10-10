let yourMove;
let result;
// const score = {
//     win: 0,
//     lost: 0,
//     draw: 0
// };
let computerChoice;
const score = JSON.parse(localStorage.getItem('score'))

function pickComputerMove() {
    const randomNumber = Math.random();
    if (randomNumber >= 0 && randomNumber < 1 / 3) {
        console.log('rock');
        computerChoice = 'rock'
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        console.log('paper')
        computerChoice = 'paper'
    } else {
        console.log('scissors')
        computerChoice = 'scissors'
    }

}
function updateScoreElement(){
    document.querySelector('.js-score').innerHTML = `Wins: ${score.win} Lost: ${score.lost} Draw: ${score.draw}`
}
// console.log(document.querySelector('.js-score'))
document.querySelector('.js-score').innerHTML = `Wins: ${score.win} Lost: ${score.lost} Draw: ${score.draw}`

function moveInfo(){
    document.querySelector('.js-move').innerHTML = `You:<img src="images/${yourMove}.png"> Computer:<img src="images/${computerChoice}.png">`
}
function displayResult(){
    document.querySelector('.js-result').innerHTML=`You ${result}`
}
