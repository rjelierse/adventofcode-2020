import reader from '../x/reader.js';
import Bag from './bag.js';

export default async path => reader(path)
    .then(data => data
        .split('\n')
        .map(line => Bag.fromDescription(line))
    );
