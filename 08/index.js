import parser from './parser.js';
import Command from './command.js';
import Program from "./program.js";

const commands = await parser(process.argv[2]);

const program = new Program(commands);

try {
    const result = program.run();
    console.log(`Accumulator value: ${result}`);
} catch (err) {
    console.log(`${err}.\nAccumulator value before error: ${program.accumulator}`);
}

for (let line of program.steps) {
    const clone = commands.map((command, currentIndex) => {
        if (currentIndex !== line || command.instruction === 'acc') return command;

        if (command.instruction === 'nop') return new Command('jmp', command.argument);
        if (command.instruction === 'jmp') return new Command('nop', command.argument);
    })

    const program = new Program(clone);

    try {
        const result = program.run();
        console.log(`Accumulator value: ${result}`);
    } catch (err) {
    }
}
