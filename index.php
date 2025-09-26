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
      <div class="isikanan">
        <div id="scorebox">
          <div class="skor-header">Skor:</div>
          <div class="skor-body">
            <div id="result" class="skor-value">‎ </div>
          <div class="unit">poin.  </div>
          </div>
        </div>
          <div id="kategoribox">
            <a id="kategori">BELUM DIHITUNG</a>
          </div>

          <div id="resultbox">
            <a>Respon Klinis:</a><br>
            <a id="respon">Belum dihitung.</a><br>
            <a>Monitoring:</a><br>
          <a id="monitoring">Belum dihitung.</a>
          </div>
      </div>
    </section>
  </main>
  <br>
  <br>
<!-- Kaki, tentang ESOPE -->
  <footer>
    <?php include 'includes/footer.php';?>
  </footer>

<script src="js/hitung.js"></script>
</body>
</html>
