# Changelog
## 30/09/2026
1. Ambang batas warna kategori risiko dipindah dari `js/hitung.js` ke database.
   Ditambah kolom `warna` pada tabel `news`. Nilai warna (#) tetap di `css/index.css`. `js/hitung.js` tidak lagi berisi kondisi total/rentang angka. Selektor CSS memakai `#scorebox.risiko-N` (bukan `.risiko-N`) agar tidak kalah spesifisitas dari aturan `#scorebox`.
2. `public/includes/result.php` dihapus
   sisa desain tabel lama, tidak pernah di-include, dan memakai id yang sudah tidak ada di CSS maupun JS.
3. Tombol Reset lebih sakti
   Tombol reset sekarang mengembalikan kotak hasil ke keadaan "belum dihitung"

## 24/02/2026
1. Migrasi dari MariaDB/MySQL ke SQlite
   Data cenderung statis, tidak banyak berubah.
