<?php
require 'includes/functions.php';
?>

<!-- Kepala Halaman -->
<!DOCTYPE html>
<html>
<head>
  <title>ESOPE</title>
  <link rel="stylesheet" href="css/header.css">
  <link rel="stylesheet" href="css/footer.css">
</head>
<body>
  <header>
    <?php include 'includes/header.php' ;?>
  </header>

  <form>
    <?php include 'includes/form.php' ;?>
    <br><br>
    <action>
        <button type="reset">Reset</button>
        <button type="button" onclick="Hitung()">Hitung!</button>
    </action>
  </form>

    <a>Skor:</a>
      <a id="result"></a>
    <a>poin.</a>

  <br>

  <div id="wadah">
    <?php include 'includes/result.php' ; ?>
  </div>

<!-- Kaki, tentang ESOPE -->
  <footer>
    <?php include 'includes/footer.php';?>
  </footer>

<script src="js/hitung.js"></script>
</body>
</html>
