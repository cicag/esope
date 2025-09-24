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
        scoreBox.style.backgroundColor = 'green';
        scoreBox.style.color = 'white';
    } else if (total >= 4 && total <= 6) {
        scoreBox.style.backgroundColor = 'yellow';
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
    const tableBody = document.getElementById("table-body");
    tableBody.innerHTML = '';
    data.forEach(row => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${row.klasifikasi}</td>
            <td>${row.respon}</td>
            <td>${row.monitoring}</td>
        `;
        tableBody.appendChild(tr);
    });
});
}
