const input = (process.argv[2] ?? '0,3,6').split(',').map(v => parseInt(v, 10));
const max = parseInt(process.argv[3] ?? '2020', 10);

const memory = new class Memory {
    input;
    positions;
    iterations;

    constructor(input, iterations) {
        this.positions = new Array(iterations);
        this.input = input;
        this.iterations = iterations;

        input.forEach((value, index) => {
            this.positions[value] = index + 1;
        });
    }

    run() {
        let next = 0;

        for (let turn = input.length + 1; turn < this.iterations; turn++) {
            const current = next, position = this.positions[current] ?? 0;

            next = position > 0 ? turn - position : 0;

            this.positions[current] = turn;
        }

        return next;
    }
}(input, max);

console.log(`Number after ${max} iterations is ${memory.run()}`);
