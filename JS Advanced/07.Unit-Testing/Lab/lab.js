//01. Sub Sum //////////////////////////////////////////////////////////

function solve(arr, start, end) {

    if (!Array.isArray(arr)) {
        return NaN;
    }

    if (start < 0) {
        start = 0;
    }

    if (end > arr.length - 1) {
        end = arr.length - 1;
    }

    let result = arr.slice(start, end + 1).reduce((a, c) => Number(a) + Number(c), 0)
    return result
}

console.log(solve([10, 20, 30, 40, 50, 60], 3, 300))
console.log(solve([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1))
console.log(solve([10, 'twenty', 30, 40], 0, 2))
console.log(solve([], 1, 2))
console.log(solve('text', 0, 2))




//02. Playing Cards //////////////////////////////////////////////////////////

function factory(face, suits) {

    const validFaces = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A']

    if (!validFaces.includes(face)) {
        throw new Error('Invalid face');
    }

    const validSuits = {
        'S': '\u2660',
        'H': '\u2665',
        'D': '\u2666',
        'C': '\u2663'
    }

    let keys = Object.keys(validSuits);

    if (!keys.includes(suits)) {
        throw new Error('Invalid suits')
    }

    let obj = {
        face,
        suits,
        toString() {
            return `${face}${validSuits[suits]}`
        }
    }
    return obj;
}

// let func = factory('A', 'S')
// console.log(func.toString())



//03. Deck of Cards ////////////////////////////////////////////////////////////////

function printDeckOfCards(cards) {

    function createCard(face, suits) {

        const validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']

        if (!validFaces.includes(face)) {
            throw new Error('Invalid face');
        }

        const validSuits = {
            'S': '\u2660',
            'H': '\u2665',
            'D': '\u2666',
            'C': '\u2663'
        }

        let keys = Object.keys(validSuits);

        if (!keys.includes(suits)) {
            throw new Error('Invalid suits')
        }

        return {
            face,
            suits,
            toString() {
                return `${face}${validSuits[suits]}`
            }
        }

    }

    let result = []
    let str = '';
    for (let card of cards) {
        let face = card.slice(0, card.length - 1);
        let suit = card.slice(card.length - 1)
        let obj;
        let isTrue = true;
        try {
            obj = createCard(face, suit)

        } catch (e) {
            if (e) {
                str = `Invalid card: ${card}`;
                isTrue = false;
            }
        }
        if (!isTrue) {
            result = [];
            result.push(str)
        } else {
            result.push(obj)
        }
    }
    if (result.length > 1) {
        console.log(result.map(obj => obj.toString()).join(" "))
    } else {
        console.log(result[0]);
    }
}
printDeckOfCards(['AS', '10D', 'KH', '2C'])
printDeckOfCards(['5S', '3D', 'QD', '1C']);




// 04. Sum of Numbers /////////////////////////////////////////////////////////

const { describe } = require('mocha');
const { assert } = require('chai');

function sum(arr) {
    let sum = 0;
    for (let num of arr) {
        sum += Number(num);

    }
    return sum;
}

describe('sumOfNumbers', () => {
    it('testing with numbers', () => {
        assert.equal(sum([1, 2, 3]), 6)
    })

    it('one of components is not a number', () => {
        assert.isNaN(sum(['as', 5]))
    })

    it('one argument', () => {
        assert.equal(sum([5]), 5)
    })

})




// 05. Check for Symmetry ///////////////////////////////////////////////////////////////

const { describe } = require('mocha');
const { assert } = require('chai');

function isSymmetric(arr) {
    if (!Array.isArray(arr))
        return false; // Non-arrays are non-symmetric 
    let reversed = arr.slice(0).reverse(); // Clone and reverse 
    let equal = (JSON.stringify(arr) == JSON.stringify(reversed));
    return equal;
}

describe('Check for Symmetry', () => {
    it('returning false if not an Array', () => {
        assert.equal(isSymmetric('hey'), false)
        assert.equal(isSymmetric(NaN), false)

    })

    it('returning false if any input is not of correct type', () => {
        assert.isFalse(isSymmetric([2, 'b', NaN, {}]))
        assert.isFalse(isSymmetric({}))
    })

    it('works with an empty array', () => {
        assert.isTrue(isSymmetric([]))
    })

    it('returning true with numbers', () => {
        assert.isTrue(isSymmetric([4, 4]))
        assert.isTrue(isSymmetric([-1, 1, -1]))
    })

    it('returning true with string', () => {
        assert.isTrue(isSymmetric(['a', 'a']))
    })

    it('returning false with string', () => {
        assert.isFalse(isSymmetric(['a', 'b']))
    })

    it('returning false with non-symmetric nums', () => {
        assert.isFalse(isSymmetric([1, 5, 7]))
    })

    it('returning false with different types of input', () => {
        assert.isFalse(isSymmetric([1, '1']))
    })
})




//06. RGB to HEX //////////////////////////////////////////////

const { describe } = require('mocha');
const { assert } = require('chai');

function rgbToHexColor(red, green, blue) {
    if (!Number.isInteger(red) || (red < 0) || (red > 255))
        return undefined; // Red value is invalid 
    if (!Number.isInteger(green) || (green < 0) || (green > 255))
        return undefined; // Green value is invalid 
    if (!Number.isInteger(blue) || (blue < 0) || (blue > 255))
        return undefined; // Blue value is invalid 
    return "#" +
        ("0" + red.toString(16).toUpperCase()).slice(-2) +
        ("0" + green.toString(16).toUpperCase()).slice(-2) +
        ("0" + blue.toString(16).toUpperCase()).slice(-2);
}

describe('rgbToHexColor', () => {
    it('checks if Red is invalid', () => {
        assert.isUndefined(rgbToHexColor('str', 1, 1));
        assert.isUndefined(rgbToHexColor(NaN, 1, 1));
        assert.isUndefined(rgbToHexColor(undefined, 1, 1));
        assert.isUndefined(rgbToHexColor(-1, 1, 1));
        assert.isUndefined(rgbToHexColor(256, 1, 1));
        assert.isUndefined(rgbToHexColor(null, 1, 1));
    })

    it('checks if Green is invalid', () => {
        assert.isUndefined(rgbToHexColor(10, 'string', 1));
        assert.isUndefined(rgbToHexColor(2, NaN, 1));
        assert.isUndefined(rgbToHexColor(1, undefined, 1));
        assert.isUndefined(rgbToHexColor(1, -1, 1));
        assert.isUndefined(rgbToHexColor(2, 1212, 1));
        assert.isUndefined(rgbToHexColor(2, null, 1));
    })

    it('checks if Blue is invalid', () => {
        assert.isUndefined(rgbToHexColor(1, 1, 'str'));
        assert.isUndefined(rgbToHexColor(1, 1, NaN));
        assert.isUndefined(rgbToHexColor(1, 1, undefined));
        assert.isUndefined(rgbToHexColor(1, 1, -1));
        assert.isUndefined(rgbToHexColor(1, 1, 258));
        assert.isUndefined(rgbToHexColor(1, 1, null));
    })

    it('check for red', () => {
        assert.equal(rgbToHexColor(255, 0, 0), '#FF0000');
        assert.equal(rgbToHexColor(252, 3, 102), '#FC0366');
    })

    it('check if green', () => {
        assert.equal(rgbToHexColor(0, 255, 0), '#00FF00')
        assert.equal(rgbToHexColor(13, 224, 13), '#0DE00D')
    })

    it('check if blue', () => {
        assert.equal(rgbToHexColor(0, 0, 255), '#0000FF')
        assert.equal(rgbToHexColor(31, 13, 224), '#1F0DE0')
    })
})




//07. Add / Subtract ///////////////////////////////////////////////////

const { describe } = require('mocha');
const { assert } = require('chai');

function createCalculator() {
    let value = 0;
    return {
        add: function (num) { value += Number(num); },
        subtract: function (num) { value -= Number(num); },
        get: function () { return value; }
    }
}

describe('Add/Subtract', () => {
    it('check for object properties', () => {
        let func = createCalculator()
        assert.equal(func.hasOwnProperty('add'), true)
        assert.equal(func.hasOwnProperty('subtract'), true)
        assert.equal(func.hasOwnProperty('get'), true)
        assert.typeOf(func.add, 'function')
        assert.typeOf(func.subtract, 'function')
        assert.typeOf(func.get, 'function')
    })

    it('adding', () => {
        let func = createCalculator();
        func.add(2)
        assert.equal(func.get(), 2)
        func.add('4')
        assert.equal(func.get(), 6)
    })

    it('subtracting', () => {
        let func = createCalculator();
        func.subtract(2)
        assert.equal(func.get(), -2)
        func.subtract('4')
        assert.equal(func.get(), -6)
    })
})