<!-- Write a PHP script to create a new text file named "data.txt" and write "Hello,
World!" into it. -->
<?php
// Define the file name
$filename = "data.txt";

// Define the content to write
$content = "Hello, World!";

// Create or open the file for writing
$file = fopen($filename, "w");

// Check if the file was successfully opened
if ($file) {
    // Write content to the file
    fwrite($file, $content);

    // Close the file after writing
    fclose($file);

    // Success message
    echo "File '$filename' created and written successfully!";
} else {
    // Error message if the file couldn't be opened
    echo "Failed to create or write to the file.";
}
?>
