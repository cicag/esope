<?php
//konek ke database
// $db = mysqli_connect("localhost", "root", "1234", "esope");
// File ini berada di dalam app/, jadi path-nya cukup relatif terhadap dirinya sendiri
$db_path = __DIR__ . '/esope.sqlite';

// Balas dalam bentuk JSON, apa pun yang terjadi di bawah. File ini dipanggil
// lewat fetch() dari browser, jadi halaman error HTML bikin JSON.parse gagal
// dan status HTTP aslinya jadi tertutup.
function esope_error($pesan, $kode = 503) {
    http_response_code($kode);
    header('Content-Type: application/json');
    echo json_encode([[
        "klasifikasi" => "Error",
        "respon" => $pesan,
        "monitoring" => "-"
    ]]);
    exit;
}

// Path absolut sengaja tidak ikut dikirim ke klien. Sebelumnya helper ini
// membocorkan struktur direktori server lewat respons JSON.
if (!is_readable($db_path)) {
    esope_error("Data referensi tidak tersedia.");
}

// Aplikasi ini hanya membaca, jadi dibuka read-only secara eksplisit:
//   - tidak butuh hak tulis pada file maupun foldernya
//   - tidak pernah membuat berkas -journal / -wal
//   - aman dijalankan oleh banyak worker php-fpm secara paralel
// Tanpa flag ini SQLite3 memakai READWRITE|CREATE dan butuh hak tulis.
try {
    $db = new SQLite3($db_path, SQLITE3_OPEN_READONLY);
} catch (Throwable $e) {
    esope_error("Database tidak dapat dibuka.");
}

$rows = []; // inisialisasi dulu

// if (isset($_POST['cari_data'])) {
//     $total = intval($_POST['cari_data']);
//     $sql = "SELECT * FROM news WHERE nummin <= $total AND nummax >= $total";
//     $res = mysqli_query($db, $sql);
//     $rows = [];
//     while ($row = mysqli_fetch_assoc($res)) {
//         $rows[] = $row;
//     }
if (isset($_POST['cari_data'])) {
    $total = intval($_POST['cari_data']);

    // Gunakan kueri yang aman
    $sql = "SELECT * FROM news WHERE nummin <= $total AND nummax >= $total";

    // Kalau kueri gagal, lebih baik hasil kosong (UI menulis "Tidak ditemukan")
    // daripada mengirim data parsial. Detailnya buat sysadmin lewat error log.
    // Perilaku error SQLite3 berubah antar versi: PHP 8.2 memberi warning lalu
    // mengembalikan false, sedangkan 8.3+ melempar exception. Dua-duanya ditutup.
    $rows = [];
    try {
        $res = @$db->query($sql);
        if ($res === false) {
            error_log("ESOPE: query gagal: " . $db->lastErrorMsg());
        } else {
            while ($row = $res->fetchArray(SQLITE3_ASSOC)) {
                $rows[] = $row;
            }
        }
    } catch (Throwable $e) {
        error_log("ESOPE: query gagal: " . $e->getMessage());
    }

    header('Content-Type: application/json');
    echo json_encode($rows);
    exit;
}
?>
