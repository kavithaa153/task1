// 1. API Task - User Names Uppercase

// API:
// https://jsonplaceholder.typicode.com/users

// Fetch all users.

// Use map()
// Convert all usernames to UPPERCASE.

// Print new array.

// 1. API Task - User Names Uppercase

function users() {
  let api = "https://jsonplaceholder.typicode.com/users";

  fetch(api)
    .then((response) => {
      return response.json();
    })

    .then((data) => {
      let result = data.map((user) => {
        return user.username.toUpperCase();
      });

      console.log(result);
    })

    .catch((error) => {
      console.log(error);
    });
}

users();

//===============================================================================================

// 2. API Task - Expensive Products

// API:
// https://fakestoreapi.com/products

// Fetch products.

// Use filter()
// Print products price greater than 100.

// 2. API Task - Expensive Products

function products() {
  let productApi = "https://fakestoreapi.com/products";

  fetch(productApi)
    .then((response) => {
      return response.json();
    })

    .then((product) => {
      let result = product.filter((item) => {
        return item.price > 100;
      });

      console.log(result);
    })

    .catch((error) => {
      console.log(error);
    });
}

products();

//=======================================================================

// 3. Date Concept Task - Digital Clock

// Create one Date object.

// Print:
// current hours
// current minutes
// current seconds

// Output Example:
// 10 : 45 : 30

function digitalClock() {

  let currentTime = new Date();

  let hours = currentTime.getHours();

  let minutes = currentTime.getMinutes();

  let seconds = currentTime.getSeconds();

  console.log(`${hours} : ${minutes} : ${seconds}`);
}

digitalClock();

//======================================================================================

// 4. String Concept Task - Username Checker

// Create one string:
// "   Naveen Kumar   "

// Remove spaces using trim().

// Convert into uppercase.

// Check string includes "KUMAR".

// Print final output.


function usernameChecker() {

  let username = "   Naveen Kumar   ";

  let trimName = username.trim();

  let upperCaseName = trimName.toUpperCase();

  let checkName = upperCaseName.includes("KUMAR");

  console.log("Original Name :", username);

  console.log("Trimmed Name :", trimName);

  console.log("Uppercase Name :", upperCaseName);

  console.log("Includes KUMAR :", checkName);
}

usernameChecker();

//======================================================================================================================================================================

// 5. Array Concept Task - Student Rank System

// Create one array:
// [450, 300, 700, 200, 900]

// Sort marks high to low.

// Print top 3 marks only using slice().

function studentRankSystem() {
    
  let marks = [450, 300, 700, 200, 900];

  let sortedMarks = [...marks].sort((a, b) => {
    return b - a;
  });

  let topMarks = sortedMarks.slice(0, 3);

  console.log("Original Marks :", marks);

  console.log("Sorted Marks :", sortedMarks);

  console.log("Top 3 Marks :", topMarks);
}

studentRankSystem();
