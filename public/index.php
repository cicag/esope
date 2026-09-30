<?php
require __DIR__ . '/../app/functions.php';
?>

<!-- Kepala Halaman -->
<!DOCTYPE html>
<html lang="id">
<head>
  <title>ESOPE</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="css/header.css">
  <link rel="stylesheet" href="css/footer.css">
  <link rel="stylesheet" href="css/index.css">
</head>

<body>
  <header>
    <?php include __DIR__ . '/includes/header.php';?>
  </header>

  <main class="kontainer">
    <section class="formkiri">
      <form id="news">
        <?php include __DIR__ . '/includes/form.php';?>
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
              <a class="label-hasil">Respon Klinis:</a>
              <div class="subbox" id="subbox-respon">
                <a id="respon">Belum dihitung.</a>
              </div>
              <a class="label-hasil">Monitoring:</a>
              <div class="subbox" id="subbox-monitoring">
                <a id="monitoring">Belum dihitung.</a>
              </div>
            </div>
      </div>
    </section>
  </main>
  <br>
  <br>
<!-- Kaki, tentang ESOPE -->
  <footer>
    <?php include __DIR__ . '/includes/footer.php';?>
  </footer>

<script src="js/hitung.js"></script>
<script src="js/skor-nempel.js"></script>
</body>
</html>
