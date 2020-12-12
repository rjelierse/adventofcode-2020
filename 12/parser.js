import reader from '../x/reader.js';

class Instruction {
    action; value;

    static fromLine(line) {
        const [action, ...value] = line.split('');

        return new Instruction(action, parseInt(value.join(''), 10));
    }

    constructor(action, value) {
        this.action = action;
        this.value = value;
    }
}

export default async path => reader(path).then(data => data.split('\n').map(line => Instruction.fromLine(line)));
