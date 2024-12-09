<!-- To swap the value of two variables -->
 <?php
    $x = 10;
    $y = 12;
    echo "Before swapping: x = $x  and  y = $y";
    $x = $x + $y;
    $y = $x - $y;
    $x = $x - $y;
    echo "After swapping: The value of x is $x and y is $y"
 ?>