import reader from '../x/reader.js';
import BoardingPass from './boardingPass.js';

export default async path => reader(path)
    .then(data => data.split('\n'))
    .then(lines => lines.map(line => BoardingPass.fromPass(line)));
