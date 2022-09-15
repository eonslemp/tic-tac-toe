const cells = Array.from(document.getElementsByClassName('cell'))
cellState = ["", "", "", "", "", "", "", "", ""];
const statusMessage = document.getElementById("game-status")

whoseMove = 'X'
let playAs = null;
let crosses = document.getElementById('crosses')
// console.log(crosses)

function restart(){
    // this function will reset the game state
    cellState = ["", "", "", "", "", "", "", "", ""];

    cells.forEach(cell =>{
        cell.innerHTML = "";
        cell.style.backgroundColor = 'white';
        
    })
    // resets the game status message bar
    statusMessage.innerText = '';
}

function selectCrosses(){
    restart();
    if(crosses.style.backgroundColor == 'rgb(143, 206, 202)'){
        crosses.style.backgroundColor = 'white';
        whoseMove = "X";
        playAs = null;
        // console.log(playAs)
    } else {
        whoseMove = "X";
        playAs = 'X';
        crosses.style.backgroundColor = 'rgb(143, 206, 202)';
        noughts.style.backgroundColor = 'white';
        }
    // console.log(playAs)
}
crosses.addEventListener('click', selectCrosses)

function selectNoughts(){
    restart();
    if(noughts.style.backgroundColor == 'rgb(143, 206, 202)'){
        noughts.style.backgroundColor = 'white'
        playAs = null;
        whoseMove = "X";
    } else {
        playAs = 'O';
        whoseMove = "X";
        noughts.style.backgroundColor = 'rgb(143, 206, 202)';
        crosses.style.backgroundColor = 'white';
        }
    // console.log(playAs)
}

noughts.addEventListener('click', selectNoughts)

// crosses = true;
// console.log(crosses)




var opponent = null;

let bobColor = 'white'

function selectSpongebob(){
    if(spongebob.style.backgroundColor == 'red'){
        opponent = null;
        spongebob.style.backgroundColor = 'white';

        spongebob.addEventListener('mouseenter', () =>{
            spongebob.style.backgroundColor = 'rgb(143, 206, 202)'
        })
        spongebob.addEventListener('mouseout', () =>{
            spongebob.style.backgroundColor = 'white'
        })

    } else {
        opponent = 'spongebob';
        console.log(opponent)
        spongebob.style.backgroundColor = 'red';
        skynet.style.backgroundColor = 'white';
        spongebob.removeEventListener('mouseenter', () =>{
            spongebob.style.backgroundColor = 'rgb(143, 206, 202)'
        })
        spongebob.removeEventListener('mouseout', () =>{
            spongebob.style.backgroundColor = 'white'
        })
    }
}


function selectSkynet(){
    if(skynet.style.backgroundColor == 'red'){
        opponent = null;
        skynet.style.backgroundColor = 'white';
    } else {
        opponent = 'skynet';
        console.log(opponent)
        skynet.style.backgroundColor = 'red';
        spongebob.style.backgroundColor = 'white';
        }
}
// adding event listeners to spongebob for interactivity
const spongebob = document.getElementById('spongebob')
spongebob.addEventListener('click', selectSpongebob)
// spongebob.addEventListener('mouseenter', () =>{
//     spongebob.style.backgroundColor = 'rgb(143, 206, 202)'
// })
// spongebob.addEventListener('mouseout', () =>{
//     spongebob.style.backgroundColor = 'white'
// })


// adding event listeners for interactivity to skynet
const skynet = document.getElementById('skynet')
skynet.addEventListener('click', selectSkynet)
// skynet.addEventListener('mouseenter', () => {
//     skynet.style.backgroundColor = 'rgb(143, 206, 202)'
// })
// skynet.addEventListener('mouseout', () => {
//     skynet.style.backgroundColor = 'white'
// })







function changeMover(){
    // this ternary alternates mover from crosses and naughts
    whoseMove = (whoseMove == "X") ? "O" : "X";
}


cells.forEach( cell => {
    // this arrow fx will add game logic functionality to each game matrix cell
    cell.addEventListener('click', () => {
        // conditional verifies that the cell is not already marked and that 
        // the player has chosen crosses or noughts
        if(cell.innerHTML == "" && playAs != null){
            // if above conditions are met this line 
            // assigns the appropriate character to the cell
            cell.innerHTML = whoseMove;
            // this line updates the cellstate variable to reflect the board
            cellState[Number(cell.getAttribute("id"))] = whoseMove;
            // checks status of the game
            checkWin(cellState);
            // alternates the mover
            changeMover();
        } 
       
    })
})







// function checkWin(gameArr){
//     const statusMessage = document.getElementById("game-status")
//     const winner = (whoseMove == "O") ? 'NUAGHTS' : 'CROSSES';
//     switch(gameArr){
//         case (gameArr[0] === gameArr[1]) && (gameArr[1] === gameArr[2]):
//             statusMessage.innerText = `${winner} WINS!`;
//             break;
//         case (gameArr[3] === gameArr[4]) && (gameArr[4] === gameArr[5]):
//             statusMessage.innerText = `${winner} WINS!`;
//             break;
//         case (gameArr[6] === gameArr[7]) && (gameArr[7] === gameArr[8]):
//             statusMessage.innerText = `${winner} WINS!`;
//             break;
//         case (gameArr[0] === gameArr[3]) && (gameArr[3] === gameArr[6]):
//             statusMessage.innerText = `${winner} WINS!`;
//             break;  
//         case (gameArr[1] === gameArr[4]) && (gameArr[4] === gameArr[7]):
//             statusMessage.innerText = `${winner} WINS!`;
//             break;
//         case (gameArr[2] === gameArr[5]) && (gameArr[5] === gameArr[8]):
//             statusMessage.innerText = `${winner} WINS!`;
//             break;
//         case (gameArr[2] === gameArr[4]) && (gameArr[4] === gameArr[6]):
//             statusMessage.innerText = `${winner} WINS!`;
//             break;
//         case (gameArr[0] === gameArr[4]) && (gameArr[4] === gameArr[8]):
//             statusMessage.innerText = `${winner} WINS!`;
//             break;
//         default:
//             statusMessage.innerText = 'No winner';
//     }

// }
// let x = "X";
// let y = "X";
// let z = "X"
// console.log(x == y && y == z)
// console.log("X" == "X" == "X")
// console.log("X" == "X" && "X" == "X")

// const test = ['X', 'O', 2, 3, 'X', 'O', 6, 7, 'X']
// console.log(test[0] === test[4] && test[4] === test[8])


// this array stores the cell indices relevant to the 
// eight possible win conditions
const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

function checkWin(gameArr){
    // this variable stores the value of the current mover to display in case of a win
    const winner = (whoseMove == "O") ? 'NAUGHTS' : 'CROSSES';
// for loop to check the game array against the various win conditions
    for(let condition of winConditions){
        // these variables store the value of the game array at the indices 
        // relevant to the different win conditions
        const cellA = gameArr[condition[0]];
        const cellB = gameArr[condition[1]];
        const cellC = gameArr[condition[2]];
// this conditional verifies that at least one of the variables 
// is not a default setting for comparison in the next conditional
        if(cellA != ""){
// conditional checks the values against each other 
            if(cellA == cellB && cellB == cellC){

        // changes color of winning cells to highlight win
                document.getElementById(`${condition[0]}`).style.backgroundColor = 'rgb(143, 206, 202)'
                document.getElementById(`${condition[1]}`).style.backgroundColor = 'rgb(143, 206, 202)'
                document.getElementById(`${condition[2]}`).style.backgroundColor = 'rgb(143, 206, 202)'
        // sets value of game status bar
                statusMessage.innerText = `${winner} WINS!`;
    // sets playAs to null and prevents any further 
    // moves until one of the buttons is clicked
                playAs = null;
                return cellA, cellB, cellC
            }
        }
    }
// conditional checks if any values remain to be filled 
// if not, and the above win conditions have not been observed then 
// there is a tie
    if(gameArr.includes("") == false){
        console.log('tie')
        statusMessage.innerText = 'No Winner';
    }

 
}
