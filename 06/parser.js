import reader from '../x/reader.js';

export default async path => reader(path)
    .then(data => data
        .split('\n\n')
        .map(group => group
            .split('\n')
            .map(person => person.split(''))
        )
    );
