// Function to calculate BMI
let result = calculateBMI(32,4);
function calculateBMI(weight, height) {
    if (weight <= 0 || height <= 0) {
        return "Weight and height must be positive values.";
    }
    return (weight / (height * height));
}
console.log(result)
