////04. Sum of Numbers /////////////////////////////

const { expect } = require('chai');
const sum = require('./sumNumbers');

describe('Sum numbers', () => {

    it('Sums single number', () => {
        expect(sum([1])).to.equal(1)
    });

    it('Sums multiple numbers', () => {
        expect(sum([1,1])).to.equal(2)
    });

    it('Sums different numbers', () => {
        expect(sum([1,2,3])).to.equal(6)
    });
})