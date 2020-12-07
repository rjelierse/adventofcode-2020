import reader from '../x/reader.js';

export default async path => reader(path)
    .then(data => data
        .split('\n\n')
        .map(data => data
            .split(/\s+/)
            .map(field => field.split(':'))
        )
        .map(fields => new Map(fields))
    );
