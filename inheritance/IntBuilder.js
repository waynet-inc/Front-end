import Builder from "./Builder.js"

class IntBuilder extends Builder {
    constructor(num = 0) {
        super(num);
    }

    static random(from, to) {
        this.value = Math.floor(Math.random() * (to + 1 - from)) + from;
        return this.value;
    }
    
    mod(n) {
        this.value %= n;
        return this;
    }
}


export default IntBuilder
