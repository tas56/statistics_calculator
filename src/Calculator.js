const Calculation = require('../src/Models/Calculation');
const Sum = require('../src/Operations/Sum');
const Difference = require('../src/Operations/Difference');
const Product = require('../src/Operations/Product');
const Quotient = require('../src/Operations/Quotient');
const Exponentiation = require('../src/Operations/Exponentiation');
const Root = require('../src/Operations/Root');

class Calculator extends Calculation {

    static Calculations = [];

    static AddCalculation(calculation){
        Calculator.Calculations.push(calculation);
    }
    static Sum(a,b){
        let calculation = this.Create(a,b,Sum);
        this.AddCalculation(calculation);
        return calculation;
    }
    static Difference(a,b){
        let calculation = this.Create(a,b,Difference);
        this.AddCalculation(calculation);
        return calculation;
    }
    static Product(a,b){
        let calculation = this.Create(a,b,Product);
        this.AddCalculation(calculation);
        return calculation;
    }
    static Quotient(a,b){
        let calculation = this.Create(a,b,Quotient);
        this.AddCalculation(calculation);
        return calculation;
    }
    static Exponentiation(a,b){
        let calculation = this.Create(a,b,Exponentiation);
        this.AddCalculation(calculation);
        return calculation;
    }
    static Root(a,b){
        let calculation = this.Create(a,b,Root);
        this.AddCalculation(calculation);
        return calculation;
    }

}

module.exports = Calculator;