// create constants for each of these elements of the chess game UI, using querySelector 
const gameBoard = document.querySelector("#gameboard");

const playerDisplay = document.querySelector("#player");

const infoDisplay = document.querySelector("#info-display");

const width = 8; // to define a 8x8 board below

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
        square.setAttribute('square-id', i) // unique attribute for square so that each is ID'd.
       // square.classList.add('beige')
       const row = Math.floor((63 - i) / 8) + 1 // define the row we are in, 8x8 board 

        if(row % 2 === 0){
            square.classList.add(i % 2 === 0 ? "green" : "white")
        }else {
            square.classList.add(i % 2 === 0 ? "white" : "green") // has to be if else so that at the end of a row, if a square ends on one color, the first square in the next row has to be the same color.
        }


        gameBoard.append(square)
    })
}

createBoard();
