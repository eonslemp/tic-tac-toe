const cells = Array.from(document.getElementsByClassName('cell'))
cellState = ["","","","","","","",""]
// if(player == )
// const player = ;
// console.log(cells)
// cells.forEach(element,  () => element.addEventListener('mouseenter', () => {
//     element.classList.toggle("light-gray") )
// }
// forEach()
// cells.addEventListener('mouseover', )\
whoseMove = 'X'
let playAs = null;
let crosses = document.getElementById('crosses')
// console.log(crosses)
function selectCrosses(){
    restart();
    if(crosses.style.backgroundColor == 'rgb(143, 206, 202)'){
        crosses.style.backgroundColor = 'white';
        playAs = null;
        // console.log(playAs)
    } else {
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
    } else {
        playAs = 'O';
        noughts.style.backgroundColor = 'rgb(143, 206, 202)';
        crosses.style.backgroundColor = 'white';
        }
    // console.log(playAs)
}

noughts.addEventListener('click', selectNoughts)

// crosses = true;
// console.log(crosses)


var opponent = null;
function selectSpongebob(){
    if(spongebob.style.backgroundColor == 'red'){
        opponent = null;
        spongebob.style.backgroundColor = 'white'
    } else {
        opponent = 'spongebob';
        console.log(opponent)
        spongebob.style.backgroundColor = 'red';
        skynet.style.backgroundColor = 'white';
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

const spongebob = document.getElementById('spongebob')
spongebob.addEventListener('click', selectSpongebob)

const skynet = document.getElementById('skynet')
skynet.addEventListener('click', selectSkynet)

function fillCell(cell){
    // cell.innerText = playAs;
    console.log(cell)
}
// console.log(cells)
// cells.forEach( cell => {
//     // console.log(cell)
//     cell.addEventListener('click', fillCell(cell))
// })

cells.forEach( cell => {
    // console.log(cell)
    cell.addEventListener('click', () => {
        if(cell.innerHTML == ""){
            cell.innerHTML = whoseMove;
            changeMover()

            cellState[Number(cell.getAttribute("id"))] = playAs;
            // console.log(cellState)
        } 
       
    })
})

function restart(){
    cells.forEach(cell =>{
        cell.innerHTML = "";
        cellState = ["","","","","","","",""];
    })
}

function changeMover(){
    whoseMove = (whoseMove == "X") ? "O" : "X"
}

function checkWin(){

}
