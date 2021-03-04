const Calculation = require('../src/Models/Calculation');
const op =require('./Operations/MathOperations');

class Calculator extends Calculation {

    static Calculations = [];

    static AddCalculation(calculation){
        Calculator.Calculations.push(calculation);
    }
    static Sum(a,b){
        let calculation = this.Create(op.sum,a,b);
        this.AddCalculation(calculation);
        return calculation;
    }
    static Difference(a,b){
        let calculation = this.Create(op.difference,a,b);
        this.AddCalculation(calculation);
        return calculation;
    }
    static Product(a,b){
        let calculation = this.Create(op.product,a,b);
        this.AddCalculation(calculation);
        return calculation;
    }
    static Quotient(a,b){
        let calculation = this.Create(op.quotient,a,b);
        this.AddCalculation(calculation);
        return calculation;
    }
    static Exponentiation(a,b){
        let calculation = this.Create(op.power,a,b);
        this.AddCalculation(calculation);
        return calculation;
    }
    static Root(a,b){
        let calculation = this.Create(op.root,a,b);
        this.AddCalculation(calculation);
        return calculation;
    }

}

module.exports = Calculator;