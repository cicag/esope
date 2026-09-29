      const radios = document.querySelectorAll('input[type="radio"]');
      const hitungBtn = document.getElementById('hitungBtn');

      function checkAllAnswered() {
          // ambil semua nama grup radio unik (misalnya answers[1], answers[2], answers[3], dll)
          const groups = [...new Set(Array.from(radios).map(r => r.name))];

          // cek tiap grup sudah ada yang dipilih
          const allAnswered = groups.every(name => {
              return document.querySelector(`input[name="${name}"]:checked`);
          });

          // update tombol
          hitungBtn.disabled = !allAnswered;
      }

      // pasang listener di semua radio
      radios.forEach(radio => {
          radio.addEventListener('change', checkAllAnswered);
      });

      // reset otomatis disable tombol lagi
      document.querySelector('button[type="reset"]').addEventListener('click', () => {
          setTimeout(checkAllAnswered, 50); // delay dikit supaya reset jalan dulu
      });

// Terapkan kelas warna pada #scorebox.
// Kelas apa pun yang berawalan "risiko-" dibersihkan dulu, lalu kelas baru
// dipasang. Nama kelas TIDAK divalidasi di sini: sumbernya kolom `warna`
// dari database, dan bila nilainya salah/kosong, #scorebox tetap tampil
// netral sesuai styling default CSS — bukan warna risiko yang menyesatkan.
// Dicicil dari belakang karena remove() menyusutkan daftar.
function setRisiko(kelas) {
    const scoreBox = document.getElementById("scorebox");
    for (let i = scoreBox.classList.length - 1; i >= 0; i--) {
        const c = scoreBox.classList.item(i);
        if (c.startsWith("risiko-")) {
            scoreBox.classList.remove(c);
        }
    }
    if (kelas) {
        scoreBox.classList.add(kelas);
    }
}

function Hitung() {
    let total = 0;
    const answers = document.querySelectorAll('input[type="radio"]:checked');

    answers.forEach((ans) => {
        total += parseInt(ans.dataset.score);
    });

    document.getElementById("result").textContent = total;

    // Warna TIDAK ditentukan di sini. Semua ambang batas (nummin/nummax)
    // beserta warnanya berasal dari DB; file ini hanya menempelkan hasilnya.
    setRisiko("risiko-diproses");

// Path relatif terhadap dokumen (index.php), sama seperti header/footer
// memakai "includes/about.php". Bukan relatif terhadap folder js/.
//   /public/            -> /public/includes/api.php
//   /public/index.php   -> /public/includes/api.php
// "../includes/api.php" hanya benar pada kasus kedua; yang pertama 404.
fetch("includes/api.php", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: "cari_data=" + total
})
.then(res => {
    // Jangan langsung res.json() pada respons error: badan error Apache itu
    // HTML, jadi JSON.parse melempar SyntaxError dan menutupi status aslinya.
    if (!res.ok) {
        throw new Error("HTTP " + res.status);
    }
    return res.json();
})
.then(data => {
    if (Array.isArray(data) && data.length > 0) {
        const row = data[0]; // ambil baris pertama

        // warna ikut dari baris yang sama dengan klasifikasinya
        setRisiko(row.warna);

        // isi kategori
        document.getElementById("kategori").textContent = row.klasifikasi;

        // isi respon
        document.getElementById("respon").innerHTML = row.respon;

        // isi monitoring
        document.getElementById("monitoring").textContent = row.monitoring;
    } else {
        // kalau kosong, kasih default
        setRisiko("risiko-tidak-diketahui");
        document.getElementById("kategori").textContent = "Tidak ditemukan";
        document.getElementById("respon").textContent = "Tidak ada data.";
        document.getElementById("monitoring").textContent = "Tidak ada data.";
    }
})
.catch(err => {
    console.error("Fetch error:", err);
    setRisiko("risiko-tidak-diketahui");
    document.getElementById("kategori").textContent = "GAGAL MEMUAT DATA";
    document.getElementById("respon").textContent = "Kesalahan: " + err.message;
    document.getElementById("monitoring").textContent = "Hubungi administrator.";
});
}
