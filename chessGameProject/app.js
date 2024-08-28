// create constants for each of these elements of the chess game UI, using querySelector 
const gameBoard = document.querySelector("#gameboard");

const playerDisplay = document.querySelector("#player");

const infoDisplay = document.querySelector("#info-display");

const width = 8; // to define a 8x8 board below

let playerGo = 'brown' // for the turn changing mechanic
playerDisplay.textContent = 'brown'

const startPieces = [ // think of an array of 64 items
    rook, knight, bishop, queen, king, bishop, knight, rook,
    pawn, pawn, pawn, pawn, pawn, pawn, pawn, pawn,
    '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '',
    pawn, pawn, pawn, pawn, pawn, pawn, pawn, pawn,
    rook, knight, bishop, queen, king, bishop, knight, rook,
    
]


function createBoard(){
    startPieces.forEach((startPiece, i) => {
        const square = document.createElement('div')
        square.classList.add('square')
        square.innerHTML = startPiece // save each piece as its svg file

        // make each draggable
        square.firstChild?.setAttribute('draggable', true) // if a square has a first child (it has a piece in the slot), give it the attribute draggable found (checked by the question mark)

        square.setAttribute('square-id', i) // unique attribute for square so that each is ID'd.


        const row = Math.floor((63 - i) / 8) + 1 // define the row we are in, 8x8 board 

        if(row % 2 === 0){
            square.classList.add(i % 2 === 0 ? "green" : "white")
        }else {
            square.classList.add(i % 2 === 0 ? "white" : "green") // has to be if else so that at the end of a row, if a square ends on one color, the first square in the next row has to be the same color.
        }

        if(i <= 15){ // we want the first 16 squares to be black (team 1); enter the square, enter the child of the square, and make classList black. 
            square.firstChild.firstChild.classList.add('brown')
        }else if(i >= 48){
            square.firstChild.firstChild.classList.add('black')
        }


        gameBoard.append(square)
    })
}

createBoard();



const allSquares = document.querySelectorAll(".square")

allSquares.forEach(square => {
    square.addEventListener('dragstart', dragStart) // square will be looking for a dragstart event, and when it starts a function dragStart will be called
    square.addEventListener('dragover', dragOver) // same for dragging over
    square.addEventListener('drop', dragDrop) // and for dropping it in a new square OR a square with a piece in it

})

let startPositionId
let draggedElement

function dragStart(e){
    startPositionId = (e.target.parentNode.getAttribute('square-id')) // mark the object with target to have only its target location show up on console ;; just gets us the id of the piece we are trying to drag!!
    draggedElement = e.target
}

function dragOver(e){
    e.preventDefault() // prevents any funky behavior since without this, it would tell me what im dragging over
}

function dragDrop(e){
    e.stopPropagation() // prevents any more funky behavior like calling function twice

    const taken = e.target.classList.contains('piece') // if target contains the class piece, then clearly its a piece

   // e.target.parentNode.append(draggedElement) // append the target element to square with a piece already in it, then remove it
   //  e.target.remove() 

    // now we have to make sure that this only happens if there is a piece, and if it is an opponents piece

    changePlayer()

}

function changePlayer(){
    if(playerGo === "brown"){
        reverseIDs() // on brownad square 0 should be bottom left
        playerGo = "black"
        playerDisplay.textContent = "black"
    } else {
        revertIDs() // on black turn square 0 should be top left
        playerGo = "brown"
        playerDisplay.textContent = "brown"
    }


}

// flip ids so that square 0 is in the perspective of the turngoer, like flipping the board

function reverseIDs(){
    const allSquares = document.querySelectorAll(".square")
    allSquares.forEach((square, i) => square.setAttribute('square-id', (width * width - 1) - i)) // in this loop, the first iteration ends up being 8 * 8 - 1 - 0 = 63, then continuously subtract 1 to be 62, 61... this reverses the IDs
}

function revertIDs(){
    const allSquares = document.querySelectorAll(".square") // freshest squares
    allSquares.forEach((square, i) => square.setAttribute('square-id', i)) // setting it back to i reverts
}