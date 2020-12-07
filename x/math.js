export const sum = (...numbers) => numbers.reduce((carry, current) => carry === 0 ? current : current + carry, 0);
export const product = (...numbers) => numbers.reduce((carry, current) => carry === 0 ? current : current * carry, 0);
