import parser from './parser.js';
import {ProgramV1, ProgramV2} from './program.js';

const instructions = await parser(process.argv[2]);
const program = new ProgramV1();

instructions.forEach(instruction => program.apply(instruction));

console.log(`Sum of values in memory is ${program.getSum()}`);

const dock = new ProgramV2();

instructions.forEach(instruction => dock.apply(instruction));

console.log(`Sum of values in memory for v2 is ${dock.getSum()}`);
