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

function Hitung() {
    let total = 0;
    const answers = document.querySelectorAll('input[type="radio"]:checked');

    answers.forEach((ans) => {
        total += parseInt(ans.dataset.score);
    });

    const resultBox = document.getElementById("result");
    resultBox.innerHTML = total;

    const scoreBox = document.getElementById("scorebox");
    if (total === 0) {
        scoreBox.style.backgroundColor = 'white';
        scoreBox.style.color = 'black';
    } else if (total >= 1 && total <= 3) {
        scoreBox.style.backgroundColor = '#65824e';
        scoreBox.style.color = 'white';
    } else if (total >= 4 && total <= 6) {
        scoreBox.style.backgroundColor = '#f2ee27';
        scoreBox.style.color = 'black';
    } else if (total >= 7) {
        scoreBox.style.backgroundColor = 'red';
        scoreBox.style.color = 'white';
    }


// kirim total ke PHP
fetch("includes/functions.php", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: "cari_data=" + total
})
.then(res => res.json())
.then(data => {
    if (data.length > 0) {
        const row = data[0]; // ambil baris pertama

        // isi kategori
        document.getElementById("kategori").textContent = row.klasifikasi;

        // isi respon
        document.getElementById("respon").innerHTML = row.respon;

        // isi monitoring
        document.getElementById("monitoring").textContent = row.monitoring;
    } else {
        // kalau kosong, kasih default
        document.getElementById("kategori").textContent = "Tidak ditemukan";
        document.getElementById("respon").textContent = "Tidak ada data.";
        document.getElementById("monitoring").textContent = "Tidak ada data.";
    }
})
.catch(err => {
    console.error("Fetch error:", err);
});
}
