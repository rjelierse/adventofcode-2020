import parseInput from './parser.js';
import {sum, product} from '../x/math.js';

const numbers = await parseInput(process.argv[2]);

const calcProductWhenSumIs = (expected, numbers) => numbers
    .map(current => product(current, numbers.find(x => sum(current, x) === expected)))
    .find(current => !!current);

console.log(`Got ${numbers.length} numbers as input`);

const solution1 = calcProductWhenSumIs(2020, numbers);

console.log(`Found ${solution1} as product of 2 numbers that add up to 2020`);

const solution2 = numbers
    .map(a => calcProductWhenSumIs(2020 - a, numbers) * a)
    .find(value => !!value);

console.log(`Found ${solution2} as product of 3 numbers that add up to 2020`);
