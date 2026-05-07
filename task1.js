// Task :-  “Don’t run code immediately. First think → predict → then run.”

// Section 1: Variables (1–8) 

//1. What is the output?

    var a = 10;
    a = 15;

    console.log(a);  //15


//2. What happens here?

    let b = 20;
     // let b = 30;
    // let does not allow redeclaration, but it allows reinitialization


//3. What is the output? 

    const c = 50;
    console.log(c);    //50


// 4.Identify error:

    const x = 10;
    // x = 20;
    //  Error:--const does not allow reinitialization
    
// 5.Output?

    var p = 5;
    var p = 10;
    console.log(p);  //10
 


// 6.Output?  

    let q = 25;
    q = q + 10;
    console.log(q); //35


// 7.Output? 

    const r = 7;
    console.log(r + 3);  //10


// 8.Fill correct keyword:

//      _var__ a = 10;

//  =====================================================================================

// 🟢 Section 2: Console Methods (9–12)

// Which method prints normal output?

console.log("hi");

// Which method shows warning?

console.warn("Warning Message");


// Which method shows error?
 
console.error("Error Message");

// What does this do? 

console.clear(); 
//console.clear() clears/removes all messages from the console

//===========================================================

// 🟢 Section 3: Data Types (13–18)

// 13.Output?
let f = "hello";
console.log(typeof f); //string


// 14.Output?
let g = 100;
console.log(typeof g); //number


// 15.Output?  
let k = false;
console.log(typeof k);  //boolean


// 16.Output? 
let nu;
console.log(nu);  // undefined


// 17.What is type of null?  --object

// 18.Convert string to number: "25"
console.log(Number("25"));

//===================================================================

// 🟢 Section 4: Arrays (19–24) 

// 19.Create array of 3 fruits. 

var m=["apple","kiwi","orange"]

// 20.Output? 

let arr1 = ["a","b","c"];
console.log(arr1[1]);  //b

// 21.Output?

let arr2 = ["x","y","z"];
console.log(arr2[arr2.length-1]); //  "z"

// 22.How to get first element?

let arr3 = ["apple","banana"];

console.log(arr3[0]);  //apple

// 23.Output?

let arr4 = ["apple","banana"];
console.log(arr4.length);  //2

// 24.Add new element to array.
// two ways to add element into array.
// One using index position and another using push() method
// Method 1
console.log("Method 1");

let arr5 = ["apple","banana"];

arr5[2] = "orange";

console.log(arr5);

// Method 2
console.log("Method 2");

let arr6 = ["apple","banana"];

arr6.push("orange");   

console.log(arr6);

//===================================================================

// 🟢 Section 5: Objects (25–28)

//25. Create object with name & age.

var n={
    name:"Kavitha",
    age:23
}

// 26.Output?

let obj2= {name:"Naveen"};
console.log(obj2.name);  //Naveen

// 27.Output? 

let obj3= {
  fruits: ["apple","banana"]
};
console.log(obj3.fruits[1]);  // banana

// 28.How to access last element inside object array?

let arr7 = ["banana","jerry","orange"];

console.log(arr7[arr7.length - 1]); //orange

//=======================================================================================

// 🟢 Section 6: Arithmetic Operators (29–32)

// 29.Output?
console.log(5 + 3);     //8

// 30,Output?
console.log(10 % 3); //1 

// 31,Output?
console.log(2 ** 3);  //8

// 32,Output? 
console.log(10 / 2);  //5

//===================================================

// 🟢 Section 7: Increment / Decrement (33–36)

//33. Output?
let num1 = 5;
num1++;
console.log(num1);  // 6 


// 34.Output?
let num2 = 5;
let num3 = num2++;
console.log(num2, num3);  // 6 ,5

// 35.Output?
let x1 = 5;
let y1 = ++x1;
console.log(x1, y1);  // 6,6

//36. Output?
let m1 = 3;
let n1 = m1--;
console.log(m1, n1); // 2,3

//===================================================

// 🟢 Section 8: Comparison & Logical (37–39)
// 37.Output?
console.log(5 == "5");   //true

// 38.Output?
console.log(5 === "5"); //false

// 39.Output?
console.log(true && false || true);  // true

//======================================================================

// 🟢 Section 9: Ternary (40)
// 40.Output? 
5 > 3 ? console.log("Yes") : console.log("No"); //yes