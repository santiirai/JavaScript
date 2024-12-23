function calculateBMI(weight, height) {
    // BMI formula: weight (kg) / (height (m) * height (m))
    let bmi = weight / (height * height);
    return bmi.toFixed(2); // returns the BMI value rounded to 2 decimal places
}

// Example usage
let weight = 70; // in kilograms
let height = 1.75; // in meters

bmi = calculateBMI(weight, height);
console.log("Your BMI is: " + bmi);
