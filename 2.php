<!-- Define a PHP function called "calculateCircleArea" that takes the radius of a circle
as a parameter and returns its area. Test this function with various radius values. -->
<?php

function calculateAreaofCircle($radius)
{
    if ($radius < 0) {
        return "Radius must be positive";
    } else {
        return pi() * pow($radius, 2);
    }
}

$testRadius = [1, -2, 3, 45];

foreach ($testRadius as $radius) {
    echo "Radius : $radius , Area :", calculateAreaofCircle($radius)."<br>";
}
?>