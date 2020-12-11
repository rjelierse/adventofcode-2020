export default class Grid {
    grid;

    constructor(data = []) {
        this.grid = data;
    }

    get width() {
        if (this.grid[0] === undefined) return 0;

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

    get(x, y, notSet = null) {
        if (x < 0 || y < 0) return notSet;

        if (this.grid[y] === undefined) return notSet;

        return this.grid[y][x] || notSet;
    }

    set(x, y, value) {
        if (x < 0 || y < 0) return;

        if (this.grid[y] === undefined) this.grid[y] = [];

        this.grid[y][x] = value;
    }

    equals(other) {
        if (this.width !== other.width || this.height !== other.height) return false;

        for (let x = 0; x < this.width; x++) {
            for (let y = 0; y < this.height; y++) {
                if (this.grid[y][x] !== other.grid[y][x]) return false;
            }
        }

        return true;
    }

    toArray() {
        return this.grid.flat();
    }
}
