<!-- Write PHP code to display the current date and time in the following formats:-->
    <?php
// Display the title
echo "<h2>Current Date and Time</h2>";

// Display the current date and time in two different formats
// Format 1: YYYY-MM-DD HH:MM:SS
// Example: 2024-12-23 14:30:45
echo "<p><strong>Format 1 (YYYY-MM-DD HH:MM:SS):</strong> " . date("Y-m-d H:i:s") . "</p>";

// Format 2: Day of the week, Month DD, YYYY
// Example: Monday, December 23, 2024
echo "<p><strong>Format 2 (Day of the week, Month DD, YYYY):</strong> " . date("l, F d, Y") . "</p>";
?>
