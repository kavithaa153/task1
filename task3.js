// Looping Statements

// 1. Print Numbers
// Print numbers from 1 to 20 using a for loop.

for (let num = 1; num <= 20; num++) {

    console.log(num);

}

//=========================================================================

// 2. Odd Numbers
// Print all odd numbers from 1 to 50.

for (let a = 1; a <= 50; a++) {

    if (a % 2 == 1) {

        console.log(a);

    }

}

//===========================================================================

// 3. Multiplication Table
// Print the multiplication table of 7.
// Example:
// 7 x 1 = 7
// 7 x 2 = 14

for (let b = 1; b <= 10; b++) {

    console.log(7 + " x " + b + " = " + (7 * b));

}

//============================================================================

// 4. Reverse Counting
// Using while loop, print numbers from 20 to 1.

let count = 20;

while (count >= 1) {

    console.log(count);

    count--;

}

//=======================================================

// 5. Sum of Numbers
// Find the total sum of numbers from 1 to 100.

let sum = 0;

for (let c = 1; c <= 100; c++) {

    sum = sum + c;

}

console.log(sum);

//===================================================================

// 6. Array Loop
// Loop through this array and print all values.

let fruits = ["apple", "banana", "orange", "grapes"];

for (let i = 0; i < fruits.length; i++) {

    console.log(fruits[i]);

}

//=============================================================================

// 7. Count Even Numbers
// Count how many even numbers are present between 1 to 50.

let count1 = 0;

for (let j = 1; j <= 50; j++) {

    if (j % 2 == 0) {

        count1 = count1 + 1;

    }

}

console.log("Count Even Number " + count1);

//==========================================================================

// 8. Star Pattern
// Print this pattern using loops:
// *
// **
// ***
// ****
// *****

for (let k = 1; k <= 5; k++) {

    let pattern = "";

    for (let m = 1; m <= k; m++) {

        pattern = pattern + "*";

    }

    console.log(pattern);

}

//======================================================================================

// Functions

// 9. Simple Function
// Create a function named welcome() that prints:
// Welcome to JavaScript

function welcome() {

    console.log("Welcome to JavaScript");

}

welcome();

//============================================================================================

// 10. Function with Parameter
// Create a function that accepts a name and prints:
// Hello Naveen

function section(name) {

    console.log("Hello " + name);

}

section("Naveen");

//========================================================================================================

// 11. Add Two Numbers
// Create a function that takes 2 numbers and returns the addition.
// Example:
// add(10,20)
// Output:
// 30

function addTwo(a, b) {

    return a + b;

}

console.log(addTwo(10, 20));

//==========================================================================

// 12. Salary Bonus
// Create a function that adds bonus to employee salary.
// Example:
// salary = 50000
// bonus = 5000
// Output:
// 55000

function totalSalary(salary, bonus) {

    return salary + bonus;

}

console.log(totalSalary(50000, 5000));

//=============================================================================

// 13. Object Loop
// Print all keys and values using for in.

let student = {

    name: "Rahul",
    course: "JavaScript",
    marks: 95

};

for (let key in student) {

    console.log(key + " : " + student[key]);

}

//=============================================================================

// 14. Find Largest Number
// Create a function to find the largest number between two values.
// Example:
// largest(10,50)
// Output:
// 50

function largest(a, b) {

    if (a > b) {

        return a;

    } else {

        return b;

    }

}

console.log(largest(10, 50));

//===============================================================================================

// 15. Mini Employee Task
// Create an employee object and print:
// Employee Name
// Department
// Salary
// Salary after bonus

let employee = {

    name: "Kaviya",
    department: "Developer",
    salary: 50000

};

function bonusSalary(salary, bonus) {

    return salary + bonus;

}

console.log("Employee Name : " + employee.name);

console.log("Department : " + employee.department);

console.log("Salary : " + employee.salary);

console.log("Salary After Bonus : " + bonusSalary(employee.salary, 5000));