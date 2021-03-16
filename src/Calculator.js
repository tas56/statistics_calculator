const Calculation = require('../src/Models/Calculation');
const Op = require('./Operations/MathOperations');

class Calculator extends Calculation {

    static calculations = [];

    static addCalculation(calculation){
        Calculator.calculations.push(calculation);
    }
    static sum(a, b){
        let calculation = this.create(Op.sum,{a:a,b:b});
        this.addCalculation(calculation);
        return calculation;
    }
    static difference(a, b){
        let calculation = this.create(Op.difference,{a:a,b:b});
        this.addCalculation(calculation);
        return calculation;
    }
    static product(a, b){
        let calculation = this.create(Op.product,{a:a,b:b});
        this.addCalculation(calculation);
        return calculation;
    }
    static quotient(a, b){
        let calculation = this.create(Op.quotient,{a:a,b:b});
        this.addCalculation(calculation);
        return calculation;
    }
    static exponentiation(a, b){
        let calculation = this.create(Op.power,{a:a,b:b});
        this.addCalculation(calculation);
        return calculation;
    }
    static root(a, b){
        let calculation = this.create(Op.root,{a:a,b:b});
        this.addCalculation(calculation);
        return calculation;
    }

}

module.exports = Calculator;