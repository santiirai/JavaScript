<?php
session_start();
print_r($_SESSION);

echo "Welcome" . " " . $_SESSION['username'];
echo "Your password is". " ". $_SESSION['pass'];
?>