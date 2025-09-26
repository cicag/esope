<?php
//konek ke database
$db = mysqli_connect("localhost", "root", "1234", "esope");

$rows = []; // inisialisasi dulu

if (isset($_POST['cari_data'])) {
    $total = intval($_POST['cari_data']);
    $sql = "SELECT * FROM news WHERE nummin <= $total AND nummax >= $total";
    $res = mysqli_query($db, $sql);
    $rows = [];
    while ($row = mysqli_fetch_assoc($res)) {
        $rows[] = $row;
    }
    header('Content-Type: application/json');
    echo json_encode($rows);
    exit;
}
?>
