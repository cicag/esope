function Hitung() {
    let total = 0;
    const answers = document.querySelectorAll('input[type="radio"]:checked');

    answers.forEach((ans) => {
        total += parseInt(ans.dataset.score);
    });

    const resultBox = document.getElementById("result");
    resultBox.innerHTML = total;

// kirim total ke PHP
fetch("includes/functions.php", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: "cari_data=" + total
})
.then(res => res.json())
.then(data => {
    let html = `
    <table border="1" cellpadding="10" cellspacing="0">
    <tr>
    <th>Kategori</th>
    <th>Respon Klinis</th>
    <th>Saran Tindakan</th>
    <th>Monitoring</th>
    </tr>`;
    data.forEach(row => {
        html += `<tr>
        <td>${row.klasifikasi}</td>
        <td>${row.respon}</td>
        <td>${row.tindakan}</td>
        <td>${row.monitoring}</td>
        </tr>`;
    });
    html += `</table>`;
    document.getElementById("wadah").innerHTML = html;
});
}
