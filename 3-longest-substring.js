/*
Given a string, find the length of the longest substring without repeating characters.

Example 1:

Input: "abcabcbb"
Output: 3 
Explanation: The answer is "abc", with the length of 3. 

iterate through the array
keep track of all chars we've seen so far in an object of char: timesincewe'veseenit
whenever we see a new one, add it to the object and increment each other object's counter
when we see an old one, reset that one's counter
*/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  const charTimesSince = {};
  let largest = [1];
  for (const char of s) {
    // we reset the count here so we can track the largest we've seen accurately
    // but that means it has to get set to -1, since we're adding 1 to it later
    let reset = false;
    if (charTimesSince[char] !== undefined) {
      reset = true;
    }
    charTimesSince[char] = -1;
    for (const key in charTimesSince) {
      charTimesSince[key] += 1;
      if (charTimesSince[key] > largest[largest.length - 1]) {
        largest.push(charTimesSince[key]);
      }
    }
    if (reset) {
      largest.pop();
    }

  }
  return largest.pop();
}