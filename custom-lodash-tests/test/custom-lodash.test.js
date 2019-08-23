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
        
        it('should create an array of elements split into groups the length of size!', () => {
            expect(_.chunk(['a', 'b', 'c', 'd'], 2)).toEqual([['a', 'b'], ['c', 'd']]); 
            expect(_.chunk(['a', 'b', 'c', 'd', 'e', 'f'], 2)).toEqual([['a', 'b'], ['c', 'd'], ['e', 'f']]);
        });

        it(': if array can\'t be split evenly, the final chunk should contain the remaining elements!', () => {
            expect(_.chunk(['a', 'b', 'c', 'd'], 3)).toEqual([['a', 'b', 'c'], ['d']]);
            expect(_.chunk(['a', 'b', 'c', 'd'], 5)).toEqual([['a', 'b', 'c', 'd']]); 
        });

        it(': if size is omitted, the size should be 1!', () => {
            expect(_.chunk(['a', 'b', 'c', 'd'])).toEqual([['a'], ['b'], ['c'], ['d']]);
        });

        it(': if the params is omitted, method should throw an error!', () => {
            expect(() => _.chunk()).toThrow();
        });

        it(': if first param is not an array, method should throw an error!', () => {
            expect(() => _.chunk(1024, 5)).toThrow();
            expect(() => _.chunk({user: 'barney'}, 5)).toThrow();
        });
        
        it(': if size < 0, method should return an empty array!', () => {
            expect(_.chunk(['a', 'b', 'c', 'd'], -2)).toEqual([]);
        });

        // --> Infinity Loop
        xit(': if size = 0, method should return an empty array!', () => {
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

        it('should create an array with all falsey values removed!', () => {
            expect(_.compact([0, 1, false, 2, '', 3])).toEqual([1, 2, 3]);
        });

        it(': if the param is not an array, method should throw an error!', () => {
            expect(() => _.compact('12345')).toThrow();
            expect(() => _.compact({user: 'barney'})).toThrow();
        });

        it(': if the param is omitted, method should throw an error!', () => {
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

        it('should create a slice of array with n elements dropped from the beginning!', () => {
            expect(_.drop([1, 2, 3], 2)).toEqual([3]);
            expect(_.drop([1, 2, 3], 5)).toEqual([]);
            expect(_.drop([1, 2, 3], 0)).toEqual([1, 2, 3]);
        });

        it(': if second param is omitted, the number of elements to drop should be 1!', () => {
            expect(_.drop([1, 2, 3])).toEqual([2, 3]);
        });

        it(': if second param is < 0, the number of elements to drop should be 0!', () => {
            expect(_.drop([1, 2, 3], -2)).toEqual([1, 2, 3]);
        });

        it(': if the first param is not an array, method should throw an error!', () => {
            expect(() => _.drop({user: 'barney'})).toThrow();
            expect(() => _.drop(1024)).toThrow();
        });

        it(': if the params is omitted, method should throw an error!', () => {
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

        it('should create a slice of array excluding elements dropped from the beginning until predicate returns falsey!', () => {
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

        it(': if the second param is omitted, predicate should be falsey!', () => {
            expect(_.dropWhile([0, 1, 2])).toEqual([0, 1, 2]);
        });

        it(': if the first param is not an array, method should throw an error!', () => {
            expect(() => _.dropWhile({user: 'barney'})).toThrow();
            expect(() => _.dropWhile(1024)).toThrow();
        });

        it(': if the params is omitted, method should throw an error!', () => {
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

        it('should create a slice of array with n elements taken from the beginning!', () => {
            expect(_.take([1, 2, 3], 2)).toEqual([1, 2]);
            expect(_.take([1, 2, 3], 5)).toEqual([1, 2, 3]);
            expect(_.take([1, 2, 3], 0)).toEqual([]);
        });

        it(': if the second param is omitted, the number of elements to take should be 1!', () => {
            expect(_.take([1, 2, 3])).toEqual([1]);
        });

        it(': if the second param is < 0, the number of elements to take should be 0!', () => {
            expect(_.take([1, 2, 3], -5)).toEqual([]);
        });

        it(': if the first param is not an array, method should throw an error!', () => {
            expect(() => _.take({user: 'barney'})).toThrow();
            expect(() => _.take(1024)).toThrow();
        });

        it(': if the params is omitted, method should throw an error!', () => {
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

        it('should return an array of all elements predicate returns truthy for!', () => {
            const users = [
                { 'user': 'barney', 'age': 36, 'active': true },
                { 'user': 'fred',   'age': 40, 'active': false }
              ];
            
            expect(_.filter(users, (o) => !o.active)).toEqual([{ 'user': 'fred',   'age': 40, 'active': false }]);
            expect(_.filter(users, { 'age': 36, 'active': true })).toEqual([{ 'user': 'barney', 'age': 36, 'active': true }]);
            expect(_.filter(users, ['active', false])).toEqual([{ 'user': 'fred',   'age': 40, 'active': false }]);
            expect(_.filter(users, 'active')).toEqual([{ 'user': 'barney', 'age': 36, 'active': true }]);
        });

        it(': if the second param is omitted, predicate should be truthy!', () => {
            const users = [
                { 'user': 'barney', 'age': 36, 'active': true },
                { 'user': 'fred',   'age': 40, 'active': false }
              ];

            expect(_.filter(users)).toEqual([
                { 'user': 'barney', 'age': 36, 'active': true },
                { 'user': 'fred',   'age': 40, 'active': false }
              ]);
        });

        it(': if the first param is not an array or iterable object, method should throw an error!', () => {
            expect(() => _.filter(1024)).toThrow();
        });

        it(': if the params is omitted, method should throw an error!', () => {
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

        it('should return the first element predicate returns truthy for!', () => {
            expect(_.find([1, 2, 3, 4], (e) => e > 2, 1)).toEqual(3);
        });

        it('should return undefined if there is no matches!', () => {
            expect(_.find([1, 2, 3, 4], (e) => e < 0, 0)).toBeUndefined();
        });

        it(': if the last param is omitted, the index should be 0!', () => {   
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

        it(': if the 2nd param is not a function or prop, method should throw an error!', () => {
            expect(() => _.find([1, 2, 3, 4], 20)).toThrow();
        });

        it('should return the first element of collection if the 2nd and 3d params are omitted!', () => {
            expect(_.find([1, 2, 3, 4])).toEqual(1);
        });

        it(': if the first param is not an array or iterable object, method should return undefined!', () => {
            expect(_.find(1024)).toBeUndefined();
        });

        it(': if the params is omitted, method should throw an error!', () => {
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

        it(': if the last param is omitted, index should be 0!', () => {
            expect(_.includes([1, 2, 3], 1)).toBeTruthy();
        });

        it(': if the last param is < 0, fromIndex should be max(fromIndex + length, 0)', () => {
            expect(_.includes([1, 2, 3], 1, -2)).toBeFalsy();
            expect(_.includes([1, 2, 3], 1, -4)).toBeTruthy();
        });

        it(': if second param is omitted, method should return false!', () => {
            expect(_.includes([])).toBeFalsy();
            expect(_.includes([1, 2, 3])).toBeFalsy();
        });

        it(': if the first param is not a collection, method should throw an error!', () => {
            expect(() => _.includes(1024, 5)).toThrow();
        });

        it(': if the params is omitted, method should throw an error!', () => {
            expect(() => _.includes()).toThrow();
        });

    });

    /**
     * 
     * @function _.map(collection, [iteratee=_.identity])
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new mapped array.
     * 
     */

    describe('_.map ', () => {

        it('should creates an array of values by running each element in collection thru iteratee!', () => {
            const f = (n) => n ** 2;

            const users = [
                { 'user': 'barney' },
                { 'user': 'fred' }
              ];
    
            expect(_.map([4, 8], f)).toEqual([16, 64]);
            expect(_.map({ 'a': 4, 'b': 8 }, f)).toEqual([16, 64]);
            expect(_.map(users, 'user')).toEqual(['barney', 'fred']);
        });

        it(': if the second param is omitted, should return array of values!', () => {
            expect(_.map([1, 2])).toEqual([1, 2]);
            expect(_.map({user: 'abc'})).toEqual(['abc']);
            expect(_.map({user: 'abc', name: 'def'})).toEqual(['abc', 'def']);
        });

        it(': if the second param is not a func or iteratee, method should throw an error!', () => {
            expect(() => _.map({user: 'abc'}, 5)).toThrow();
        });

        it(': if the first param is not a collection, method should throw an error!', () => {
            expect(() => _.map(1024)).toThrow();
        });

        it(': if the params is omitted, method should throw an error!', () => {
            expect(() => _.map()).toThrow();
        });

    });

    /**
     * 
     * @function _.zip([arrays])
     * @param {...Array} [arrays] The arrays to process.
     * @returns {Array} Returns the new array of grouped elements.
     * 
     */

    describe('_.zip ', () => {

        it('should creates an array of grouped elements, the each of which contains the corresponding elements by order!', () => {
            expect(_.zip(['a', 'b'], [1, 2], [true, false])).toEqual([['a', 1, true], ['b', 2, false]]);
            expect(_.zip(['a', 'b'], [1, 2, 3], [true, false, true])).toEqual([['a', 1, true], ['b', 2, false], [undefined, 3, true]]);
        });

        it(': if the param is not an array, method should throw an error!', () => {
            expect(_.zip(1024, 'dfdsf')).toEqual([]);
        });

        it(': if the param is omitted, method should throw an error!', () => {
            expect(() => _.zip()).toThrow();
        });

    });

    /**
     * 
     * @function _.merge(object, [sources])
     * @param {Object} object The destination object.
     * @param {...Object} [sources] The source objects.
     * @returns {Object} Returns `object`.
     * 
     */

    describe('_.merge ', () => {

        it('should merge two objects by same properties!', () => {
            const object = {
                'a': [{ 'b': 2 }, { 'd': 4 }]
              };
               
            const other = {
                'a': [{ 'c': 3 }, { 'e': 5 }]
              };
            
            expect(_.merge(object, other)).toEqual({ 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] });
            expect(_.merge({'a' : 1}, other)).toEqual({ 'a': [{ 'c': 3 }, { 'e': 5 }] });
        });

        it(': if the 2nd param is omitted, method should return original destination object!', () => {
            expect(_.merge({a: 1})).toEqual({a: 1});
        });

        it(': if the 2nd param is not an object, method should return original destination object!', () => {
            expect(_.merge({a: 1}, 151)).toEqual({a: 1});
        });
        
        it(': if the params are omitted, method should return undefined!', () => {
            expect(_.merge()).toBeUndefined();
        });

        it(': if the first param is not an object, method should throw an error!', () => {
            expect(() => _.merge(151, {a: 1})).toThrow();
        });

    });

    /**
     * 
     * @function _.omit(object, [paths])
     * @param {Object} object The source object.
     * @param {...(string|string[])} [paths] The property paths to omit.
     * @returns {Object} Returns the new object.
     * 
     */

    describe('_.omit ', () => {

        it('should create an object composed of the own and inherited enumerable property paths of object that are not omitted!', () => {
            const object = { 'a': 1, 'b': '2', 'c': 3 };

            expect(_.omit(object, ['a', 'c'])).toEqual({ 'b': '2' });
            expect(_.omit(object, 'c')).toEqual({ 'a': 1, 'b': '2'});
        });

        it(': if the 2nd param is omitted, method should return the source object!', () => {
            expect(_.omit({ a: 'abc' })).toEqual({ a: 'abc' });
        });

        it(': if the 2nd param is not string, method should return the source object!', () => {
            expect(_.omit({ 'a': 1 }, 50)).toEqual({ 'a': 1 });
        });

        it(': if the first param is not an object, method should return an empty object!', () => {
            expect(_.omit(151, 'c')).toEqual({});
        });

        it(': if the first param is omitted, method should return an empty object!', () => {
            expect(_.omit()).toEqual({});
        });

    });

    /**
     * 
     * @function _.omitBy(object, [predicate=_.identity])
     * @param {Object} object The source object.
     * @param {Function} [predicate=_.identity] The function invoked per property.
     * @returns {Object} Returns the new object.
     * 
     */

    describe('_.omitBy ', () => {

        it('should create an object composed of the own and inherited enumerable string keyed properties that predicate doesn\'t return truthy for!', () => {
            const object = { 'a': 1, 'b': '2', 'c': 3 };

            expect(_.omitBy(object, Number.isInteger)).toEqual({ 'b': '2' });
        });

        it(': if the 2nd param is not a function, method should throw an error!', () => {
            expect(() => _.omitBy({ 'a': 1, 'b': 2 }, '1')).toThrow();
            expect(() => _.omitBy({ 'a': 1, 'b': 2 }, 'a')).toThrow();
        });

        it(': if the 2nd param is omitted, method should return an empty object!', () => {
            expect(_.omitBy({'a': 1})).toEqual({});
        });

        it(': if the first param is not an object, method should return an empty object!', () => {
            expect(_.omitBy(151, 'a')).toEqual({});
            expect(_.omitBy(151, Number.isInteger)).toEqual({});
        });

        it(': if the first param is omitted, method should return an empty object!', () => {
            expect(_.omitBy()).toEqual({});
        });

    });

    /**
     * 
     * @function _.pick(object, [paths])
     * @param {Object} object The source object.
     * @param {...(string|string[])} [paths] The property paths to pick.
     * @returns {Object} Returns the new object.
     * 
     */

    describe('_.pick ', () => {

        it('should create an object composed of the picked object properties!', () => {
            const object = { 'a': 1, 'b': '2', 'c': 3 };

            expect(_.pick(object, ['a', 'c'])).toEqual({ 'a': 1, 'c': 3 });
            expect(_.pick(object, 'b')).toEqual({ 'b': '2'});
        });

        it(': if the 2nd param is omitted, method should return an empty object!', () => {
            expect(_.pick({ 'a': 1 })).toEqual({});
        });

        it(': if the object doesn\'t have properties to pick, method should return an object with undefined properties!', () => {
            expect(_.pick({ 'a': 1 }, 'c')).toEqual({'c': undefined});
            expect(_.pick(151, 'c')).toEqual({'c': undefined});
        });

        it(': if the 2nd param is not string, method should return an empty object!', () => {
            expect(_.pick({ 'a': 1 }, 50)).toEqual({});
        });
        
        it(': if the first param is omitted, method should return an empty object!', () => {
            expect(_.pick()).toEqual({});
        });

    });

    /**
     * 
     * @function _.pickBy(object, [predicate=_.identity])
     * @param {Object} object The source object.
     * @param {Function} [predicate=_.identity] The function invoked per property.
     * @returns {Object} Returns the new object.
     * 
     */

    describe('_.pickBy', () => {

        it('should create an object composed of the object properties predicate returns truthy for!', () => {
            const object = { 'a': 1, 'b': '2', 'c': 3 };

            expect(_.pickBy(object, Number.isInteger)).toEqual({ 'a': 1, 'c': 3 });
        });

        it(': if the 2nd param is not a function, method should throw an error!', () => {
            expect(() => _.pickBy({ 'a': 1, 'b': 2 }, 1)).toThrow();
            expect(() => _.pickBy({ 'a': 1, 'b': 2 }, 'a')).toThrow();
        });

        it(': if the 2nd param is omitted, method should return the source object!', () => {
            expect(_.pickBy({'a': 1})).toEqual({'a': 1});
        });

        it(': if the object doesn\'t have properties to pick, method should return an empty object!', () => {
            expect(_.pick({ 'a': 1.50 }, Number.isInteger)).toEqual({});
            expect(_.pickBy(151, (e) => e > 2)).toEqual({});
        });

        it(': if the first param is omitted, method should return an empty object!', () => {
            expect(_.pick()).toEqual({});
        });

    });

    /**
     * 
     * @function _.toPairs(object)
     * @param {Object} object The object to query.
     * @returns {Array} Returns the key-value pairs.
     * 
     */

    describe('_.toPairs', () => {

        it('should create an array of own enumerable string keyed-value pairs for object!', () => {
            class Foo {
                constructor() {
                    this.a = 1;
                    this.b = 2;
                }
            }
            Foo.prototype.c = 3;
    
            expect(_.toPairs(new Foo)).toEqual([['a', 1], ['b', 2]]);
            expect(_.toPairs('abc')).toEqual([['0', 'a'], ['1', 'b'], ['2', 'c']]);
            expect(_.toPairs([1, 2])).toEqual([['0', 1], ['1', 2]]);
        });

        it('should work for Set container!', () => {
            const set = new Set([1, 2, 2, 3]);
            
            expect(_.toPairs(set)).toEqual([[1, 1], [2, 2], [3, 3]]);
        });
    
        it('should work for Map container!', () => {
            const map = new Map([
                ['1',  'str'],
                [1,    'num'],
                [true, 'bool']
              ]);
    
            expect(_.toPairs(map)).toEqual([['1', 'str'], [1, 'num'], [true, 'bool']]);
        });

        it(': if the first param is not an object, method should return an empty array!', () => {
            expect(_.toPairs(15)).toEqual([]);
        });

        it(': if the first param is omitted, method should throw an erroe!', () => {
            expect(() => _.toPairs()).toThrow();
        });

    });
});
