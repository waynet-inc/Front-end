class CustomLodash{
    chunk(array, size = 1) {
        let newArray = [];
        let length = Math.ceil(array.length / size);
        for (let i = 0; i < length; i++){
            newArray[i] = [];
            for (let j = 0; j < size; j++) {
                if (i * size + j >= array.length){
                    break;
                }

                newArray[i][j] = array[i*size + j];
            }
        }
        return newArray;
    }

    compact(array) {
        let newArray = [];
        for (let i = 0; i < array.length; i++){
            if (!array[i] || array[i] === undefined|| array[i] === null){
                continue;
            }

            this.push(array[i])(newArray);
        }
        return newArray;
    }

    drop(array, n = 1) {
        let newArray = [];
        if (n !== 0){
            for (let i = 0; i < array.length - n; i++){
                this.push(array[i + n])(newArray);
            }
        } else {
            newArray = array;
        }

        return newArray;
    }

    dropWhile(array, predicate = this.identity ) {
        let drop;
        for (let i = 0; i < array.length; i++){
            if (!this.iteratee(predicate)(array[i], i, array)) {
                drop = i;
                break;
            }
        }

        return this.drop(array, drop);
    }

    take(array, n = 1){
        if (array.length > n){
            array.length = n;
        }

        return array;
    }

    filter(collection, predicate = this.identity){
        let newArray = [];
        for (let i = 0; i < collection.length; i++){
            if (this.iteratee(predicate)(collection[i], i, collection)) {
                this.push(collection[i])(newArray);
            }
        }

        return newArray;
    }

    find(collection, predicate = this.identity, fromIndex = 0){
        for (let i = fromIndex; i < collection.length; i++){
            fromIndex = i;
            if (this.iteratee(predicate)(collection[i], i, collection)){
                return collection[i];
            }

        }
        return undefined;
    }

    includes(collection, value, fromIndex = 0){
        if (typeof collection === "string"){
            collection = fromIndex >= 0 ? collection.substr(fromIndex) : collection.substr(0, collection.length + fromIndex);
            return collection.indexOf(value) !== (-1);
        }

        collection = fromIndex >= 0 ? this.drop(collection, fromIndex) : this.take(collection, collection.length - fromIndex);
        let keys = Object.keys(collection);
        for (let i = 0; i < keys.length; i++){
            if (this.sameValueZero(collection[keys[i]], value)){
                return true;
            }
        }

        return false;
    }

    map(collection, iteratee = this.identity) {
        let newArray = [];
        let keys = Object.keys(collection);
        for (let i = 0; i < keys.length; i++){
            this.push(this.iteratee(iteratee)(collection[keys[i]], keys[i], collection))(newArray);
        }

        return newArray;
    }

    zip(...arrays){
        let newArray = [];
        let length = arrays[0].length;
        for (let i = 0; i < arrays.length; i++){
            if (arrays[i].length > length) {
                length = arrays[i].length;
            }
        }

        for (let i = 0; i < length; i++){
            newArray[i] = [];
            for (let j = 0; j < arrays.length; j++){
                this.push(arrays[j][i])(newArray[i]);
            }
        }

        return newArray;
    }

    merge(object, ...sources){
        for (let i = 0; i < sources.length; i++){
            for (let k in sources[i]){
                if (k in object){
                    if (typeof object[k] === "object"){
                        this.merge(object[k], sources[i][k]);
                    }   else   {
                        object[k] = sources[i][k];
                    }
                }   else   {
                    object[k] = sources[i][k];
                }
            }
        }

        return object;
    }

    omit(object, parts){
        let keysArray = [];
        parts = typeof parts === "string" ? [...parts] : parts;

        for (let key in object ){
            if (!this.includes(parts, key)){
                this.push(key)(keysArray);
            }
        }

        return this.pick(object, keysArray);
    }

    omitBy(object, predicate = this.identity){
        let newObject = {};
        for (let key in object){
            if (!predicate(object[key], key)){
                newObject[key] = object[key];
            }
        }

        return newObject;
    }

    pick(object, parts){
        let newObject = {};
        if (Array.isArray(parts)){
            for (let i = 0; i < parts.length; i++){
                newObject[parts[i]] = object[parts[i]];
            }
        }

        if (typeof parts === "string"){
            newObject[parts] = object[parts];
        }

        return newObject;
    }

    pickBy(object, predicate = this.identity){
        return this.omitBy(object, this.negate(predicate));
    }

    toPairs(object){
        if (object instanceof Map || object instanceof Set){
            const iterator = object.entries();
            let entries = [];
            for (let entry of iterator){
                this.push(entry)(entries);
            }

            return entries;
        }

        return Object.entries(object);
    }

    identity(value) {
        return value;
    }

    negate(func){
        return function() {
            return !func.apply(this, arguments);
        };
    }

    sameValueZero(x,y) {
        if (typeof x !== typeof y) {
            return false;
        }

        if (x !== x && y !== y) {
            return true;
        }

        return x === y;
    }

    matches(source){
        return (object) => {
            for (let k in source){
                if (object[k] !== source[k]){
                    return false;
                }
            }
            return true;
        };
    }

    matchesProperty(path, srcValue){
        return (object) => {
            if (object[path] !== srcValue){
                return false;
            }

            return true;
        };
    }

    iteratee(func = this.identity){
        switch (typeof func){
            case "string": {
                return this.property(func);
            }
            case "function": {
                return func;
            }
            case "object": {
                if (Array.isArray(func)){
                    return this.matchesProperty(...func);
                }

                return this.matches(func);
            }
        }
    }

    property(path){
        return (object) => {
            return object[path];
        };
    }

    push(elem){
        return (array) => {
            array[array.length] = elem;
        };
    }
}

let _ = new CustomLodash;

module.exports = {
    chunk:_.chunk,
    compact:_.compact,
    drop:_.drop,
    dropWhile:_.dropWhile,
    take:_.take,
    filter:_.filter,
    find:_.find,
    includes:_.includes,
    map:_.map,
    zip:_.zip,
    merge:_.merge,
    omit:_.omit,
    omitBy:_.omitBy,
    pick:_.pick,
    pickBy:_.pickBy,
    toPairs:_.toPairs,
    identity:_.identity,
    negate:_.negate,
    sameValueZero:_.sameValueZero,
    matches:_.matches,
    matchesProperty:_.matchesProperty,
    iteratee:_.iteratee,
    property:_.property,
    push:_.push,
};