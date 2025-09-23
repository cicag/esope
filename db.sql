-- phpMyAdmin SQL Dump
-- version 5.1.1deb5ubuntu1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Sep 23, 2025 at 04:05 AM
-- Server version: 8.0.35-0ubuntu0.22.04.1
-- PHP Version: 8.2.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `esope`
--

-- --------------------------------------------------------

--
-- Table structure for table `news`
--

CREATE TABLE `news` (
  `id` int NOT NULL,
  `klasifikasi` varchar(100) COLLATE utf8mb4_general_ci NOT NULL,
  `respon` longtext COLLATE utf8mb4_general_ci NOT NULL,
  `tindakan` longtext COLLATE utf8mb4_general_ci NOT NULL,
  `monitoring` varchar(100) COLLATE utf8mb4_general_ci NOT NULL,
  `nummin` int NOT NULL,
  `nummax` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `news`
--

INSERT INTO `news` (`id`, `klasifikasi`, `respon`, `tindakan`, `monitoring`, `nummin`, `nummax`) VALUES
(1, 'SANGAT RENDAH', '<ol>\r\n<li>Pemantauan Tanda Vital Rutin</li>\r\n</ol>', 'Melanjutkan monitoring.', 'Minimal setiap 12 jam', 0, 0),
(2, 'RENDAH', '<ol>\r\n<li>Pemantauan tanda vital rutin,</li>\r\n<li>Dokumentasi skor NEWS,</li>\r\n<li>Lanjutkan perawatan sesuai kondisi.</li>\r\n</ol>', 'Perawat melakukan asessmen atau perawat meningkatkan frekuensi monitoring', 'Minimal 4-6 jam.', 1, 4),
(3, 'SEDANG', '<ol>\r\n<li>Tingkatkan frekuensi pemantauan menjadi setiap 4-6 jam,</li>\r\n<li>Laporkan ke DPJP,</li>\r\n<li>ertimbangkan pemberian oksigen jika diperlukan,</li>\r\n<li>Evaluasi kebutuhan pemeriksaan penunjang (e.g., EKG, lab).</li>\r\n</ol>', 'Perawat berkolaborasi dengan tim / pemberian asesmen kegawatan / meningkatkan perawatan dengan fasilitas monitor yang lengkap.', 'Minimal setiap 1 jam.', 5, 6),
(4, 'TINGGI', '<ol>\r\n<li>Segera laporkan ke DPJP,</li>\r\n<li>Pantau tanda vital setiap 30-60 menit,</li>\r\n<li>Siapkan akses IV, oksigen, dan alat emergensi,</li>\r\n<li>Pertimbangkan transfer ke ICU,</li>\r\n<li>Mulai pendokumentasian berkala setiap jam.</li>\r\n</ol>', 'Berkolaborasi dengan tim medis/ pemberi asesmen kegawatan/ pindah ruangan HCU/ICU.', 'Monitor setiap saat.', 7, 20);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `news`
--
ALTER TABLE `news`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `news`
--
ALTER TABLE `news`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
