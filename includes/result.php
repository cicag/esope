<div id="wadah">
  <table class="modern-table">
    <thead>
      <tr>
        <th>Kategori</th>
        <th>Respon Klinis</th>
        <th>Monitoring</th>
      </tr>
    </thead>
    <tbody id="table-body">
      <!-- Data will be populated by JS -->
    </tbody>
  </table>
</div>

  <!-- Tampilkan ini jika data yang dipanggil kosong -->
  <?php if (empty($news)): ?>
  <p>Tidak ditemukan hasil.</p>
  <?php endif; ?>
