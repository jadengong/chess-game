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
    startPieces.forEach((startPiece) => {
        const square = document.createElement('div')
        square.classList.add('square')
        square.classList.add('beige')
        gameBoard.append(square)
    })
}

createBoard()