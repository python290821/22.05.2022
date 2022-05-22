
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
    it('basic div 12 - 4 == 8', () => {
        actual_result = calc.min(12, 4)
        expected_result = 8;
        expect(expected_result).to.equal(actual_result)
    });    
    it('basic div 12 / 4 == 3', () => {
        actual_result = calc.div(12, 4)
        expected_result = 3;
        expect(expected_result).to.equal(actual_result)
    });
    it('basic div 12 / 0 will throw error', () => {
        expect(() => { calc.div(12, 0) }).to.throw('Cannot divide by zero!')
    });        
})


