<?php
//konek ke database
// $db = mysqli_connect("localhost", "root", "1234", "esope");
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
if (!is_readable($db_path)) {
    esope_error("Data referensi tidak tersedia.");
}

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
