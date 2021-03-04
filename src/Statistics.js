const Calculator = require('./Calculator');
const Mean = require('./Operations/Statistics/Mean');

class Statistics extends Calculator {

    static Mean(arr){
        let calculation = this.Create(Mean,arr);
        this.AddCalculation(calculation);
        return calculation;
    }
}

module.exports = Statistics;