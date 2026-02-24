<?php
//konek ke database
// $db = mysqli_connect("localhost", "root", "1234", "esope");
$db_path = __DIR__ . '/../esope.sqlite';

// Cek apakah file database benar-benar ada
if (!file_exists($db_path)) {
    die(json_encode([["klasifikasi" => "Error", "respon" => "File DB tidak ditemukan di: $db_path", "monitoring" => "-"]]));
}

$db = new SQLite3($db_path);

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
    $res = $db->query($sql);

    $rows = [];
    if ($res) {
        while ($row = $res->fetchArray(SQLITE3_ASSOC)) {
            $rows[] = $row;
        }
    }
    header('Content-Type: application/json');
    echo json_encode($rows);
    exit;
}
?>
