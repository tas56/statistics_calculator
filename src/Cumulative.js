// This is a behavioural design pattern
// Chain of responsibility pattern
// In this pattern a constructor initializes the sum to 0


module.exports = class CumulativeSum {

    constructor(initialValue = 0) {
        this.sum = initialValue;
    }

    add(value) {
        this.sum += value;
        return this;
    }

    getCumulativeSum() {
        return this.sum;
    }

    clearCumulativeSum(){
        this.sum = 0;
    }
}