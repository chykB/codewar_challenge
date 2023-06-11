//Task
/**
 * Provided is a function Kata which accepts two parameters in the following order: array, element and returns the index of the element if found and "Not found" otherwise. Your task is to shorten the code as much as possible in order to meet the strict character count requirements of the Kata. (no more than 161) You may assume that all array elements are unique.
*/
//Code to be shortened
/** 
  function find(array, element){
   for (let i = 0; i < array.length; i++) {
     if (array[i] === element) return i;
   }
   return "Not found";
   }
  }*/

 //My solution
 const find = (a,e,i) => (i = a.indexOf(e)) >= 0 ? i : "Not found";
  
 