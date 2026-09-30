<?php
// footer.php menulis tautan relatif ke folder public, sedangkan file ini
// berada satu level di bawahnya (public/includes/). Tanpa prefix ini,
// tautan footer di halaman FAQ akan mengarah ke /includes/includes/.
$esopePrefix = '../';
?>
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <!-- Wajib di halaman mobile: tanpa ini browser memakai layout
         viewport 980px lalu mengecilkan seluruh halaman, sehingga teks
         tetap terbaca tapi tidak ada elemen yang benar-benar-full-width. -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ESOPE | FAQ</title>
    <!-- Warna, header, dan footer diambil dari stylesheet yang sama dengan
         halaman depan supaya keduanya terlihat satu aplikasi, bukan dua
         halaman terpisah. about.css ditulis paling akhir supaya urutan
         cascade-nya sama seperti saat aturannya masih inline di sini. -->
    <link rel="stylesheet" href="../css/header.css">
    <link rel="stylesheet" href="../css/footer.css">
    <link rel="stylesheet" href="../css/about.css">
</head>
<body>

<header>
    <div>
        <h1>ESOPE | FAQ</h1>
        <span class="judul-sub">Frequently Asked Question</span>
    </div>
</header>

<main>

<section class="segmen">
    <h2>Apa itu ESOPE?</h2>
    <p><strong>ESOPE</strong> (akronim untuk <em>Esope Sistem Observasi Pasien Elektronik</em>), adalah aplikasi kalkulator NEWS sederhana. NEWS (<em>National Early Warning Score</em>) adalah sebuah sistem skoring yang digunakan untuk menilai dan mendeteksi perubahan kondisi fisiologis pasien secara dini. Skor ini membantu mengenali penurunan kondisi pasien lebih awal sehingga intervensi dan tindakan medis yang tepat dapat segera diberikan. <br><br>Prototipe ini dibuat untuk demonstrasi konsep ESOPE sebagai aplikasi yang membantu mengetahui intervensi lebih lanjut, dan meminimalkan kendala dalam penghitungan manual di ruangan. Nama ESOPE dipilih karena senada dengan SOP (<em>Standard Operational Procedure</em>) yang memang sudah familiar dan kami anggap penggunaannya unik. Untuk berkontribusi, diskusi, dan pelaporan isu, kode sumber ESOPE terbuka dan bisa diakses di <a href="https://github.com/cicag/esope"><em>github.</em></a></p>
</section>

<section class="segmen">
    <h2>Untuk siapa ESOPE?</h2>
    <ol>
    <li>ESOPE NEWS dapat digunakan oleh semua tenaga kesehatan</li>
    <li>ESOPE NEWS digunakan pada pasien dewasa (&gt;16 tahun) yang kecuali ibu hamil dan pasien cedera tulang belakang.</li>
    </ol>
</section>

<section class="segmen">
    <h2>Dimana ESOPE bisa digunakan?</h2>
    <p>Aplikasi dapat digunakan di IGD, ICU dan ruang rawat inap.</p>
</section>

<section class="segmen">
    <h2>Kapan menggunakan ESOPE?</h2>
    <p>Aplikasi digunakan setiap kali pemantauan tanda-tanda vital rutin dan/sesuai klasifikasi sebelumnya</p>
</section>

<section class="segmen">
    <h2>Kenapa menggunakan ESOPE?</h2>
    <p>Seperti sudah disebutkan sebelumnya, ESOPE dapat digunakan untuk membantu mengetahui intervensi lebih lanjut, dan meminimalkan kendala dalam penghitungan manual di ruangan.</p>
</section>

<section class="segmen">
    <h2>Bagaimana menggunakan ESOPE?</h2>
    <p>Cara Penggunaan:</p>
    <ol>
    <li>Buka aplikasi melalui browser (Chrome, Edge, dsb),</li>
    <li>Masukkan parameter fisiologis sesuai kondisi pasien,</li>
    <li>Tekan tombol “hitung” untuk mulai menghitung,</li>
    <li>Tekan tombol “reset” untuk memulai perhitungan baru.</li>
    </ol>
</section>

</main>

<footer>
<?php include __DIR__ . '/footer.php';?>
</footer>
</body>
</html>
