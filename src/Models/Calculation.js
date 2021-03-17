module.exports = class Calculation {

    constructor(op, a=null, b=null, c=null, d=null) {
        this.op = op;
        this.a = a;
        this.b = b;
        this.c = c;
        this.d = d;
    }

    static create(op, a, b, c, d) {
        return new Calculation(op, a, b, c, d);
    }

    getResults() {

        return this.op(this.a, this.b, this.c, this.d);

    }


}


