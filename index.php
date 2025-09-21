<?php
require 'includes/functions.php';
?>

<!-- Kepala Halaman -->
<!DOCTYPE html>
<html lang="id">
<head>
  <title>ESOPE</title>
  <link rel="stylesheet" href="css/header.css">
  <link rel="stylesheet" href="css/footer.css">
  <link rel="stylesheet" href="css/index.css">
</head>

<body>
  <header>
    <?php include 'includes/header.php';?>
  </header>

  <main class="kontainer">
    <section class="formkiri">
      <form id="news">
        <?php include 'includes/form.php';?>
      </form>
    </section>

    <section class="hasilkanan">
      <div id="scorebox">
        <a>Skor:</a>
          <a id="result"></a>
        <a>poin.</a>
      </div>
      <br>

      <div id="wadah">
        <?php include 'includes/result.php';?>
      </div>

    </section>
  </main>
<!-- Kaki, tentang ESOPE -->
  <footer>
    <?php include 'includes/footer.php';?>
  </footer>

<script src="js/hitung.js"></script>
</body>
</html>
