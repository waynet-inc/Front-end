const _ = require('./../js/custom-lodash.js');


describe("CustomLodash", function () {

    it("chunk should create an array of elements split into groups the length of size", () => {
        expect(_.chunk(['a', 'b', 'c', 'd'], 2)).toEqual([['a', 'b'], ['c', 'd']]);
        expect(_.chunk(['a', 'b', 'c', 'd'], 3)).toEqual([['a', 'b', 'c'], ['d']]);
        expect(_.chunk(['a', 'b', 'c', 'd'], -2)).toEqual([]);
    });
});
