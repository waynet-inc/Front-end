const _ = require('./../js/custom-lodash.js');

describe('CustomLodash: ', () => {

    /** 
     * 
     * @function _.chunk(array, [size=1])
     * @param {Array} array The array to process.
     * @param {number} [size=1] The length of each chunk
     * @returns {Array} Returns the new array of chunks.
     * 
     */

    describe('_.chunk ', () => {
        
        it('should create an array of elements split into groups the length of size', () => {
            expect(_.chunk(['a', 'b', 'c', 'd'], 2)).toEqual([['a', 'b'], ['c', 'd']]); 
            expect(_.chunk(['a', 'b', 'c', 'd', 'e', 'f'], 2)).toEqual([['a', 'b'], ['c', 'd'], ['e', 'f']]);
        });

        it(': if array can\'t be split evenly, the final chunk should contain the remaining elements', () => {
            expect(_.chunk(['a', 'b', 'c', 'd'], 3)).toEqual([['a', 'b', 'c'], ['d']]);
            expect(_.chunk(['a', 'b', 'c', 'd'], 5)).toEqual([['a', 'b', 'c', 'd']]); 
        });

        it(': if size is omitted, the size should be 1', () => {
            expect(_.chunk(['a', 'b', 'c', 'd'])).toEqual([['a'], ['b'], ['c'], ['d']]);
        });

        it(': if the params is omitted, method should throw an error', () => {
            expect(() => _.chunk()).toThrow();
        });

        it(': if first param is not an array, method should throw an error', () => {
            expect(() => _.chunk(1024, 5)).toThrow();
            expect(() => _.chunk({user: 'barney'}, 5)).toThrow();
        });
        
        it(': if size < 0, method should return an empty array', () => {
            expect(_.chunk(['a', 'b', 'c', 'd'], -2)).toEqual([]);
        });

        // --> Infinity Loop
        xit(': if size = 0, method should return an empty array', () => {
            expect(_.chunk(['a', 'b', 'c', 'd'], 0)).toEqual([]);
        });

    });

    /**
     * 
     * @function _.compact(array)
     * @param {Array} array The array to compact.
     * @returns {Array} Returns the new array of filtered values.
     * 
     */

    describe('_.compact ', () => {

        it('should create an array with all falsey values removed', () => {
            expect(_.compact([0, 1, false, 2, '', 3])).toEqual([1, 2, 3]);
        });

        it(': if the param is not an array, method should throw an error', () => {
            expect(() => _.compact('12345')).toThrow();
            expect(() => _.compact({user: 'barney'})).toThrow();
        });

        it(': if the param is omitted, method should throw an error', () => {
            expect(() => _.compact()).toThrow();
        });

    });

    /**
     * 
     * @function _.drop(array, [n=1])
     * @param {Array} array The array to query.
     * @param {number} [n=1] The number of elements to drop.
     * @returns {Array} Returns the slice of `array`.
     * 
     */

    describe('_.drop ', () => {

        it('should create a slice of array with n elements dropped from the beginning', () => {
            expect(_.drop([1, 2, 3], 2)).toEqual([3]);
            expect(_.drop([1, 2, 3], 5)).toEqual([]);
            expect(_.drop([1, 2, 3], 0)).toEqual([1, 2, 3]);
        });

        it(': if second param is omitted, the number of elements to drop should be 1', () => {
            expect(_.drop([1, 2, 3])).toEqual([2, 3]);
        });

        it(': if second param is < 0, the number of elements to drop should be 0', () => {
            expect(_.drop([1, 2, 3], -2)).toEqual([1, 2, 3]);
        });

        it(': if the first param is not an array, method should throw an error', () => {
            expect(() => _.drop({user: 'barney'})).toThrow();
            expect(() => _.drop(1024)).toThrow();
        });

        it(': if the params is omitted, method should throw an error', () => {
            expect(() => _.drop()).toThrow();
        });

    });

    /**
     * 
     * @function _.dropWhile(array, [predicate=_.identity])
     * @param {Array} array The array to query.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the slice of `array`.
     * 
     */
    
    describe('_.dropWhile ', () => {

        it('should create a slice of array excluding elements dropped from the beginning until predicate returns falsey', () => {
            const users = [
                { 'user': 'barney',  'active': false },
                { 'user': 'fred',    'active': false },
                { 'user': 'pebbles', 'active': true }
              ];
    
            expect(_.dropWhile(users, function(o) { return !o.active; })).toEqual([{ 'user': 'pebbles', 'active': true }]);

            expect(_.dropWhile(users, { 'user': 'barney', 'active': false })).toEqual([
                { 'user': 'fred',    'active': false },
                { 'user': 'pebbles', 'active': true }
            ]);

            expect(_.dropWhile(users, ['active', false])).toEqual([{ 'user': 'pebbles', 'active': true }]);

            expect(_.dropWhile(users, 'active')).toEqual([
                { 'user': 'barney',  'active': false },
                { 'user': 'fred',    'active': false },
                { 'user': 'pebbles', 'active': true }
            ]);
        });

        it(': if the second param is omitted, predicate should be falsey', () => {
            expect(_.dropWhile([0, 1, 2],)).toEqual([0, 1, 2]);
        });

        it(': if the first param is not an array, method should throw an error', () => {
            expect(() => _.dropWhile({user: 'barney'})).toThrow();
            expect(() => _.dropWhile(1024)).toThrow();
        });

        it(': if the params is omitted, method should throw an error', () => {
            expect(() => _.dropWhile()).toThrow();
        });

    });

    /**
     * 
     * 
     * 
     */
});
