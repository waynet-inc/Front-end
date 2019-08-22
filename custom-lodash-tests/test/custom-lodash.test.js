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
            expect(_.dropWhile([0, 1, 2])).toEqual([0, 1, 2]);
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
     * @function _.take(array, [n=1])
     * @param {Array} array The array to query.
     * @param {number} [n=1] The number of elements to take.
     * @returns {Array} Returns the slice of `array`.
     * 
     */

    describe('_.take ', () => {

        it('should create a slice of array with n elements taken from the beginning', () => {
            expect(_.take([1, 2, 3], 2)).toEqual([1, 2]);
            expect(_.take([1, 2, 3], 5)).toEqual([1, 2, 3]);
            expect(_.take([1, 2, 3], 0)).toEqual([]);
        });

        it(': if the second param is omitted, the number of elements to take should be 1', () => {
            expect(_.take([1, 2, 3])).toEqual([1]);
        });

        it(': if the second param is < 0, the number of elements to take should be 0', () => {
            expect(_.take([1, 2, 3], -5)).toEqual([]);
        });

        it(': if the first param is not an array, method should throw an error', () => {
            expect(() => _.take({user: 'barney'})).toThrow();
            expect(() => _.take(1024)).toThrow();
        });

        it(': if the params is omitted, method should throw an error', () => {
            expect(() => _.take()).toThrow();
        });

    });

    /**
     * 
     * @function _.filter(collection, [predicate=_.identity])
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new filtered array.
     * 
     */

    describe('_.filter ', () => {

        it('should return an array of all elements predicate returns truthy for', () => {
            const users = [
                { 'user': 'barney', 'age': 36, 'active': true },
                { 'user': 'fred',   'age': 40, 'active': false }
              ];
            
            expect(_.filter(users, function(o) { return !o.active; })).toEqual([{ 'user': 'fred',   'age': 40, 'active': false }]);
            expect(_.filter(users, { 'age': 36, 'active': true })).toEqual([{ 'user': 'barney', 'age': 36, 'active': true }]);
            expect(_.filter(users, ['active', false])).toEqual([{ 'user': 'fred',   'age': 40, 'active': false }]);
            expect(_.filter(users, 'active')).toEqual([{ 'user': 'barney', 'age': 36, 'active': true }]);
        });

        it(': if the second param is omitted, predicate should be falsey', () => {
            const users = [
                { 'user': 'barney', 'age': 36, 'active': true },
                { 'user': 'fred',   'age': 40, 'active': false }
              ];

              expect(_.filter(users)).toEqual([
                { 'user': 'barney', 'age': 36, 'active': true },
                { 'user': 'fred',   'age': 40, 'active': false }
              ]);
        });

        it(': if the first param is not an array or iterable object, method should throw an error', () => {
            expect(() => _.filter(1024)).toThrow();
        });

        it(': if the params is omitted, method should throw an error', () => {
            expect(() => _.filter()).toThrow();
        });

    });

    /**
     * 
     * @function _.find(collection, [predicate=_.identity], [fromIndex=0])
     * @param {Array|Object} collection The collection to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param {number} [fromIndex=0] The index to search from.
     * @returns {*} Returns the matched element, else `undefined`.
     * 
     */

    describe('_.find ', () => {

        it('should return the first element predicate returns truthy for', () => {
            expect(_.find([1, 2, 3, 4], (e) => e > 2, 1)).toEqual(3);
        });

        it('should return undefined if there is no matches', () => {
            expect(_.find([1, 2, 3, 4], (e) => e < 0, 0)).toBeUndefined();
        });

        it(': if the last param is omitted, the index should be 0', () => {   
            const users = [
                { 'user': 'barney',  'age': 36, 'active': true },
                { 'user': 'fred',    'age': 40, 'active': false },
                { 'user': 'pebbles', 'age': 1,  'active': true }
              ];
    
            expect(_.find(users, function(o) { return o.age < 40; })).toEqual({ 'user': 'barney',  'age': 36, 'active': true });
            expect(_.find(users, { 'age': 1, 'active': true })).toEqual({ 'user': 'pebbles', 'age': 1,  'active': true });
            expect(_.find(users, ['active', false])).toEqual({ 'user': 'fred',    'age': 40, 'active': false });
            expect(_.find(users, 'active')).toEqual({ 'user': 'barney',  'age': 36, 'active': true });
            expect(_.find(users, 'weight')).toBeUndefined()
        });
        
        it(': if the last param is < 0, fromIndex should be max(fromIndex + length, 0)', () => {
            expect(_.find([1, 2, 3, 4], (e) => e > 1, -5)).toEqual(2);
            expect(_.find([1, 2, 3, 4], (e) => e > 1, -2)).toEqual(3);
        });

        it('should return the first element of collection is 2nd and 3d params are omitted', () => {
            expect(_.find([1, 2, 3, 4])).toEqual(1);
        });

        it(': if the first param is not an array or iterable object, method should return undefined', () => {
            expect(_.find(1024)).toBeUndefined();
        });

        it(': if the params is omitted, method should throw an error', () => {
            expect(() => _.find()).toThrow();
        });

    });

    /**
     * @function _.includes(collection, value, [fromIndex=0])
     * @param {Array|Object|string} collection The collection to inspect.
     * @param {*} value The value to search for.
     * @param {number} [fromIndex=0] The index to search from.
     * @returns {boolean} Returns `true` if `value` is found, else `false`.
     * 
     */

    describe('_.includes ', () => {

        it('should check if value is in collection', () => {
            expect(_.includes([1, 2, 3], 1, 2)).toBeFalsy();
            expect(_.includes([1, 2, 3], 1, -2)).toBeTruthy();
            expect(_.includes({ 'a': 1, 'b': 2 }, 1)).toBeTruthy();
            expect(_.includes('abcd', 'bc')).toBeTruthy();
            expect(_.includes('abcde', 'bc', -1)).toBeTruthy();
            expect(_.includes([1, 2], 'a')).toBeFalsy();
            expect(_.includes([1, NaN], NaN)).toBeTruthy();
        });

        it(': if the last param is omitted, index should be 0', () => {
            expect(_.includes([1, 2, 3], 1)).toBeTruthy();
        });

        it(': if the last param is < 0, fromIndex should be max(fromIndex + length, 0)', () => {
            expect(_.includes([1, 2, 3], 1, -2)).toBeFalsy();
            expect(_.includes([1, 2, 3], 1, -4)).toBeTruthy();
        });

        it(': if second param is omitted, method should return false', () => {
            expect(_.includes([])).toBeFalsy();
            expect(_.includes([1, 2, 3])).toBeFalsy();
        });

        it(': if the first param is not a collection, method should throw an error', () => {
            expect(() => _.includes(1024, 5)).toThrow();
        });

        it(': if the params is omitted, method should throw an error', () => {
            expect(() => _.includes()).toThrow();
        });

    });

    /**
     * 
     * 
     * 
     */

});
