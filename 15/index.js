const input = (process.argv[2] ?? '0,3,6').split(',').map(v => parseInt(v, 10));
const max = parseInt(process.argv[3] ?? '2020', 10);

const memory = new class Memory {
    lastNumber;
    positions = new Map();

    constructor(input) {
        input.forEach((value, index) => {
            this.registerPosition(value, index + 1);
        });
    }

    registerPosition(value, position) {
        let positions = this.getPositions(value);
        positions.push(position);

        if (positions.length > 2) positions = positions.slice(positions.length - 2);

        this.lastNumber = value;
        this.positions.set(value, positions);
    }

    getPositions(value) {
        return this.positions.has(value) ? this.positions.get(value) : [];
    }
}(input);

for (let i = input.length + 1; i <= max; i++) {
    const positions = memory.getPositions(memory.lastNumber);

    if (positions.length < 2) memory.registerPosition(0, i);
    else memory.registerPosition(positions[1] - positions[0], i);
}

console.log(`Number after ${max} iterations is ${memory.lastNumber}`);
