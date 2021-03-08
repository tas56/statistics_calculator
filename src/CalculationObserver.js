// OBSERVER PATTERN:
// One to many relationship from object
// The Observer pattern offers a subscription model in which objects subscribe to an
// event and get notified when the event occurs.
// Waits for a signal/event from the observer before it run
// Essentially is an event listener


module.exports = class CalculationObserver {

    constructor() {
           this.calculations = [];
           this.sum = 0;
       }

       addCalculation(fn){
            this.calculations.push(fn)
       }

       removeCalculation(fn){
           this.calculations = this.calculations.filter(
               calc => {
                   if (calc !== fn) {
                       return calc;
                   }
           });
       }

    clear(){
        this.calculations = [];
    }

    // This function is an example of the the signal
    // Loops through all of the functions that were stored in this class and
    // calls their getResults function and adds the total sum
    cumulativeSum() {
        this.calculations.forEach( calc => {
            this.sum += calc.getResults();
        });
        return this.sum;
    }
}

