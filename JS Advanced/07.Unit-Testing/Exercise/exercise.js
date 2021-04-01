// 01. Request Validator //////////////////////////////////////

function solve(object) {

    if (object.method === undefined || !['GET', 'POST', 'DELETE', 'CONNECT'].includes(object.method)) {
        throw new Error(`Invalid request header: Invalid Method`);
    }

    if (object.uri === undefined || !(/^([a-zA-Z0-9\.]+|\*)$/gm).test(object.uri)) {
        throw new Error(`Invalid request header: Invalid URI`);
    }

    if (object.version === undefined || !['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'].includes(object.version)) {
        throw new Error(`Invalid request header: Invalid Version`);
    }



    if (object.message === undefined || !(/^[^<>\\&'"]*$/gm.test(object.message))) {
        throw new Error(`Invalid request header: Invalid Message`);
    }

    return object;
}

console.log(solve({ 

    method: 'GET', 
  
    uri: 'svn.public.catalog', 
  
    version: 'HTTP/1.1', 
  
    message: '' 
  
  } ))




// 02. Even or Odd ///////////////////////////////////////////

const describe = require('mocha').describe;
const assert = require('chai').assert;

function isOddOrEven(string) {
    if (typeof (string) !== 'string') {
        return undefined;
    }
    if (string.length % 2 === 0) {
        return "even";
    }

    return "odd";
}

describe('check isOddOrEven', () => {

    it('Type is string', () => {
        assert.isUndefined(isOddOrEven(1), 'Message a==a')
    })

    it('Is even', () => {
        assert.equal(isOddOrEven('aa'), 'even','Message a==a')
    })

    it('Is odd', () => {
        assert.equal(isOddOrEven('a'), 'odd','Message a==a')
    })
})



// 03. Char Lookup //////////////////////////////////////

const describe = require('mocha').describe;
const assert = require('chai').assert;


function lookupChar(string, index) {
    if (typeof (string) !== 'string' || !Number.isInteger(index)) {
        return undefined;
    }
    if (string.length <= index || index < 0) {
        return "Incorrect index";
    }

    return string.charAt(index);
}

describe('charLookup', () => {

    it('If 1', () => {
        assert.isUndefined(lookupChar(1, 1))
        assert.isUndefined(lookupChar('abc', 1.2))
        assert.isUndefined(lookupChar('abc', 'a'))
    })

    it('If 2', () => {
        assert.equal(lookupChar('vchera', 12), 'Incorrect index')
        assert.equal(lookupChar('vchera', -1), 'Incorrect index')

    })

    it('working case', () => {
        assert.equal(lookupChar('vchera', 4), 'r')
    })
})




// 04. Math Enforcer ///////////////////////////////////////////////

const describe = require('mocha').describe;
const assert = require('chai').assert;

let mathEnforcer = { 
    addFive: function (num) { 
        if (typeof(num) !== 'number') { 
            return undefined; 
        } 
        return num + 5; 
    }, 
    subtractTen: function (num) { 
        if (typeof(num) !== 'number') { 
            return undefined; 
        } 
        return num - 10; 
    }, 
    sum: function (num1, num2) { 
        if (typeof(num1) !== 'number' || typeof(num2) !== 'number') { 
            return undefined; 
        } 
        return num1 + num2; 
    } 
}; 

describe('mathEnforcer', () => {

    describe('add', () => {
        it('is not a number', () => {
            assert.isUndefined(mathEnforcer.addFive('a'));
            assert.isUndefined(mathEnforcer.addFive(undefined));
            //  assert.isNaN(mathEnforcer.addFive(NaN));
        })

        it('adding properly', () => {
            assert.equal(mathEnforcer.addFive(0), 5);
            assert.equal(mathEnforcer.addFive(-5), 0);
            assert.equal(mathEnforcer.addFive(1.2), 6.2);
            assert.equal(mathEnforcer.addFive(1), 6);
        })
    })

    describe('subtract', () => {
        it('is not a number', () => {
            assert.isUndefined(mathEnforcer.subtractTen('a'));
            assert.isUndefined(mathEnforcer.subtractTen(undefined));
        });

        it('subtracting properly', () => {
            assert.equal(mathEnforcer.subtractTen(0), -10);
            assert.equal(mathEnforcer.subtractTen(-5), -15);
            assert.equal(mathEnforcer.subtractTen(1.2), -8.8);
            assert.equal(mathEnforcer.subtractTen(1), -9);
        })
    })

    describe('sum', () => {
        it('undefined', () => {
            assert.isUndefined(mathEnforcer.sum('1', 1));
            assert.isUndefined(mathEnforcer.sum(1, '1'));
        })

        it('works', () => {
            assert.equal(mathEnforcer.sum(1, 1), 2);
            assert.equal(mathEnforcer.sum(1, -1), 0);
            assert.equal(mathEnforcer.sum(1, 0), 1);
            assert.equal(mathEnforcer.sum(-1, -1), -2);
            assert.equal(mathEnforcer.sum(-1.2, -1.3), -2.5);
            assert.equal(mathEnforcer.sum(1.3, -1.2), 0.10000000000000009);

        })
    })
})




//13. Payment Package /////////////////////

const { describe } = require('mocha');
const { assert } = require('chai');

class PaymentPackage {
    constructor(name, value) {
        this.name = name;
        this.value = value;
        this.VAT = 20;      // Default value     
        this.active = true; // Default value 
    }

    get name() {
        return this._name;
    }

    set name(newValue) {
        if (typeof newValue !== 'string') {
            throw new Error('Name must be a non-empty string');
        }
        if (newValue.length === 0) {
            throw new Error('Name must be a non-empty string');
        }
        this._name = newValue;
    }

    get value() {
        return this._value;
    }

    set value(newValue) {
        if (typeof newValue !== 'number') {
            throw new Error('Value must be a non-negative number');
        }
        if (newValue < 0) {
            throw new Error('Value must be a non-negative number');
        }
        this._value = newValue;
    }

    get VAT() {
        return this._VAT;
    }

    set VAT(newValue) {
        if (typeof newValue !== 'number') {
            throw new Error('VAT must be a non-negative number');
        }
        if (newValue < 0) {
            throw new Error('VAT must be a non-negative number');
        }
        this._VAT = newValue;
    }

    get active() {
        return this._active;
    }

    set active(newValue) {
        if (typeof newValue !== 'boolean') {
            throw new Error('Active status must be a boolean');
        }
        this._active = newValue;
    }

    toString() {
        const output = [
            `Package: ${this.name}` + (this.active === false ? ' (inactive)' : ''),
            `- Value (excl. VAT): ${this.value}`,
            `- Value (VAT ${this.VAT}%): ${this.value * (1 + this.VAT / 100)}`
        ];
        return output.join('\n');
    }
}

describe('Payment Package', () => {
    it('Constructor properties', () => {
        let instance = new PaymentPackage("Accounting", 7)
        assert.isTrue(instance.name == "Accounting")
        assert.isTrue(instance.value == 7)
        assert.isTrue(instance.VAT == 20)
        assert.isFalse(instance.active == false)
    })

    it("get/set name", () => {
        let instance2 = new PaymentPackage("Insurance", 8420);
        assert.equal((instance2._name), "Insurance")
        instance2.name = "Pesho";
        assert.equal((instance2.name), "Pesho")
        assert.throw(() => { instance2.name = "" }, 'Name must be a non-empty string')
        assert.throw(() => { instance2.name = 2 }, 'Name must be a non-empty string')
        assert.throw(() => { instance2.name = undefined }, 'Name must be a non-empty string')
        assert.equal(instance2.name = "Ivan", 'Ivan')
    })

    it('get/ set value', () => {
        let instance2 = new PaymentPackage("Insurance", 6200);
        assert.equal(instance2.value, 6200);
        assert.equal(instance2._value, 6200);
        instance2.value = 500
        assert.equal(instance2._value, 500);
        assert.equal(instance2.value = 0, 0);

        assert.throw(() => { instance2.value = "pesho" }, 'Value must be a non-negative number')
        assert.throw(() => { instance2.value = -10 }, 'Value must be a non-negative number')
    })

    it('get/set VAT', () => {
        let instance2 = new PaymentPackage("Insurance", 6200);
        assert.equal(instance2.VAT, 20)
        instance2.VAT = 50
        assert.equal(instance2.VAT, 50)
        assert.equal(instance2.VAT = 21, 21)
        assert.throw(() => { instance2.VAT = "pesho" }, 'VAT must be a non-negative number')
        assert.throw(() => { instance2.VAT = -10 }, 'VAT must be a non-negative number')

    })

    it("get/set active", () => {
        let instance2 = new PaymentPackage("Insurance", 6200);
        assert.equal(instance2.active, true)
        assert.throw(() => { instance2.active = 'string' }, 'Active status must be a boolean');
        assert.equal(instance2.active = false, false)
        assert.throw(() => { instance2.active = 0 }, 'Active status must be a boolean')
    })

    it("toString function", () => {

        function getString(name, value, VAT = 20, active = true) {
            const output = [
                `Package: ${name}` + (active === false ? ' (inactive)' : ''),
                `- Value (excl. VAT): ${value}`,
                `- Value (VAT ${VAT}%): ${value * (1 + VAT / 100)}`
            ];
            return output.join('\n');
        }

        let instance2 = new PaymentPackage("Insurance", 6200);

        assert.equal(instance2.toString(), getString("Insurance", 6200))
        instance2.active = false;
        assert.equal(instance2.toString(), getString("Insurance", 6200, 20, false))
        instance2.VAT = 50
        assert.equal(instance2.toString(), getString("Insurance", 6200, 50, false))
        instance2.name = "peter"
        assert.equal(instance2.toString(), getString("peter", 6200, 50, false))
        instance2.value = 56
        assert.equal(instance2.toString(), getString("peter", 56, 50, false))
    })
})