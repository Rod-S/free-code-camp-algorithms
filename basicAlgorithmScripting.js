// The algorithm to convert from Celsius to Fahrenheit is the temperature in
// Celsius times 9/5, plus 32.
// You are given a variable celsius representing a temperature in Celsius.
// Use the variable fahrenheit already defined and assign it the Fahrenheit temperature
// equivalent to the given Celsius temperature. Use the algorithm mentioned above to
// help convert the Celsius temperature to Fahrenheit.

function convertToF(celsius) {
    let fahrenheit;
    fahrenheit = celsius * (9/5) + 32;
    return fahrenheit;
}
//
// console.log(convertToF(30));;

// Reverse the provided string.
//     You may need to turn the string into an array before you can reverse it.
//     Your result must be a string.

function reverseString(str) {
    let strArr;
    let revStr;
    strArr = str.split("");
    revStr = strArr.reverse().join("").toString();
    return revStr;
}
//
// console.log(reverseString("hello"));

// Return the factorial of the provided integer.
//
//     If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.
//
//     Factorials are often represented with the shorthand notation n!

function factorialize(num) {
    if (num == 1 || num == 0) return 1;
    let currentNum = num;
    let currentVal = [];
    let endVal = num;
    if (num = 1) return 1;
    while (currentNum > 0) {
        currentVal.push(currentNum);
        currentNum -= 1;
    }
    for (let i = num -1; i > 0; i--) {
        endVal *= currentVal[i];
    }
    return endVal;
}

// console.log(factorialize(5));

// Find the Longest Word in a String
// Return the length of the longest word in the provided sentence.
//
//     Your response should be a number.

function findLongestWordLength(str) {
    let strArr = str.split(" ");
    let longestWord = "";
    strArr.forEach((e) => {
        if (e.length > longestWord.length) {
            longestWord = e;
        }
    })
    return longestWord.length;
}

// findLongestWordLength("The quick brown fox jumped over the lazy dog");

// Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.
//
//     Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].

function largestOfFour(arr) {
    let lgArr = [];
    arr.forEach((array, i) => {
        let currLg = 0;
        arr[i].forEach((val) => {
            if (val > currLg || (val < 0) && currLg === 0) {
                currLg = val;
            }
        })
        lgArr.push(currLg);
        });
    return lgArr;
}

// largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

// Check if a string (first argument, str) ends with the given target string (second argument, target).
//
// This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.

function confirmEnding(str, target) {
    let indexCompare = str.length - target.length;
    let slicedStr = str.slice(indexCompare, str.length);
    if (target == slicedStr) return true;
    else return false;
}

// confirmEnding("Bastian", "n");

// Repeat a String Repeat a StringPassed
// Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number. For the purpose of this challenge, do not use the built-in .repeat() method.

function repeatStringNumTimes(str, num) {
    let repStr = "";
    for (var i=0; i< num; i++) {
        repStr += str;
    }
    return repStr;
}

// repeatStringNumTimes("abc", 3);

// Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.

function truncateString(str, num) {
    if (str.length > num) {
        let truncStr = str.slice(0, num) + "...";
        return truncStr;
    }
    return str;
}

// truncateString("A-tisket a-tasket A green and yellow basket", 8);
// truncateString("Peter Piper picked a peck of pickled peppers", 11)

// Create a function that looks through an array arr and returns the first element in it that passes a 'truth test'. This means that given an element x, the 'truth test' is passed if func(x) is true. If no element passes the test, return undefined.

function findElement(arr, func) {
    let num = 0;
    let found;
    arr.forEach((e) => {
        if (func(num) == e) {
            found = true;
            return true;
        }
    })
    if (found) return true
    else return undefined;
}

// console.log(findElement([0,1,2,3,4], num => num % 2 === 0));;

// function (num) {
//     return num % 2 === 0;
// }

// Check if a value is classified as a boolean primitive. Return true or false.
//
//     Boolean primitives are true and false.

function booWho(bool) {
    if (bool === true) {
        return true
    } else if (bool === false) {
        return true
    } else return false}

booWho(null);

// console.log(booWho(null));;

// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
//
// For the purpose of this exercise, you should also capitalize connecting words like the and of.

function titleCase(str) {
    let strArr = str.split(" ");
    strArr = strArr.map(e=>
        e.charAt(0).toUpperCase() + e.slice(1, e.length).toLowerCase()
    );
    strArr = strArr.join(" ");
    return strArr;
}


console.log(titleCase("I'm a little tea pot"));;