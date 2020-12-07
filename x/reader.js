import fs from 'fs';

export default async path => new Promise(
    (resolve, reject) => fs.readFile(
        path,
        (err, data) => err ? reject(err) : resolve(data.toString().trim())
    )
);
