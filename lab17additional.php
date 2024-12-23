<!-- 1. Create a script that asks the user for their name and stores it in a session
variable upon form submission.
2. If the user’s name is not in the session, display a form to ask for their name.
3. Use a cookie to remember if the user has previously visited the site. On
subsequent visits, greet them with a message like: "Welcome back, [Name]! It’s
great to see you again!"
5. Create an HTML form for user login with fields for username and password. Write a PHP
script to process the form using $_POST. If the username and password match a predefined
value, display a "Login Successful" message; otherwise, show "Invalid Credentials." -->

<?php
$validPassword = 'nishan';
$validusername = 'nishan06';
$message = '';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $username = $_POST['username'];
    $password = $_POST['password'];

    if ($username == $validusername && $password == $validPassword) {
        $message = 'Login Successful';
    } else {
        $message = 'Login failed';
    }
}

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
</head>

<body>
    <h1>Login</h1>
    <?php
    if ($message) {

        echo "<p>$message </p>";
    }
    ?>
    <form action="" method="post">

    <label for="username">
            Enter your username
        </label>
        <input type="text" name="username" id="">
        <label for="password">Enter your password</label>
        <input type="password" name="password" id="">
        <button type="submit">Login</button>
    </form>
</body>
</html>
