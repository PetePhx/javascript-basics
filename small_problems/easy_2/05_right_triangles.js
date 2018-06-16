/*

Right Triangles

Write a function that takes a positive integer, n, as an argument, and logs a right triangle whose sides each have n stars. The hypotenuse of the triangle (the diagonal side in the images below) should have one end at the lower-left of the triangle, and the other end at the upper-right.

Examples:

triangle(5);

    *
   **
  ***
 ****
*****

*/

function triangle(num) {
  for (var i = 1; i <= num; i++) {
    console.log(' '.repeat(num - i) + '*'.repeat(i));
  }
}

triangle(5);
triangle(9);
triangle(25);
