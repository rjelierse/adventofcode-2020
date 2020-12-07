export default class BoardingPass {
    row;
    column;

    static fromPass(pass) {
        const row = pass.substr(0, 7).split('').map(v => v === 'F' ? 0 : 1).join(''),
            col = pass.substr(7, 9).split('').map(v => v === 'L' ? 0 : 1).join('');

        return new BoardingPass(parseInt(row, 2), parseInt(col, 2))
    }

    constructor(row, col) {
        this.row = row;
        this.column = col;
    }

    get seatId() {
        return this.row * 8 + this.column;
    }
}
