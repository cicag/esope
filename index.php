<?php
require 'includes/functions.php';
?>

<!-- Kepala Halaman -->
<!DOCTYPE html>
<html>
<head>
  <title>ESOPE</title>
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
<?php
  include 'includes/footer.php';
?>

<script src="js/hitung.js"></script>
</body>
</html>
