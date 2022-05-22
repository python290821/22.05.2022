
const calc = require('./calc');
const assert = require('assert')
const expect = require('chai').expect

describe('Test calculator basics', () => {
    it('basic add 1 + 1 == 2', () => {
        actual_result = calc.add(1, 1);
        expected_result = 2;
        assert.strictEqual(actual_result, expected_result)
    });
})

describe('Test calculator basics with chai', () => {
    it('basic mul 3 * 4 == 12', () => {
        actual_result = calc.multiply(3, 4)
        expected_result = 12;
        expect(expected_result).to.equal(actual_result)
    });
})

// test min - assert 
// test div - equal

// npm test
