export const numberBetween = (min, max) => value => value >= min && value <= max;

const heightPattern = /^([0-9]+)(in|cm)$/;
const heightValidators = {
    'in': numberBetween(59, 76),
    'cm': numberBetween(150, 193),
}

export const height = value => {
    const result = heightPattern.exec(value);
    if (result === null) {
        return false;
    }

    const [, height, unit] = result;
    switch (unit) {
        case 'in':
        case 'cm':
            return heightValidators[unit](height);
        default:
            return false;
    }
};

const hexColorPattern = /^#[0-9a-f]{6}$/;

export const hexColor = value => hexColorPattern.test(value);

const validEyeColors = ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'];

export const eyeColor = value => validEyeColors.includes(value);

const passportIdPattern = /^[0-9]{9}$/;

export const passportId = value => passportIdPattern.test(value);

export const alwaysValid = () => true;
