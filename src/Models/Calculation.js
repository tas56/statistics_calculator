module.exports = class Calculation {

    constructor(op, {a, b, arr} = { }) {
        this.op = op;
        this.a = a;
        this.b = b;
        this.arr = arr;
    }

    static create(op, {a, b, arr} = { }) {
        return new Calculation(op, {a: a, b: b, arr: arr});
    }

    getResults() {
        if(this.arr != null){
            return this.op(this.arr)
        } else if (this.a && this.b != null){
            return this.op(this.a,this.b);
        } else throw("ERROR: calculation cannot be performed, must pass 2 numbers or an array.");
    }

}
