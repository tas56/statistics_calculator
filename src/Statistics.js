const Calculator = require('./Calculator');
const Descriptive = require('./Operations/Statistics/Descriptive');

class Statistics extends Calculator {

    static mean(arr){
        let calculation = this.create(Descriptive.mean,{arr:arr});
        this.addCalculation(calculation);
        return calculation;
    }
    static median(arr){
        let calculation = this.create(Descriptive.median,{arr:arr});
        this.addCalculation(calculation);
        return calculation;
    }
    static mode(arr){
        let calculation = this.create(Descriptive.mode,{arr:arr});
        this.addCalculation(calculation);
        return calculation;
    }
    static variance(arr){
        let calculation = this.create(Descriptive.variance,{arr:arr});
        this.addCalculation(calculation);
        return calculation;
    }
    static standardDeviation(arr){
        let calculation = this.create(Descriptive.standardDeviation,{arr:arr});
        this.addCalculation(calculation);
        return calculation;
    }

    static quartiles(arr){
        let calculation = this.create(Descriptive.quartiles,{arr:arr});
        this.addCalculation(calculation);
        return calculation;
    }

    static zScore(arr){
        let calculation = this.create(Descriptive.zScore,{arr:arr},x);
        this.addCalculation(calculation);
        return calculation;
    }

    static meanAbsoluteDeviation(arr){
        let calculation = this.create(Descriptive.meanAbsoluteDeviation,{arr:arr});
        this.addCalculation(calculation);
        return calculation;
    }

    static sampleCorrelation(x,y){
        let calculation = this.create(Descriptive.sampleCorrelation,{a:x},{b:y});
        this.addCalculation(calculation);
        return calculation;
    }

    static populationCorrelation(x,y){
        let calculation = this.create(Descriptive.populationCorrelation,{a:x},{b:y});
        this.addCalculation(calculation);
        return calculation;
    }
}

module.exports = Statistics;