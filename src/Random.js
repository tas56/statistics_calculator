const Calculator = require('./calculator');
var seedrandom = require('seedrandom');

class Random {

    static randomIntNoSeed(min, max) {
        let number = Math.random() * (max - min) + min;
        return number;
    }

    static  randomDecimalNoSeed(min, max){
        let number = Math.random() * (max - min) + min;
        return Math.floor(number) / 100.00;
    }

   static randomIntWithSeed(min, max, seed){
        var generator = seedrandom(seed);
        var randomInt = generator() * (max - min) + min;
        return randomInt;
    }

    static randomDecimalWithSeed(min, max, seed){
        var generator = seedrandom(seed);
        var randomDecimal = (generator() * (max - min) + min) / 100.00;
        return randomDecimal;
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

    //Select N number of items from a list without a seed
    static selectNItems(list, n) {
        let resultList = [];
        while (resultList.length < n) {
            let item = Math.floor(Math.random() * list.length) + 0;
            resultList.push(list[item]);
        }
        return resultList;
    }

    //Select N number of items from a list with a seed
    static selectNItemsWithASeed(seed, list, n) {
        seedrandom(seed, {global: true});
        let resultList = [];
        while (resultList.length < n) {
            let item = Math.floor(Math.random() * list.length) + 0;
            resultList.push(list[item]);
        }
        return resultList;
    }







}
module.exports = Random;