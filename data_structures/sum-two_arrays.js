// I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.

// P.S. Each array includes only integer numbers. Output is a number too.

function arrayPlusArray(arr1, arr2) {
    return arr1.reduce((acc, cur) => acc + cur, 0) + arr2.reduce((acc, cur) => acc + cur, 0)
  }

// Solution Explanation:
/**
 * The arrayPlusArray function takes two arrays, arr1 and arr2, as input parameters.
 * The reduce method is used on arr1 to iterate over its elements and accumulate their sum. 
 * The reduce method takes a callback function and an initial value as arguments.
 * The callback function (acc, cur) => acc + cur is used to calculate the sum. It takes two parameters: acc (accumulator) and cur (current value). 
 * The function adds the current value to the accumulator and returns the result.
 * The initial value 0 is provided as the second argument to reduce, indicating that the accumulation starts from 0.
 * The two sums from arr1 and arr2 are added together using the + operator.
 */