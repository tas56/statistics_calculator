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

**3. L – Liskov’s Substitution Principle**

**4. I – Interface Segregation Principle**

**5. D – Dependency Inversion Principle** 


[![Coverage Status](https://coveralls.io/repos/github/tas56/is219calculator/badge.svg?branch=master)](https://coveralls.io/github/tas56/is219calculator?branch=master)
[![Build Status](https://travis-ci.org/tas56/is219calculator.svg?branch=master)](https://travis-ci.org/tas56/is219calculator)

