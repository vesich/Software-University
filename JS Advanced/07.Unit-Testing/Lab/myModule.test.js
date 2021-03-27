const { sum } = require('./myModule');
const { expect } = require('chai');

describe('Sum function', () => {
    it('works', () => {
        expect(sum(1, 2)).to.equal(3)
    })

    it('fails with invalid values', () => {
        expect(sum('a', 'a')).to.be.NaN
    })
})




// expect(func()).to.equal(value)
// assert(func(), value)