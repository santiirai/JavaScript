<!-- php code script that uses a forach loop to iterate over an
  asscoiative array containing students name as keys and their 
  corresponding grades as values. Calculate the average 
  grade and display it-->
<?php
  $students = ["Sahabir" =>23, "Nishan" =>21, "Shanti"=>21, "Alina" =>64];
  $totalGrades =0;

foreach($students as $name =>$grade){
    echo "$name : $grade <br>";
    $totalGrades+=$grade;
}
$average = $totalGrades/count($students);

echo "The average marks obtained is $average";
?>