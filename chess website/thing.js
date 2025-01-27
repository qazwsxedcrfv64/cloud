// dallincarmany.js
const board = document.getElementById("chess-board");

const pieces = {
    rook: "♜",
    knight: "♞",
    bishop: "♝",
    queen: "♛",
    king: "♚",
    pawn: "♟",
};

function createChessBoard() {
    for (let row = 0; row < 8; row++) {
        for (let col = 0; col < 8; col++) {
            const square = document.createElement("div");
            square.classList.add("square");
            square.classList.add((row + col) % 2 === 0 ? "light" : "dark");
            board.appendChild(square);
        }
    }
    placePieces();
}

function placePieces() {
    const initialPositions = [
        [pieces.rook, pieces.knight, pieces.bishop, pieces.queen, pieces.king, pieces.bishop, pieces.knight, pieces.rook],
        Array(8).fill(pieces.pawn),
        ...Array(4).fill(Array(8).fill(null)),
        Array(8).fill(pieces.pawn),
        [pieces.rook, pieces.knight, pieces.bishop, pieces.queen, pieces.king, pieces.bishop, pieces.knight, pieces.rook],
    ];

    board.childNodes.forEach((square, index) => {
        const row = Math.floor(index / 8);
        const col = index % 8;
        const piece = initialPositions[row][col];
        if (piece) {
            const pieceElement = document.createElement("span");
            pieceElement.classList.add("piece");
            pieceElement.textContent = piece;
            square.appendChild(pieceElement);
        }
    });
}

createChessBoard();
