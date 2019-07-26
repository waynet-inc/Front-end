import Builder from "./Builder.js"

function StringBuilder(str = "") {
    this.super.constructor.call(this, str);
}

StringBuilder.prototype = Object.create(Builder.prototype);
StringBuilder.prototype.constructor = StringBuilder;
StringBuilder.prototype.super = Builder.prototype;


export default StringBuilder