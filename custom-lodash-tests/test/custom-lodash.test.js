const _ = require('./../js/custom-lodash.js');

describe("CustomLodash: ", () => {

    /** 
     * 
     * @function _.chunk(array, [size=1])
     * @param {Array} array The array to process.
     * @param {number} [size=1] The length of each chunk
     * @returns {Array} Returns the new array of chunks.
     * 
     */

    describe("_.chunk ", () => {
        
        it("should create an array of elements split into groups the length of size", () => {
            expect(_.chunk(['a', 'b', 'c', 'd'], 2)).toEqual([['a', 'b'], ['c', 'd']]); 
            expect(_.chunk(['a', 'b', 'c', 'd', 'e', 'f'], 2)).toEqual([['a', 'b'], ['c', 'd'], ['e', 'f']]);
        });

        it(": if array can't be split evenly, the final chunk should contain the remaining elements", () => {
            expect(_.chunk(['a', 'b', 'c', 'd'], 3)).toEqual([['a', 'b', 'c'], ['d']]);
            expect(_.chunk(['a', 'b', 'c', 'd'], 5)).toEqual([['a', 'b', 'c', 'd']]); 
        });

        it(": if size is omitted, the size should be 1", () => {
            expect(_.chunk(['a', 'b', 'c', 'd'])).toEqual([['a'], ['b'], ['c'], ['d']]);
        });

        it(": if size < 0, method should return an empty array", () => {
            expect(_.chunk(['a', 'b', 'c', 'd'], -2)).toEqual([]);
        });

        it(": if first param is not an array, method should throw an error", () => {
            expect(() => _.chunk(1024, 5)).toThrow();
            expect(() => _.chunk({user: 'barney'}, 5)).toThrow();
        });

        // --> Infinity Loop
        xit(": if size = 0, method should return an empty array", () => {
            expect(_.chunk(['a', 'b', 'c', 'd'], 0)).toEqual([]);
        });
    });
    
});
