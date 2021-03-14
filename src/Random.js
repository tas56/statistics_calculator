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

    randomSeed(min, max, seed){
        var generator = seedrandom(seed);
        var random = generator() * (max - min) + min;
        return random;
    }

    //Generate a list of N random numbers with a seed and between a range of numbers - Int
    static randomIntListWithSeed(seed, min, max, len) {
        let randomList = [];
        seedrandom(seed, {global: true});

        for (let i = 0; i < len; i++) {
            randomList.push(Math.floor(Math.random() * (max - min) + min));
        }
        return randomList;
    }

    //Generate a list of N random numbers with a seed and between a range of numbers - Decimal
    static randomDecimalListWithSeed(seed, min, max, n) {
        let randomList = [];
        seedrandom(seed, {global: true});

        for (let i = 0; i < n; i++) {
            randomList.push(Math.random() * (max - min) + min);
        }
        return randomList;
    }

    //Select random item from list
    static selectRandomItem(list) {
        let randomItem = Math.floor(Math.random() * list.length);
        return list[randomItem];
    }




}
module.exports = Random;