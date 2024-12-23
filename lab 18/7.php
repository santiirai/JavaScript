<!-- Write a PHP script that reads lines from a file named "search.txt" using fgets().
Continue reading until a specific string "STOP" is encountered. Display all lines
read before encountering "STOP" on the web page. -->
<?php
// Define the file name
$filename = "search.txt";

// Open the file in read mode
$file = fopen($filename, "r");

// Check if the file was successfully opened
if ($file) {
    echo "<h2>Reading Lines from the File</h2>";
    echo "<pre>"; // Preformatted text for better display

    // Read the file line by line
    while (($line = fgets($file)) !== false) {
        // Trim the line to remove extra spaces or newline characters
        $trimmedLine = trim($line);

        // Check if the line contains "STOP"
        if ($trimmedLine === "STOP") {
            break; // Stop reading further
        }

        // Display the line
        echo htmlspecialchars($trimmedLine) . "\n";
    }

    echo "</pre>";
    // Close the file
    fclose($file);
} else {
    // Error message if the file couldn't be opened
    echo "Failed to open the file. Please make sure 'search.txt' exists.";
}
?>
