////05. Check for Symmetry ////////////////////////

const { expect } = require('chai');
const isSymmetric = require('./symmetryCheck');

describe('returns true for valid symmetric input', () => {
    it('it works valid input', () => {
        expect(isSymmetric([1, 1])).to.true
    })

    it('returns false for valid non-symmetric input', () => {
        expect(isSymmetric([1, 2])).to.be.false
    })

    it('returns false for invalid argument', () => {
        expect(isSymmetric('a')).to.be.false
    })

    // test overloading

    it('returns true for valid symmetric odd-element array', () => {
        expect(isSymmetric([1, 1, 1])).to.be.true
    })

    it('returns true for valid symmetric string array', () => {
        expect(isSymmetric(['а', 'а'])).to.be.true
    })

    it('returns false for valid non-symmetric string array', () => {
        expect(isSymmetric(['a', 'b'])).to.be.false
    })

    it('returns false number and string', () => {
        expect(isSymmetric([1, '1'])).to.be.false
    })
})