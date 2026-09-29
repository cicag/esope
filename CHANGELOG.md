# Changelog
## 30/09/2026
1. Status "belum dihitung" pada kotak skor memakai isi putih + garis
   putus-putus. Hijau tetap dihindari karena hijau sudah berarti "risiko
   RENDAH" — kotak kosong tidak boleh tampil seolah sudah dinilai aman.
   Isi putihnya sama dengan .risiko-0 (SANGAT RENDAH), jadi yang membedakan
   "belum dihitung" dari "hasil = 0" adalah garis putus-putus, label
   "BELUM DIHITUNG" di #kategoribox, dan angka skor yang masih kosong.
   Status "sedang diproses" dipisah jadi biru muda agar tidak tertukar
   dengan kondisi netral.
2. Perbaikan: fetch API memakai path relatif terhadap dokumen.
   Sebelumnya `"../includes/api.php"` — salah kalau aplikasi dibuka lewat
   directory index (`/esope/tampilan/public/`), sehingga mendarat di
   `/esope/tampilan/includes/api.php` dan 404. Akibatnya JSON.parse gagal,
   error tertelan `.catch()`, dan klasifikasi/respon/monitoring tetap
   tertulis "Belum dihitung" padahal skornya sudah muncul. Hanya jalan
   ketika `index.php` disebut eksplisit.
   Ditambah pengecekan `res.ok` supaya status HTTP-nya terlihat, bukan
   tersembunyi jadi SyntaxError.
3. Ambang batas warna kategori risiko dipindah dari `js/hitung.js` ke database.
   Ditambah kolom `warna` pada tabel `news`. Nilai warna (#) tetap di `css/index.css`.
   Sekarang klasifikasi dan warna kotak skor selalu berasal dari satu baris yang sama.
   `js/hitung.js` tidak lagi berisi kondisi total/rentang angka.
   Selektor CSS memakai `#scorebox.risiko-N` (bukan `.risiko-N`) agar tidak
   kalah spesifisitas dari aturan `#scorebox`.

## 24/02/2026
1. Migrasi dari MariaDB/MySQL ke SQlite
   Data cenderung statis, tidak banyak berubah.
