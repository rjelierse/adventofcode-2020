import {sum} from '../x/math.js';

const MASK_LENGTH = 36;

export const CMD_SET_MASK = 'setMask';
export const CMD_SET_VALUE = 'setValue';

class Program {
    mask = new Map();
    memory = new Map();

    apply(instruction) {
        switch (instruction.cmd) {
            case CMD_SET_MASK:
                return this.setMask(instruction.mask);
            case CMD_SET_VALUE:
                return this.setValue(instruction.addr, instruction.value);
            default:
                throw new Error(`Unsupported command ${instruction.cmd}`);
        }
    }

    setMask(mask) {
        this.mask.clear();

        mask.split('').forEach((v, i) => this.mask.set(i, v));
    }

    getSum() {
        return sum(...this.memory.values())
    }
}

const intToBitArray = number => number.toString(2).padStart(MASK_LENGTH, '0').split('');
const bitArrayToInt = values => parseInt(values.join(''), 2);

export class ProgramV1 extends Program {
    setValue(address, value) {
        value = intToBitArray(value)
            .map((v, i) => {
                const bit = this.mask.get(i);
                return bit === 'X' ? v : bit;
            })

        this.memory.set(address, bitArrayToInt(value));
    }
}

export class ProgramV2 extends Program {
    setValue(address, value) {
        const addresses = intToBitArray(address)
            .reduce(
                (addresses, value, index) => addresses.flatMap(address => this.getAddressMutations(address, value, index)),
                [''],
            )
            .map(address => parseInt(address, 2));

        addresses.forEach(address => this.memory.set(address, value));
    }

    getAddressMutations(address, value, index) {
        switch (this.mask.get(index)) {
            case '0':
                return [address + value];
            case '1':
                return [address + '1'];
            case 'X':
                return [address + '0', address + '1'];
        }
    }
}
