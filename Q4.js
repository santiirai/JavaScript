// Function to calculate the factorial of a number
let result = factorial(3);
function factorial(n) {
    if (n < 0) {
        return "Please input positive number.";
    }
    if (n === 0 || n === 1) {
        return 1;
    }
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}
console.log(result)