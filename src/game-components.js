class Ship {
    constructor(length) {
        this.length = length;
        this.hitCount = 0;
        this.sunkStatus = this.isSunk();
    };

    hit() {
        this.hitCount++;
        this.sunkStatus = this.isSunk();
    }

    isSunk() {
        return this.hitCount >= this.length;
    }
}

class Gameboard { // 10x10 grid
    constructor() {
        this.grid = this.initializeGrid();
        this.ships = [];
    }

    initializeGrid() {
        const size = 10;
        const grid = new Array(size);
        for (let i = 0; i < size; i++) {
            grid[i] = new Array(size);
            for (let j = 0; j < size; j++) {
                grid[i][j] = null;
            }
        }
        return grid;
    }

    placeShip(shipObject, xCoord, yCoord, direction) {
        xCoord = xCoord - 1;
        yCoord = yCoord - 1;
        const length = shipObject.length;
        this.ships.push(shipObject);

        if (direction == 'horizontal') {
            if (xCoord + length > 10) {
                return 'error - ship cannot be placed outside of bounds of the gameboard';
            } else {
                this.grid[yCoord][xCoord] = shipObject;
                for (let i = 0; i < length; i++) {
                    this.grid[yCoord][xCoord + i] = shipObject;
                }
            }
        } 
        
        else if (direction == 'vertical') {
            if (yCoord + length > 10) {
                return 'error - ship cannot be placed outside of bounds of the gameboard';
            } else {
                this.grid[yCoord][xCoord] = shipObject;
                for (let i = 0; i < length; i++) {
                    this.grid[yCoord + i][xCoord] = shipObject;
                }
            }
        }

        return this.grid;
    }

    receiveAttack(xCoord, yCoord) {
        xCoord = xCoord - 1;
        yCoord = yCoord - 1;

        if (this.grid[yCoord][xCoord] == 'M' || this.grid[yCoord][xCoord] == 'H') { // if already hit or missed
            return 'error - coordinate already marked'
        }
        
        else if (this.grid[yCoord][xCoord] == null) {
            this.grid[yCoord][xCoord] = 'M'; // M = miss
        } 

        else {
            this.grid[yCoord][xCoord].hit();
            this.grid[yCoord][xCoord] = 'H'; // H = hit
        }
        
        return this.grid;
    }

    areShipsSunk() {
        let counter = 0;
        this.ships.forEach((ship) => {
            if (ship.sunkStatus) {
                counter++;
            }
        })
        return counter == this.ships.length;
    }
}

class Player {
    constructor(type) {
        this.type = type;
        this.board = new Gameboard;
    }
}

const playerOne = new Player('real');
console.log(playerOne);

module.exports = {
    Ship, Gameboard
}