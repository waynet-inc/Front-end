function Builder(n) {
    this.value = n;
}

Builder.prototype.plus = function(...n) { 
    this.value = n.reduce((a, b) => a + b, this.value);
    return this;
}

Builder.prototype.minus = function(...n) { 
    if (typeof this.value === "number") {
        this.value -= n.reduce((a, b) => a + b);
    } else if (typeof this.value === "string") {
        this.value = this.value.slice(0, -n);
    }
    return this;
}

Builder.prototype.multiply = function(n) {
    const temp = this.value;
    for (let i = 1; i < n; i++) {
        this.value += temp;
    }
    return this;
}

Builder.prototype.divide = function(n) {
    if (typeof this.value === "number") {
        this.value = (this.value - this.value % n) / n;
    } else if (typeof this.value === "string") {
        this.value = this.value.slice(0, Math.floor(this.value.length/n) + 1);
    }
    return this;
}

Builder.prototype.get = function() { return this.value; }


class IntBuilder extends Builder {
    constructor(num = 0) {
        super(num);
        //this.value = num;
    }

    static random(from, to) {
        this.value = Math.floor(Math.random() * (to + 1 - from)) + from;
        return this.value;
    }

    //multiply(n) {
    //    this.value *= n;
    //    return this;
    //}

    mod(n) {
        this.value %= n;
        return this;
    }
}
