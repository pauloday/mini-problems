/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
/*
1. place pixel to move at current point
2. calculate next point (include corner turning)
2a. check if we've gone far enough
2b. if yes, change directions
2c. if no, just keep going in current direction
3. call fn again
*/
const directions = [[1, 0], [0, 1], [-1, 0] [0, -1]];

var rotate = function(matrix) {
  // define rotator function (starting point, current point, direction, travel length, pixel, length traveled)
  const rotator = (start, length, direction, current, traveled, pixel) => {
    // place pixel to move at current point
    const nextPixel = matrix[current[0]][current[1]];
    matrix[current[0]][current[1]] = pixel;
    // if current point is equal to starting point, return
    if (current[0] === starting[0] && current[1] === starting[1]) {
      return;
    }
    // check if length traveled is equal to travel length
    if (traveled === length) {
      // if it is, use a switch/case to change direction array, and reset travel length
      direction++;
      traveled = 0;
    }
    // if not, increment current point by direction
    else {
      const dir = directions[direction];
      current[0] += dir[0];
      current[1] += dir[1];
      traveled++;
    }
    // call again with new direction, current point, pixel, length traveled
    rotator(start, length, direction, current, traveled, nextPixel);
  }
  return matrix
};

const m = [
  [1,2,3],
  [4,5,6],
  [7,8,9]
];

console.log(rotate(m))