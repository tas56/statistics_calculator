const Calculation = require('../src/Models/Calculation');
const Op = require('./Operations/MathOperations');

class Calculator extends Calculation {

    static calculations = [];

    static addCalculation(calculation){
        Calculator.calculations.push(calculation);
    }
    static sum(a, b){
        let calculation = this.create(Op.sum,a,b);
        this.addCalculation(calculation);
        return calculation;
    }
    static difference(a, b){
        let calculation = this.create(Op.difference,a,b);
        this.addCalculation(calculation);
        return calculation;
    }
    static product(a, b){
        let calculation = this.create(Op.product,a,b);
        this.addCalculation(calculation);
        return calculation;
    }
    static quotient(a, b){
        let calculation = this.create(Op.quotient,a,b);
        this.addCalculation(calculation);
        return calculation;
    }
    static exponentiation(a, b){
        let calculation = this.create(Op.power,a,b);
        this.addCalculation(calculation);
        return calculation;
    }
    static root(a, b){
        let calculation = this.create(Op.root,a,b);
        this.addCalculation(calculation);
        return calculation;
    }

}

module.exports = Calculator;