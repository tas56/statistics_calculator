module.exports = class Descriptive {

    // Calculates mean of an array
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
    // Calculates median of an array
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
    // Calculates mode of an array
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
    // Calculate the variance of an array of numbers
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
    // Calculates the Standard Deviation
    static standardDeviation(arr){
        return Math.sqrt(Descriptive.variance(arr));
    }
    // Calculates the Quartiles

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

    // Calculates the skewness
    static skewness(arr){
        let mean = Descriptive.mean(arr);
        let cubedDev = arr.reduce((a, b) => a + (b-mean) ** 3, 0);
        let stdDev = Descriptive.standardDeviation(arr, false);
        return (cubedDev / arr.length) / (stdDev ** 3);
    }




}