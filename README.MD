# Definition of Object-oriented programming

Object-oriented programming is a programming model that organizes the software design around data (objects), rather than functions and logic. Objects are data that have unique attributes and behavior.

Some basic terminologies of object-oriented design include:

**Class:** The model for what an object can do. I like to think of it as the blueprint/rules of an object.

**Method/Function:** a group of statements that together perform a task.

**Object:** the instance of a class.

**Instance:** a concrete occurrence of any object, existing usually during the runtime of a computer program

Many languages use the OOP architecture for their design. For the purpose of this tutorial we will be using JavaScript, however these concepts apply across many different programming languages.

# Principles of OOP

**Object-oriented programming is based on the following four principles:**

**1. Encapsulation**

This means that object keeps its own personal data/state private from within that object. Other classes/objects cannot directly access or modify the data within another object, instead objects can only communicate with each other through functions. An object manages its own state via these functions and no other class can alter it unless explicitly allowed. In order to communicate with the object, you will need to utilize the functions provided.

````
    GetResults() {
        return this.op(this.a,this.b)
    }

````

This repo has many demonstrations of encapsulation, however in Calculation.js you will find this method which is the most obvious encapsulation. The *GetResults()* method returns the results of an operation. Other classes can access the results of an operation through this method.

 

**2. Inheritance**

Inheritance is a concept that allows for code reuse when objects are similar and have similar properties. It means that you create classes by them extensions of the another class which allows for code reuse from the higher class. This creates a hierarchy and a parent-child relationship among the classes. As you move down the hierarchy the child class will inherit all properties of the parents above them and the child will then be able to implement it’s own properties as well. 

````
class Calculator extends Calculation {

....

}

class Statistics extends Calculator {

....

}

````

In the above code you will see two classes that use the *extends* keyword. This keyword litterally means that it is extending from the parent class. So, Calculator is an extension of Calcualtion and Statistics is an extension of Calcualator. Notice the hierarchy. Calculator will inherit and have use of all of the properties of Calcualtion and Statistics will inherit all of the properties of Calculator AND Calculation. The Calculator class holds basic arithmetic operations that any statistics calculator may need to use. So it is best to reuse that code by extending the class.


**3. Abstraction**

An abstraction in OOP is a way of hiding the implementation details and showing only the functionality to the users. This is essentially an extension of encapsulation because data is being kept from other objects, however at an even higher level than encapsulation. Abstraction hides internal implementation details. With this concept, you just need to know which methods of the object are available to call and which input parameters are needed to trigger a specific operation. But you don’t need to understand how this method is implemented and which kinds of actions it has to perform to create the expected result. To sum it up, abstraction means hide details and show essentials.

````
    static Calculations = [];

    static AddCalculation(calculation){
        Calculator.Calculations.push(calculation);
    }
    static Sum(a,b){
        let calculation = this.Create(a,b,Sum);
        this.AddCalculation(calculation);
        return calculation;
    }

````

The *Calculations* array stores an array of inputed operations. The *AddCalculations()* method is how calculations are pushed into the array. Notice that everytime an operation is performed, the *AddCalculations()* method is called. This is an example of abstraction because the code simply does the job but whatever other class calls an operation they do not also need to add the calculation to the array, it simply does it for you. 

**4. Polymorphism**

Breaking the word up, Poly means many and Morph means forms. Therefore, polymorphism essentially means “many forms”.


# SOLID in OOP

Now that we have an understanding of Object-oriented programming and the principles that make it what it is another important concept is the SOLID principles. These principles are a general set of rules that programmers should follow to write clean, readable and easy-to-understand code. 


**1. S – Single Responsibility Principle**

This principle states that functions and classes should have one and only one responsibility. 
````
class Calculation {

    constructor(a,b,op) {
        this.a = a;
        this.b = b;
        this.op = op;
    }

    static Create(a,b,op){
       return new Calculation(a,b,op);
    }
````

The Create method in this example makes for one and only one place in a program that creates the calculation object. This methods only responsibility is to instatiate new calculation objects

**2. O – Open/Closed Principle**
Objects or entities should be open for extension but closed for modification.
This means that a class should be open for extension but closed for modifiation.
Let's revisit the calculation class for this example.

````
class Calculation {

    constructor(a,b,op) {
        this.a = a;
        this.b = b;
        this.op = op;
    }

    static Create(a,b,op){
       return new Calculation(a,b,op);
    }

    GetResults() {
        return this.op(this.a,this.b)
    }
}
````

One way this could have been implemented is by using if/else or switch statements to calculate and return the results of a called operation. However, that violates the open/closed principle because when new operations are added you would have had to go into the function and add another statement. What this does instead is collects the operation information when a new operation is called so it can then call that operation. The code can then easily be extended and does not have to be modified.

**3. L – Liskov’s Substitution Principle**

Liskov Substitution Principle states:
Let q(x) be a property provable about objects of x of type T. Then q(y) should be provable for objects y of type S where S is a subtype of T.
This means that every subclass or derived class should be substitutable for their base or parent class.

Take the example of the Statistics class, which inherits from Calculator. In order to follow this rule, everywhere that the Statistics calculator is called or used, it must be suitable for use by the Calculator class and all of its properties as well. 

**4. I – Interface Segregation Principle**
Interface Segregation Principle states: A client should never be forced to implement an interface that it doesn’t use, or clients shouldn’t be forced to depend on methods they do not use.

This basically means that whenever you implement an interface you need to have a reason to use every single attribute defined in that interface, otherwise it does not make sense to use the interface. In JavaScript, there is no such thing as interfaces like there is in other object-oriented languages. However this principle can still be applicable. JavaScript can use this principle instead through classes and inheritance.  

**5. D – Dependency Inversion Principle** 
Dependency inversion principle states:
Entities must depend on abstractions, not on concretions. It states that the high-level module must not depend on the low-level module, but they should depend on abstractions.

````
let calculation = Calculation.Create(a,b,Product);
````

# Design Patterns

**Behavioural**
_Chain of Responsibility Pattern_

This is a behavioural design pattern that provides a chain of loosely coupled objects. Each of these objects can choose to act on or handle the request of the client.

For example, we can use this pattern to create a class that stores the cumulative sum of mathematical operations that are performed by a calculator.

We create a new CumulativeSum class. When called on, this class will initialize a sum of zero. It's add method will add the results to the cumulated sum and the getCumulativeSum will return those results.

````
class CumulativeSum {

    constructor(intialValue = 0) {
        this.sum = intialValue;
    }

    add(value) {
        this.sum += value;
        return this;
    }

    getCumulativeSum() {
        return this.sum;
    }
}
````

This CumulativeSum class can then be used in the calculator class by creating a new instance for each new calculator instance. Each operation then calls the add() method and passes the results of the calculation, which then adds those results to the cumulative sum.

````
    static cumulativeSum = new CumulativeSum();

    static Sum(a,b){
        let calculation = this.Create(a,b,Sum);
        this.AddCalculation(calculation);
        this.cumulativeSum.add(calculation.GetResults());
        return calculation;
    }

````

**Structural Pattern**
_Decorator Pattern_

This is a structural design pattern that focuses on the ability to add behaviour or functionalities to existing classes dynamically.

For example, we will take a look at the calculation.js class. This class is implementing a decorator design pattern because ass you can see it is dynamically adding the operation functionality to the methods of the class. While each operation is not included in a class, the mathematical operations are passed dynamically to the functions. The behaviour of this class changes based on the operation that is passed to it.

````
class Calculation {

    constructor(a,b,op) {
        this.a = a;
        this.b = b;
        this.op = op;
    }

    static Create(a,b,op){
       return new Calculation(a,b,op);
    }

    GetResults() {
        return this.op(this.a,this.b)
    }
}

````

**Creational Pattern**
_Builder Pattern_

````

````




[![Coverage Status](https://coveralls.io/repos/github/tas56/is219calculator/badge.svg?branch=master)](https://coveralls.io/github/tas56/is219calculator?branch=master)
[![Build Status](https://travis-ci.org/tas56/is219calculator.svg?branch=master)](https://travis-ci.org/tas56/is219calculator)

