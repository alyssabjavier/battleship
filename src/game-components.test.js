const { experiments } = require('webpack');
const { Ship, Gameboard } = require('./game-components');

describe('Ship', () => {
    test('hit method increases hitCount', () => {
        const ship = new Ship(3);
        expect(ship.hitCount).toBe(0);

        ship.hit();
        expect(ship.hitCount).toBe(1);

        ship.hit();
        expect(ship.hitCount).toBe(2);
    });

    test('ships sunk status updates correctly', () => {
        const ship = new Ship(2);
        ship.hit();
        expect(ship.sunkStatus).toBeFalsy();

        ship.hit();
        expect(ship.sunkStatus).toBeTruthy();
    })
})

describe('Gameboard', () => {
    test('initializeGrid creates 10x10 grid', () => {
        const gameboard = new Gameboard;
        const expectedBoard = [
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null]
        ];
        expect(gameboard.grid).toEqual(expectedBoard);
    })

    test('place ship on gameboard horizontally', () => {
        const gameboard = new Gameboard;
        const ship = new Ship(3);
        const expectedBoard = [
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, ship, ship, ship, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null]
        ];
        expect(gameboard.placeShip(ship, 5, 5, 'horizontal')).toEqual(expectedBoard);
    })

    test('place ship on gameboard vertically', () => {
        const gameboard = new Gameboard;
        const ship = new Ship(3);
        const expectedBoard = [
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, ship, null, null, null, null, null],
            [null, null, null, null, ship, null, null, null, null, null],
            [null, null, null, null, ship, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null]
        ];
        expect(gameboard.placeShip(ship, 5, 5, 'vertical')).toEqual(expectedBoard);
    })

    test('ship cannot be placed out of bounds', () => {
        const gameboard = new Gameboard;
        const ship = new Ship(3);
        expect(gameboard.placeShip(ship, 9, 9, 'horizontal')).toEqual('error - ship cannot be placed outside of bounds of the gameboard')
    })

    test('cannot attack already marked spot', () => {
        const gameboard = new Gameboard;
        gameboard.grid[0][0] = 'M';
        expect(gameboard.receiveAttack(1,1)).toEqual('error - coordinate already marked')
    })

    test('if null spot is attacked, mark as miss(M)', () => {
        const gameboard = new Gameboard;
        const ship = new Ship(3);
        const expectedBoard = [
            [null, null, null, null, null, null, null, null, null, null],
            [null, 'M', null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null]
        ];
        expect(gameboard.receiveAttack(2,2)).toEqual(expectedBoard);
    })

    test('if ship is attacked, mark as hit(M)', () => {
        const gameboard = new Gameboard;
        const ship = new Ship(3);
        gameboard.placeShip(ship, 5, 5, 'horizontal');
        const expectedBoard = [
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, ship, 'H', ship, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null]
        ];
        expect(gameboard.receiveAttack(6,5)).toEqual(expectedBoard);
    })

    test('if ship attacked, hitCount should increase', () => {
        const gameboard = new Gameboard;
        const ship = new Ship(3);
        gameboard.placeShip(ship, 5, 5, 'horizontal');
        gameboard.receiveAttack(6,5)
        expect(ship.hitCount).toBe(1);
    })

    test('gameboard keeps track of ships and sunk status', () => {
        const gameboard = new Gameboard;
        const ship1 = new Ship(2);
        gameboard.placeShip(ship1, 5, 5, 'horizontal');
        gameboard.receiveAttack(5,5);
        gameboard.receiveAttack(6,5);
        expect(gameboard.areShipsSunk()).toBeTruthy();

        const ship2 = new Ship(2);
        gameboard.placeShip(ship2, 2, 2, 'vertical');
        expect(gameboard.areShipsSunk()).toBeFalsy();
    })
});