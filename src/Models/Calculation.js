class Calculation {

    constructor(op, a=null,b=null) {
        this.a = a;
        this.b = b;
        this.op = op;
    }

    static Create(op, a = null,b = null){
       return new Calculation(op,a,b);
    }

    GetResults() {
        if(Array.isArray(this.a)){
            return this.op(this.a)
        }
        return this.op(this.a,this.b)
    }

}
module.exports = Calculation;