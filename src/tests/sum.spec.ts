import sum from '../sum';

describe('testing function sum array numbers', () => {
    test('sum function', () => { 
        expect(sum([10,10,80])).toBe(100);
    });
});