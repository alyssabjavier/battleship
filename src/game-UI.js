import { Ship, Gameboard, Player } from "./game-components";

const container = document.querySelector('.container');
const userTitle = document.querySelector('#user-title');
console.log(userTitle);
const AITitle = document.querySelector('#ai-title')
console.log(AITitle);
const userBoardDiv = document.querySelector('.user-board-div')
const AIBoardDiv = document.querySelector('.ai-board-div')
const formRow = document.querySelectorAll('.ship-row');
const formColumn = document.querySelectorAll('.ship-column');
const formDirection = document.querySelectorAll('.ship-direction');
const shipButtons = document.querySelectorAll('.ship-submit')

const gameUI = {
    
    playerUser: null,
    playerAI: null,
    activePlayer: null,

    initializeGame() {
        this.playerUser = new Player('User');
        this.playerAI = new Player('AI');
        this.activePlayer = this.playerUser;
        this.generateGameboard(userBoardDiv, this.playerUser);
        this.generateGameboard(AIBoardDiv, this.playerAI);
    },

    generateGridCell(row, column, boardDiv, player) {
        const gridCell = document.createElement('div');
        gridCell.classList.add('grid-cell');
        gridCell.setAttribute('data-player', player.type);
        gridCell.setAttribute('data-row', (row));
        gridCell.setAttribute('data-column', (column));
        gridCell.textContent = '';
        boardDiv.appendChild(gridCell);

        gridCell.addEventListener('click', (event) => this.handleBoardClick(event));
    },

    generateGameboard(boardDiv, player) {
        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
                this.generateGridCell(i, j, boardDiv, player);
            }
        }
    },

    updateCell(row, column, player) {
        const gridCell = document.querySelector(`.grid-cell[data-player="${player.type}"][data-row="${row}"][data-column="${column}"]`);
        if (player == this.playerUser) {
            if (player.board.grid[row][column] === null || 
                player.board.grid[row][column] === 'H' || 
                player.board.grid[row][column] === 'M') {
                    gridCell.textContent = player.board.grid[row][column]; // if hit or miss
                } else {
                    gridCell.textContent = `${player.board.grid[row][column].type}`; // if ship => display ship type
                }
        }
        if (player == this.playerAI) {
            if (player.board.grid[row][column] === null || 
                player.board.grid[row][column] === 'H' || 
                player.board.grid[row][column] === 'M') {
                    gridCell.textContent = player.board.grid[row][column];
                } else {
                    gridCell.textContent = null;
                }
        }
    },

    handleBoardClick(event) {
        const row = event.target.getAttribute('data-row');
        const column = event.target.getAttribute('data-column');
        const player = event.target.getAttribute('data-player');
        if (player == 'User') {
            if (this.activePlayer == this.playerAI) {
                this.playerUser.board.receiveAttack(row, column);
                this.playerUser.board.areShipsSunk();
                if (this.playerUser.board.areShipsSunk()) {
                    this.displayVictory(this.playerAI);
                }
                this.updateCell(row, column, this.playerUser);
                this.activePlayer = this.playerUser;
            }
        } else if (player == 'AI') {
            if (this.activePlayer == this.playerUser) {
                this.playerAI.board.receiveAttack(row, column);
                if (this.playerAI.board.areShipsSunk()) {
                    this.displayVictory(this.playerUser);
                }
                this.updateCell(row, column, this.playerAI);
                this.activePlayer = this.playerAI;
                this.AIAttackUser();
            }
        } else {
            return null;
        }
    },

    displayVictory(player) {
        if (player == this.playerAI) {
            AITitle.textContent = 'AI wins!';
        } else if (player == this.playerUser) {
            userTitle.textContent = 'you win!';
        }
    },

    AIAttackUser() {
        function randomInt() {
            return Math.floor(Math.random() * 10);
        }
        let randomRow = randomInt();
        let randomCol = randomInt();
        let target = this.playerUser.board.grid[randomRow][randomCol];

        if (target == 'H' || target == 'M') {
            this.AIAttackUser();
        } else {
            this.playerUser.board.receiveAttack(randomRow, randomCol);
            this.updateCell(randomRow, randomCol, this.playerUser);
            this.activePlayer = this.playerUser;
        }
    },

    placeAndRenderShip(event) {
        const shipName = event.target.getAttribute('data-ship');
        const shipIndex = event.target.getAttribute('data-index');
        const ship = this.playerUser.board.ships[shipIndex];

        const row = (parseInt(document.querySelector(`.ship-row.${shipName}`).value, 10))-1;
        const column = (parseInt(document.querySelector(`.ship-column.${shipName}`).value, 10))-1;
        const direction = document.querySelector(`.ship-direction.${shipName}`).value;

        this.playerUser.board.placeShip(ship, row, column, direction);

        if (direction == 'horizontal') {
            for (let i = 0; i < ship.length; i++) {
                this.updateCell(row, column + i, this.playerUser);
            }
        } else if (direction == 'vertical') {
            for (let i = 0; i < ship.length; i++) {
                this.updateCell(row + i, column, this.playerUser);
            }
        }

        const submitBtn = document.querySelector(`.ship-submit[data-ship="${shipName}"`);
        // submitBtn.removeEventListener('click', handleSubmitClick);
    },

}

function handleSubmitClick(event) {
    gameUI.placeAndRenderShip(event);
}

shipButtons.forEach(button => {
    button.addEventListener('click', handleSubmitClick);
});


gameUI.initializeGame();

function randomShip(board, shipObject) {
    const randomInt = Math.floor(Math.random() * 10) + 1;
    const directions = ['horizontal', 'vertical'];
    const randomDirection = directions[Math.floor(Math.random() * directions.length)];
    board.placeShip(shipObject, randomInt, randomInt, randomDirection);
}

gameUI.playerAI.AIPlaceShips();
console.log(gameUI.playerAI.board);


console.log('hello world 7')


export { gameUI }