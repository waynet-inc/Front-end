function Builder(n) {
    this.value = n;
}

Builder.prototype.plus = function(...n) {}

Builder.prototype.minus = function(...n) {}

Builder.prototype.multiply = function(n) {}

Builder.prototype.divide = function(n) {}

Builder.prototype.get = function() { return this.value; }
