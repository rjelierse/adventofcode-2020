import parser from './parser.js';

const data = await parser(process.argv[2]);

const groupAnswers = data
    .map(group => group
        .flat()
        .reduce((store, answer) => {store[answer] = 1; return store}, {})
    )
    .map(store => Object.keys(store));

const solution1 = groupAnswers
    .reduce((sum, answers) => sum + answers.length, 0);

console.log(`The sum of questions answered with yes for any member of a group is ${solution1}`);

const solution2 = groupAnswers
    .reduce(
        (sum, allAnswers, i) =>  sum + allAnswers
            .filter(answer => data[i].every(answers => answers.find(v => v === answer)))
            .length,
        0
    );

console.log(`The sum of questions answered with yes for all members of a group is ${solution2}`);
