//reverse a string using do-while loop
function revString(str) {
    let reversedStr = "";
    let i = str.length - 1;

    do {
        reversedStr += str[i];
        i--;
    } while (i >= 0);

    return reversedStr;
}

// Example usage:
let orgString = "Hello, World!";
let reversedString = revString(orgString);

console.log(`Original String: ${orgString}`);
console.log(`Reversed String: ${reversedString}`);
