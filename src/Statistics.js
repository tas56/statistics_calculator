const Calculator = require('./Calculator');
const Descriptive = require('./Operations/Statistics/Descriptive');

class Statistics extends Calculator {

    static Mean(arr){
        let calculation = this.Create(Descriptive.mean,arr);
        this.AddCalculation(calculation);
        return calculation;
    }
    static Median(arr){
        let calculation = this.Create(Descriptive.median,arr);
        this.AddCalculation(calculation);
        return calculation;
    }
    static Mode(arr){
        let calculation = this.Create(Descriptive.mode,arr);
        this.AddCalculation(calculation);
        return calculation;
    }
    static Variance(arr){
        let calculation = this.Create(Descriptive.variance,arr);
        this.AddCalculation(calculation);
        return calculation;
    }
}

module.exports = Statistics;