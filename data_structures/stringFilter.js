/**
 * TASK
 * Make a program that filters a list of strings and returns a list with only your friends name in it.

If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]
 */
// My Solution:
function myFriend(array){
    return array.filter(element => element.length === 4)
}

/**
 * The filter method checks if the length of each element is equal to 4. If the condition is true, the element is included in the filtered array.
 */