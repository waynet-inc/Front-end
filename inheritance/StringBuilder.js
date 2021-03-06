import Builder from "./Builder.js"

function StringBuilder(str = "") {
    this.super.constructor.call(this, str);
}

StringBuilder.prototype = Object.create(Builder.prototype);
StringBuilder.prototype.constructor = StringBuilder;
StringBuilder.prototype.super = Builder.prototype;

StringBuilder.prototype.remove = function(str) {
    let n = this.value.indexOf(str);
    const len = str.length;
    while(n !== -1) {
        this.value = this.value.slice(0, n) + this.value.slice(n + len);
        n = this.value.indexOf(str);
    }
    return this;
}

StringBuilder.prototype.sub = function(from, n) {
    this.value = this.value.substr(from, n);
    return this;
}


export default StringBuilder
