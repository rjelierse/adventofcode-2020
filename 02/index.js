import parser from './parser.js';
import {countValidator, positionValidator} from './validators.js';

const validators = await parser(process.argv[2]);

const solution1 = validators
    .filter(([[minCount, maxCount, requiredChar], password]) => countValidator(minCount, maxCount, requiredChar)(password))
    .length;

console.log(`Found ${solution1} valid passwords for first policy`);

const solution2 = validators
    .filter(([[firstPos, secondPos, requiredChar], password]) => positionValidator(firstPos, secondPos, requiredChar)(password))
    .length;

console.log(`Found ${solution2} valid passwords for second policy`);
