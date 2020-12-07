export default class {
    grid;

    constructor(data) {
        this.grid = data;
    }

    get width() {
        return this.grid[0].length;
    }

    get height() {
        return this.grid.length;
    }

    *traverse(right, down) {
        for (let x = 0, y = 0; y < this.height; x = (x + right) % this.width, y += down) {
            yield this.grid[y][x];
        }
    }
}
