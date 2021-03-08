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



// Null Object Pattern
// Makes it so you never have to check if data is null anywhere else in code
// Reduces redundancy and the chance of missing checks in larger code bases
// In Null Object pattern, a null object replaces check of NULL object instance.
// Instead of putting if check for a null value, Null Object reflects a do
//  nothing relationship. Such Null object can also be used to provide
// default behaviour in case data is not available.

class NullData {

    constructor() {
        this.a = null;
        this.b = null;
        this.arr = null;
    }

    getData(){
        if((this.a == null && this.b == null) || (this.arr == null)){
            return new NullData();
        }

    }
}
