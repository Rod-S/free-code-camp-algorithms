// The algorithm to convert from Celsius to Fahrenheit is the temperature in
// Celsius times 9/5, plus 32.
// You are given a variable celsius representing a temperature in Celsius.
// Use the variable fahrenheit already defined and assign it the Fahrenheit temperature
// equivalent to the given Celsius temperature. Use the algorithm mentioned above to
// help convert the Celsius temperature to Fahrenheit.

// function convertToF(celsius) {
//     let fahrenheit;
//     fahrenheit = celsius * (9/5) + 32;
//     return fahrenheit;
// }
//
// console.log(convertToF(30));;

// Reverse the provided string.
//     You may need to turn the string into an array before you can reverse it.
//     Your result must be a string.

// function reverseString(str) {
//     let strArr;
//     let revStr;
//     strArr = str.split("");
//     revStr = strArr.reverse().join("").toString();
//     return revStr;
// }
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

// console.log(factorialize(5));;