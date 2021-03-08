// BUILDER PATTERN
// Useful for objects that have optional or required fields.
// The Builder pattern allows a client to construct a complex
// object by specifying the type and content only. Construction details are hidden from the client entirely.


// class Calculation {
//
//     constructor(op, a=null,b=null) {
//         this.a = a;
//         this.b = b;
//         this.op = op;
//     }
//
//     static create(op, a = null,b = null){
//        return new Calculation(op,a,b);
//     }
//
//     getResults() {
//         if(Array.isArray(this.a)){
//             return this.op(this.a)
//         }
//         return this.op(this.a,this.b)
//     }
//
// }

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
