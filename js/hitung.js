function Hitung() {
    let total = 0;
    const answers = document.querySelectorAll('input[type="radio"]:checked');

    answers.forEach((ans) => {
        total += parseInt(ans.dataset.score);
    });

    const resultBox = document.getElementById("result");
    resultBox.innerHTML = total;
}
