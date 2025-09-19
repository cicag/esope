<?php
include 'includes/header.php';
?>

<!-- Kepala Halaman -->
<!DOCTYPE html>
<html>

  <h3>Frekuensi Napas</h3>

    <input type="radio" id="q1a" name="answers[1]" value="A" data-score="3">
      <label for="q1a" class="option">
        <span class="opt-text">≤8</span>
        <span class="opt-score">+3</span>
      </label>

    <input type="radio" id="q1b" name="answers[1]" value="B" data-score="1">
      <label for="q1b" class="option">
        <span class="opt-text">9–11</span>
        <span class="opt-score">+1</span>
      </label>

    <input type="radio" id="q1c" name="answers[1]" value="C" data-score="0">
      <label for="q1c" class="option">
        <span class="opt-text">12–20</span>
        <span class="opt-score">0</span>
      </label>

    <input type="radio" id="q1d" name="answers[1]" value="D" data-score="2">
      <label for="q1d" class="option">
        <span class="opt-text">21–24</span>
        <span class="opt-score">+2</span>
      </label>

    <input type="radio" id="q1e" name="answers[1]" value="E" data-score="3">
      <label for="q1e" class="option">
        <span class="opt-text">≥25</span>
        <span class="opt-score">+3</span>
      </label>

  <h3>Saturasi Oksigen</h3>

    <input type="radio" id="q2a" name="answers[2]" value="A" data-score="3">
      <label for="q2a" class="option">
        <span class="opt-text">≤91%</span>
        <span class="opt-score">+3</span>
      </label>

    <input type="radio" id="q2b" name="answers[2]" value="B" data-score="2">
      <label for="q2b" class="option">
        <span class="opt-text">92-93%</span>
        <span class="opt-score">+2</span>
      </label>

    <input type="radio" id="q2c" name="answers[2]" value="C" data-score="1">
      <label for="q2c" class="option">
        <span class="opt-text">94-95%</span>
        <span class="opt-score">+1</span>
      </label>

    <input type="radio" id="q2d" name="answers[2]" value="D" data-score="0">
      <label for="q2d" class="option">
        <span class="opt-text">≥96%</span>
        <span class="opt-score">0</span>
      </label>


  <h3>Bantuan Oksigen</h3>

  <input type="radio" id="q3a" name="answers[3]" value="A" data-score="0">
      <label for="q3a" class="option">
        <span class="opt-text">Tidak</span>
        <span class="opt-score">0</span>
      </label>


  <input type="radio" id="q3b" name="answers[3]" value="B" data-score="2">
      <label for="q3b" class="option">
        <span class="opt-text">Ya</span>
        <span class="opt-score">+2</span>
      </label>


  <h3>Suhu</h3>

  <input type="radio" id="q4a" name="answers[4]" value="A" data-score="3">
      <label for="q3b" class="option">
        <span class="opt-text">Ya</span>
        <span class="opt-score">+2</span>
      </label>

<!-- Kaki, tentang Bantu -->
<?php
  include 'includes/footer.php';
?>

</body>
</html>
