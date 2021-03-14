const Calculator = require('./calculator');
var seedrandom = require('seedrandom');

class Random {

    constructor (min, max) {
        this.max = max;
        this.min = min;
    }

    randomNoSeed(min, max) {
        var number = Math.random() * (max - min + 1) + min;
        var intArray;
        var even = [0,2,4,6,8];
        intArray = [Math.floor(Math.random() * (max - min + 1) + min)];
        // This if statement makes the function be able to return both Integer and Decimal values.
        if (even.includes(intArray[0]) == true){
            return Math.floor(number);
        } else {
            return number;
        }
    }


}
module.exports = Random;