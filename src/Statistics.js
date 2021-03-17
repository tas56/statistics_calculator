const Calculator = require('./Calculator');
const Descriptive = require('./Operations/Statistics/Descriptive');

class Statistics extends Calculator {

    // Begin descriptive statistics
    static mean(arr){
        let calculation = this.create(Descriptive.mean,arr);
        this.addCalculation(calculation);
        return calculation;
    }
    static median(arr){
        let calculation = this.create(Descriptive.median,arr);
        this.addCalculation(calculation);
        return calculation;
    }
    static mode(arr){
        let calculation = this.create(Descriptive.mode,arr);
        this.addCalculation(calculation);
        return calculation;
    }
    static variance(arr){
        let calculation = this.create(Descriptive.variance,arr);
        this.addCalculation(calculation);
        return calculation;
    }

    static standardDeviation(arr){
        let calculation = this.create(Descriptive.standardDeviation,arr);
        this.addCalculation(calculation);
        return calculation;
    }

    static quartiles(arr){
        let calculation = this.create(Descriptive.quartiles,arr);
        this.addCalculation(calculation);
        return calculation;
    }

    static skewness(arr){
        let calculation = this.create(Descriptive.skewness,arr);
        this.addCalculation(calculation);
        return calculation;
    }

    static zScore(a,b,c){
        let calculation = this.create(Descriptive.zScore,a,b,c);
        this.addCalculation(calculation);
        return calculation;
    }

    static meanAbsoluteDeviation(arr){
        let calculation = this.create(Descriptive.meanAbsoluteDeviation,arr);
        this.addCalculation(calculation);
        return calculation;
    }

    static sampleCorrelation(x,y){
        let calculation = this.create(Descriptive.sampleCorrelation,x,y);
        this.addCalculation(calculation);
        return calculation;
    }

    static populationCorrelation(x,y){
        let calculation = this.create(Descriptive.populationCorrelation,x,y);
        this.addCalculation(calculation);
        return calculation;
    }
    // End Descriptive statistics

    // Begin Sampling statistic

    // end sampling statistics

}

module.exports = Statistics;