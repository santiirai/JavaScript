<!-- Create a PHP script that reads the content of a file named "essay.txt" character
by character using fgetc(). Count the number of words in the essay and display
the word count on the web page. -->
<?php
// Define the file name
$filename = "essay.txt";

// Open the file in read mode
$file = fopen($filename, "r");

// Initialize variables
$content = ""; // To store the file content
$wordCount = 0; // To count words

// Check if the file was successfully opened
if ($file) {
    // Read the file character by character
    while (($char = fgetc($file)) !== false) {
        // Append each character to the content variable
        $content .= $char;
    }

    // Close the file after reading
    fclose($file);

    // Count the number of words in the content
    $wordCount = str_word_count($content);

    // Display the word count
    echo "<h2>Word Count in 'essay.txt'</h2>";
    echo "<p>Total Words: <strong>$wordCount</strong></p>";
} else {
    // Error message if the file couldn't be opened
    echo "Failed to open the file. Please make sure 'essay.txt' exists.";
}
?>
