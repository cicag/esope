/* Menempelkan #scorebox di bawah layar saat mobile.

   Bukan bagian dari logika hitung, jadi dipisah dari hitung.js.

   Aturan main:
   - Hanya di mobile (<= 768px, sama dengan titik henti di index.css).
   - Nempel HANYA selama bagian hasil masih berada di bawah lipatan layar.
     Begitu user scroll ke bawah dan hasil akan terlihat, nempel dilepas
     supaya tidak ada dua angka skor yang berbeda di layar sekaligus.
   - Muncul dengan slide naik, ditutup dengan slide turun.
   - Saat nempel, kotak bisa diklik: melompat ke bagian hasil.

   Kenapa position:sticky tidak dipakai: sticky menempel ke atas viewport,
   sedangkan yang diminta menempel ke bawah dan harus bisa balik ke flow
   begitu posisi aslinya masuk layar. Keduanya harus dihitung JS. */
(function () {
  var scorebox = document.getElementById('scorebox');
  if (!scorebox) return;

  // Wrapper diuje dari induk #scorebox, bukan dengan nama class, supaya
  // tidak rapuh kalau class-nya diganti.
  var wadah = scorebox.parentElement;
  if (!wadah) return;

  var root = document.documentElement;
  var footer = document.querySelector('footer');

  // Harus sama dengan durasi transisi transform di index.css, supaya
  // kotak benar-benar selesai turun sebelum dilepas dari posisi fixed.
  var DURASI_ANIMASI = 280;
  var timerLepas = null;
  var sedangTurun = false;

  var tinggiScorebox = 0;

  function ukurTinggi() {
    // Saat nempel, #scorebox jadi position:fixed sehingga tinggi yang
    // terbaca lewat getBoundingClientRect() tetap sama tinggi kontennya
    // (fixed hanya mengubah posisi, bukan ukuran), jadi aman diukur
    // dalam kedua keadaan.
    var kotak = scorebox.getBoundingClientRect();
    var mb = parseFloat(getComputedStyle(scorebox).marginBottom) || 0;
    tinggiScorebox = kotak.height + mb;
    root.style.setProperty('--tinggi-skor', tinggiScorebox + 'px');

    var fh = footer ? footer.getBoundingClientRect().height : 0;
    root.style.setProperty('--tinggi-footer', fh + 'px');
  }

  /* Apakah bagian hasil masih di bawah lipatan layar?

     PENTING: yang diukur adalah `wadah`, bukan #scorebox. Kalau
     #scorebox yang diukur saat sedang nempel, rect-nya mengembalikan
     posisi fixed (di bawah layar) dan bukan posisi aslinya — akibatnya
     nempel akan lepas sendiri di scroll pertama.

     `wadah` sendiri tidak pernah reposition, jadi .top-nya selalu
     mencerminkan letak bagian hasil yang sebenarnya. */
  function hasilMasihDiBawah() {
    var kotakWadah = wadah.getBoundingClientRect();
    return kotakWadah.top >= (window.innerHeight || document.documentElement.clientHeight);
  }

  function sudahNempel() {
    return document.body.classList.contains('skor-nempel');
  }

  function kurangiGerak() {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }

  function pasangNempel() {
    document.body.classList.add('skor-nempel');
    scorebox.setAttribute('role', 'button');
    scorebox.setAttribute('tabindex', '0');
  }

  function batalkanLepas() {
    if (timerLepas) {
      window.clearTimeout(timerLepas);
      timerLepas = null;
    }
  }

  function lepaskan() {
    batalkanLepas();
    sedangTurun = false;
    scorebox.classList.remove('skor-tersembunyi', 'skor-tanpa-animasi');
    document.body.classList.remove('skor-nempel');
    scorebox.setAttribute('role', 'presentation');
    scorebox.setAttribute('tabindex', '-1');
  }

  /* Nempel: pasang dulu dalam keadaan tersembunyi, baru dilepas di frame
     berikutnya. Kalau tidak, yang terlihat bukan slide naik melainkan
     kotak yang tiba-tiba sudah di tempatnya.

     Syarat berhenti di situ hanya kalau TIDAK sedang turun, jadi scroll
     balik saat slide turun sedang berjalan tetap membalikkan arahnya. */
  function slideNaik() {
    if (sudahNempel() && !sedangTurun) return;
    // Batalkan detach yang masih tertunda; kalau tidak kotak dilepas dari
    // posisi fixed tepat setelah user membalikkan scroll.
    batalkanLepas();
    sedangTurun = false;
    pasangNempel();
    if (kurangiGerak()) {
      scorebox.classList.remove('skor-tersembunyi');
      return;
    }

    // Tanpa "skor-tanpa-animasi" ini, transform ikut bertransisi dari
    // translateY(0) ke posisi tersembunyi dan kotak akan terlihat goyang
    // naik-turun, bukan naik dari bawah.
    scorebox.classList.add('skor-tersembunyi', 'skor-tanpa-animasi');
    // Paksa browser menghitung gaya awal, supaya kelas yang dilepas di
    // frame berikutnya benar-benar dibaca sebagai perubahan.
    void scorebox.offsetHeight;
    window.requestAnimationFrame(function () {
      scorebox.classList.remove('skor-tanpa-animasi');
      // Frame terpisah: transisi harus sudah aktif dulu sebelum
      // posisi tersembunyi dilepas, kalau tidak tidak ada yang dianimasikan.
      window.requestAnimationFrame(function () {
        scorebox.classList.remove('skor-tersembunyi');
      });
    });
  }

  /* Lepas dengan slide turun: kotak digeser keluar layar bawah dulu,
     baru dilepas dari posisi fixed setelah transisi selesai.

     Pakai setTimeout, bukan transitionend: transitionend tidak pernah
     datang kalau user langsung scroll balik atau tab disembunyikan di
     tengah animasi, dan tanpa itu kotak akan menggantung di posisi fixed. */
  function tutup() {
    if (!sudahNempel()) return;
    if (sedangTurun) return;
    if (kurangiGerak()) {
      lepaskan();
      return;
    }

    sedangTurun = true;
    // Transisi harus tetap aktif selama turun, jadi pastikan yang
    // mematikan transisi ini tidak ikut menempel.
    scorebox.classList.remove('skor-tanpa-animasi');
    scorebox.classList.add('skor-tersembunyi');
    batalkanLepas();
    timerLepas = window.setTimeout(lepaskan, DURASI_ANIMASI);
  }

  function setNempel(nempel) {
    if (nempel) slideNaik();
    // Sudah sedang turun: biarkan animasinya habis, jangan dipaksa balik.
    else if (!sedangTurun) tutup();
  }

  function perbarui() {
    if (!window.matchMedia('(max-width: 768px)').matches) {
      setNempel(false);
      return;
    }
    setNempel(hasilMasihDiBawah());
  }

  function lompatKeHasil() {
    if (!sudahNempel()) return;
    wadah.scrollIntoView({
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
      block: 'start'
    });
  }

  // scroll/resize dibungkus requestAnimationFrame supaya tidak
  // memaksa layout berkali-kali dalam satu frame.
  function jadwal() {
    if (jadwal.ada) return;
    jadwal.ada = true;
    window.requestAnimationFrame(function () {
      jadwal.ada = false;
      ukurTinggi();
      perbarui();
    });
  }

  window.addEventListener('scroll', jadwal, { passive: true });
  window.addEventListener('resize', jadwal);

  scorebox.addEventListener('click', lompatKeHasil);

  // Saat berperan sebagai tombol, harus bisa dipicu dari keyboard juga.
  scorebox.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' || e.key === ' ' || e.key === 'Spacebar') {
      e.preventDefault();
      lompatKeHasil();
    }
  });

  function init() {
    ukurTinggi();
    perbarui();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
