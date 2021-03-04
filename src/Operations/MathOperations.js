module.exports = class MathOperations {

    static sum(a,b = null){
        if(Array.isArray(a)){
            return a.reduce((a, b) => a + b);
        } else return a + b;
    }
    static difference(a,b){
        return a - b;
    }
    static product(a,b){
        return a * b;
    }
    static quotient(a,b){
        return a / b;
    }
    static power(a, b){
        return Math.pow(a,b);
    }
    static root(a, b){
        return Math.pow(a, 1/b);
    }


}