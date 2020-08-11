/*

We have a collection of stones, each stone has a positive integer weight.

Each turn, we choose the two heaviest stones and smash them together.
Suppose the stones have weights x and y with x <= y.  The result of this smash is:

If x == y, both stones are totally destroyed;
If x != y, the stone of weight x is totally destroyed, and the stone of weight y has new weight y-x.
At the end, there is at most 1 stone left.  Return the weight of this stone (or 0 if there are no stones left.)

 

Example 1:

Input: [2,7,4,1,8,1]
Output: 1
Explanation: 
We combine 7 and 8 to get 1 so the array converts to [2,4,1,1,1] then,
we combine 2 and 4 to get 2 so the array converts to [2,1,1,1] then,
we combine 2 and 1 to get 1 so the array converts to [1,1,1] then,
we combine 1 and 1 to get 0 so the array converts to [1] then that's the value of last stone.

inputs: an array of positivi integers
output: integer
constraints:
  1 <= stones.length <= 30
  1 <= stones[i] <= 1000
edge cases: if all the stones destroy each other, return 0

[2, 3, 4, 5]
remove: [4, 5], smash: 1, new: [2, 3, 1]
remove: [2, 3], smash: 1, new: [1, 1]
remove: [1, 1], smash: 0, new: []
return 0
0. recrusively:
1. sort input
2. remove and smash the last 2
3. if smashed value !== 0; add the smashed value back into the array
4. recur with the new array
*/
/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(smashingArray) {
  if (smashingArray.length === 0) {
    return 0;
  } else if (smashingArray.length === 1) {
    return smashingArray[0];
  }
  smashingArray.sort();
  const smashPair = smashingArray.splice(smashingArray.length - 2, 2);
  smashingArray.push(smashPair[0] - smashPair[1]);
  return lastStoneWeight(smashingArray);
}
/*
0. recrusively:
1. sort input
2. remove and smash the last 2
3. if smashed value !== 0; add the smashed value back into the array
4. recur with the new array 
*/
};