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

      // Reset: kembalikan kotak hasil ke kondisi "belum dihitung", lalu
      // disable tombol lagi. Yang kedua didelay supaya reset native
      // radio/form selesai lebih dulu.
      document.querySelector('button[type="reset"]').addEventListener('click', () => {
          resetHasil();
          setTimeout(checkAllAnswered, 50);
      });

// Terapkan kelas warna pada #scorebox.
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

// Naikkan tiap kali hasil dihitung atau dikosongkan. Dipakai untuk
// membuang respons API yang telat: tanpa ini, klik reset sementara
// request masih berjalan akan ditimpa hasilnya begitu fetch selesai.
let hitungToken = 0;

// Kembalikan kotak hasil ke keadaan "belum dihitung" seperti saat halaman
// baru dibuka
function resetHasil() {
    hitungToken++;

    setRisiko(null);
    document.getElementById("result").textContent = "\u200e ";
    document.getElementById("kategori").textContent = "BELUM DIHITUNG";
    document.getElementById("respon").textContent = "Belum dihitung.";
    document.getElementById("monitoring").textContent = "Belum dihitung.";
}

function Hitung() {
    let total = 0;
    const answers = document.querySelectorAll('input[type="radio"]:checked');

    answers.forEach((ans) => {
        total += parseInt(ans.dataset.score);
    });

    document.getElementById("result").textContent = total;

    const token = ++hitungToken;
    setRisiko("risiko-diproses");

fetch("includes/api.php", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: "cari_data=" + total
})
.then(res => {

    if (!res.ok) {
        throw new Error("HTTP " + res.status);
    }
    return res.json();
})
.then(data => {
    // Sudah di-reset atau dihitung ulang saat request ini berjalan
    if (token !== hitungToken) {
        return;
    }

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
    if (token !== hitungToken) {
        return;
    }

    console.error("Fetch error:", err);
    setRisiko("risiko-tidak-diketahui");
    document.getElementById("kategori").textContent = "GAGAL MEMUAT DATA";
    document.getElementById("respon").textContent = "Kesalahan: " + err.message;
    document.getElementById("monitoring").textContent = "Hubungi administrator.";
});
}
