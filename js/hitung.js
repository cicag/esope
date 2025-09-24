function Hitung() {
    let total = 0;
    const answers = document.querySelectorAll('input[type="radio"]:checked');

    answers.forEach((ans) => {
        total += parseInt(ans.dataset.score);
    });

    const resultBox = document.getElementById("result");
    resultBox.innerHTML = total;

    // Set color based on score
    if (total === 0) {
        resultBox.style.color = 'white';
    } else if (total >= 1 && total <= 3) {
        resultBox.style.color = 'green';
    } else if (total >= 4 && total <= 6) {
        resultBox.style.color = 'yellow';
    } else if (total >= 7) {
        resultBox.style.color = 'red';
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
