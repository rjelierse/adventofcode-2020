import parser from './parser.js';
import {numberBetween, height, hexColor, eyeColor, passportId, alwaysValid} from './validators.js';

const passports = await parser(process.argv[2]);

const fields = [
    {name: 'byr', required: true, validator: numberBetween(1920, 2002)},
    {name: 'iyr', required: true, validator: numberBetween(2010, 2020)},
    {name: 'eyr', required: true, validator: numberBetween(2020, 2030)},
    {name: 'hgt', required: true, validator: height},
    {name: 'hcl', required: true, validator: hexColor},
    {name: 'ecl', required: true, validator: eyeColor},
    {name: 'pid', required: true, validator: passportId},
    {name: 'cid', required: false, validator: alwaysValid},
];

const hasFields = passport => fields.every(({name, required}) => passport.has(name) || !required);
const validateFields = passport => fields.every(({name, validator}) => validator(passport.get(name)))

const solution1 = passports.filter(hasFields);
console.log(`Data contains ${solution1.length} passports with required fields`);

const solution2 = solution1.filter(validateFields);
console.log(`Data contains ${solution2.length} passports with valid fields`);
