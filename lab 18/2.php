<?php
// Define a global variable
$globalVar = "Accessible everywhere!";

function demonstrateGlobals() {
    // Access the global variable using $GLOBALS
    echo "Inside the function, global variable: " . $GLOBALS['globalVar'] . "<br>";

    // Modify the global variable
    $GLOBALS['globalVar'] = "I have been modified inside the function!";
}

echo "<h2>Demonstration of \$GLOBALS</h2>";
echo "Before function call: $globalVar<br>";
demonstrateGlobals();
echo "After function call: $globalVar<br>";
?>
