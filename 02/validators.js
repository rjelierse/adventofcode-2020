export const countValidator = (minCount, maxCount, requiredChar) => value => {
    const count = value.split('').filter(char => char === requiredChar).length;

    return count >= minCount && count <= maxCount;
};

export const positionValidator = (firstPos, secondPos, requiredChar) => value => {
    const firstChar = value.charAt(firstPos - 1), secondChar = value.charAt(secondPos - 1);

    if (firstChar === requiredChar && secondChar === requiredChar) return false;

    return firstChar === requiredChar || secondChar === requiredChar;
};
