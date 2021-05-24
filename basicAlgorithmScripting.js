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


// console.log(titleCase("I'm a little tea pot"));

// You are given two arrays and an index.
//
//     Copy each element of the first array into the second array, in order.
//
//     Begin inserting elements at index n of the second array.
//
//     Return the resulting array. The input arrays should remain the same after the function runs.

function frankenSplice(arr1, arr2, n) {
    let arr1mod =  arr1;
    let arr2mod = [...arr2];
    arr1mod.forEach((element, index) => {
        arr2mod.splice((n+index), 0, element)
    });
    console.log(arr2mod);
    console.log(arr2);
    return arr2mod;
}

// frankenSplice([1, 2, 3], [4, 5, 6], 1);

// Remove all falsy values from an array.
//
//     Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
//
//     Hint: Try converting each value to a Boolean.

function bouncer(arr) {
    // let arr1mod;
    // arr.forEach((e,i)=> {
    //     // if (!e) {
    //     //     console.log('false ' + e)
    //     //     // arr.filter(x=> x == false)
    //     // } else {
    //     //     console.log('true ' + e)
    //     // }
    //     if (!e) {
    //         arr1mod = arr.filter(x=> x == e)
    //     }
    // })
    // return arr1mod;
    let arr1mod;
    arr.forEach((e,i)=> {

        if (!e || e == 0 || e == undefined || e == "" || e == NaN || e == e) {
            arr1mod = arr.filter(x=> x)
        }
    })
    return arr1mod;

}

console.log(bouncer([7, "ate", "", false, 9]));
console.log(bouncer(["a", "b", "c"]));
console.log(bouncer([false, null, 0, NaN, undefined, ""]));
console.log(bouncer([null, NaN, 1, 2, undefined]));

// Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.
//
//     For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).
//
// Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).

function getIndexToIns(arr, num) {
    return num;
}

getIndexToIns([40, 60], 50);

// Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.
//
//     For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.
//
// The arguments ["hello", "hey"] should return false because the string hello does not contain a y.
//
//     Lastly, ["Alien", "line"], should return true because all of the letters in line are present in Alien.

function mutation(arr) {
    let arr1 = arr[0];
    let arr2 = arr[1];

    arr1.forEach((e, i) => {
        arr2.includes(e.toLowerCase())
    });

    return arr;
}

mutation(["hello", "hey"]);

// Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.


function chunkArrayInGroups(arr, size) {
    let loopNum = Math.ceil(arr.length / size);
    let newArr = [];
    let subArr = [];
    let currIndex = 0;
    while (loopNum > 0) {
        debugger
        subArr = [];
        for (let i = 0; (i < size && arr[currIndex] != undefined); i++) {
            subArr.push(arr[currIndex]);
            currIndex++
        }
        loopNum--;
        newArr.push(subArr);
    }
    return newArr;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3));
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3));