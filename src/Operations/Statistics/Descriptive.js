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
            let mean = this.mean(arr);
            return arr.reduce((a, b) => a + (b-mean)**2, 0) / n;
        }
    }
    // Calculates the Standard Deviation
    static standardDeviation(arr){
        return Math.sqrt(this.variance(arr));
    }



}