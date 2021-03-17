const Calculator = require("../../Calculator");
module.exports = class Descriptive extends Calculator{

    static mean(arr){
        if (arr.length === 0) {
            throw("ERROR: empty array.");
        }
        let sum = 0;
        for(let i in arr) {
            sum += arr[i];
        }
        return (sum / arr.length);
    }

    static median(arr){
        let median = 0, count = arr.length;
        arr.sort();

        if (count % 2 === 0) {
            median = (arr[count / 2 - 1] + arr[count / 2]) / 2;
        } else {
            median = arr[(count - 1) / 2];
        }
        return median;
    }

    static mode(arr){
        let freq = 0, freqNum, list = [];

        arr.forEach(function(num){
            let foundNum = list.find( (el) => { return el.num === num });

            if(foundNum){
                foundNum.count++
                if(foundNum.count > freq){
                    freqNum = num;
                    freq = foundNum;
                }
            }
            else
                list.push({num: num, count: 1});
        })

        return freqNum;
    }

    static variance(arr, sample=true) {
        let n = arr.length;
        if (sample) {
            let sumSquares = arr.reduce((a, b) => a + b*b, 0);
            let squaredAvg = (arr.reduce((a, b) => a + b, 0) / n) ** 2;
            return ((sumSquares / n) - squaredAvg) * (n / (n-1));
        } else {
            let mean = Descriptive.mean(arr);
            return arr.reduce((a, b) => a + (b-mean)**2, 0) / n;
        }
    }

    static standardDeviation(arr){
        return Math.sqrt(Descriptive.variance(arr));
    }

    static quartiles(arr){
        //Quartiles separate a data set into four sections.
        // The median is the second quartile Q2.
        // It divides the ordered data set into higher and lower halves.
        // The first quartile, Q1, is the median of the lower half not including Q2.
        // The third quartile, Q3, is the median of the higher half not including Q2.
        let arrLength = arr.length;
        let Q1 = (.25 * arrLength+1);
        let Q3 = (.75 * arrLength+1);
        let Q2 = Q3 - Q1;
        let quartiles = 'Lower Quartile: ' + Q1 + ' | Middle Quartile: ' + Q2 +
            ' | Upper Quartile: ' + Q3;
        return quartiles;
    }

    static skewness(arr){
        let mean = Descriptive.mean(arr);
        let cubedDev = arr.reduce((a, b) => a + (b-mean) ** 3, 0);
        let stdDev = Descriptive.standardDeviation(arr, false);
        return (cubedDev / arr.length) / (stdDev ** 3);
    }

    static meanAbsoluteDeviation(arr){
        let mean = Descriptive.mean(arr);
        return Descriptive.mean(arr.map(function(num) {
            return Math.abs(num - mean);
        }));
    }

    static sampleCorrelation(x,y){
        //measure the strength of a linear association between two variables,
        // where the value r = 1 means a perfect positive correlation and the value
        // r = -1 means a perfect negative correlation

        //Step 1: Find the mean of x, and the mean of y
        // Step 2: Calculate the standard deviation for x and y
        // Step 3: Subtract the mean of x from every x value (call them "a"), and subtract the mean of y from every y value (call them "b")
        //Step 4: Add up all the results from step 3
        //Step 5: Divide the sum by the product of the standard deviations
        //Step 5: Divide the result by n-1 where n is the length of the arrays

        let lengthX = x.length;
        let lengthY = y.length;

        if (lengthX !== lengthY){
            return "Error: Arrays are not the same length. Cannot perform calculation";
        }

        let meanX = this.mean(x);
        let meanY = this.mean(y);
        let stdevX = this.standardDeviation(x);
        let stdevY = this.standardDeviation(y);

        let numerator = 0;
        let denominator = lengthX - 1;

        let counter;
        for (counter = 0; counter < lengthX; counter++){
            numerator += this.product(this.difference(x[counter], meanX), this.difference(y[counter], meanY));
        }

        let covariance = this.quotient(numerator, denominator);

        let sampleCorrelation = this.quotient(covariance, this.product(stdevX, stdevY));

        return sampleCorrelation;
    }

    static populationCorrelation(x,y){
        //measure the strength of a linear association between two variables,
        // where the value r = 1 means a perfect positive correlation and the value
        // r = -1 means a perfect negative correlation

        //Step 1: Find the mean of x, and the mean of y
        // Step 2: Calculate the standard deviation for x and y
        // Step 3: Subtract the mean of x from every x value (call them "a"), and subtract the mean of y from every y value (call them "b")
        //Step 4: Add up all the results from step 3
        //Step 5: Divide the sum by the product of the standard deviations
        //Step 5: Divide the result by n-1 where n is the length of the arrays

        let lengthX = x.length;
        let lengthY = y.length;

        if (lengthX !== lengthY){
            return "Error: Arrays are not the same length. Cannot perform calculation";
        }

        let meanX = this.mean(x);
        let meanY = this.mean(y);
        let stdevX = this.standardDeviation(x);
        let stdevY = this.standardDeviation(y);

        let numerator = 0;
        let denominator = lengthX - 1;

        let counter;
        for (counter = 0; counter < lengthX; counter++){
            numerator += this.product(this.difference(x[counter], meanX), this.difference(y[counter], meanY));
        }

        let covariance = this.quotient(numerator, denominator);

        let sampleCorrelation = this.quotient(covariance, this.product(stdevX, stdevY));

        return sampleCorrelation;
    }

   static zScore(score,mean,std) {
       return (score - mean) / std;
    }



}