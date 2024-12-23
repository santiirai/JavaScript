<!-- Usage of logical operators -->
<?php
   $a = 42;
   $b = 0;

   if ($a && $b) {
      echo " a and b are true \n";
   } else {
      echo "Either a or b is false \n";
   }

   if ($a and $b) {
      echo "a and b are true \n";
   } else {
      echo " a or b is false \n";
   }
?>