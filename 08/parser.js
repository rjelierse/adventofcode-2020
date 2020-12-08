import reader from '../x/reader.js';
import Command from './command.js';

export default async path => reader(path)
    .then(data => data
        .split('\n')
        .map(line => line.split(' '))
        .map(([instruction, arg]) => new Command(instruction, arg))
    );
