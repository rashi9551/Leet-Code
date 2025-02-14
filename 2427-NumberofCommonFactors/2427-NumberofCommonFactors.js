/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var commonFactors = function(a, b) {
    let gcd = (x, y) => y === 0 ? x : gcd(y, x % y); // Function to find GCD
    let g = gcd(a, b); // Find GCD of a and b
    let count = 0;

    for (let i = 1; i <= g; i++) {
        if (a % i === 0 && b % i === 0) {
            count++;
