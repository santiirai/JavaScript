<!-- 1. Write PHP code to display the following information:
● Server's IP address.
● Server's name.
● Server's software. -->
<?php
// This file displays the server's IP address, name, and software
echo "<h2>Server Information</h2>";
echo "Server's IP Address: " . $_SERVER['SERVER_ADDR'] . "<br>";
echo "Server's Name: " . $_SERVER['SERVER_NAME'] . "<br>";
echo "Server's Software: " . $_SERVER['SERVER_SOFTWARE'] . "<br>";
?>
