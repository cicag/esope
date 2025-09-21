-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Sep 20, 2025 at 03:14 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

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
  `id` int(11) NOT NULL,
  `klasifikasi` varchar(100) NOT NULL,
  `respon` longtext NOT NULL,
  `tindakan` longtext NOT NULL,
  `monitoring` varchar(100) NOT NULL,
  `nummin` int(11) NOT NULL,
  `nummax` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `news`
--

INSERT INTO `news` (`id`, `klasifikasi`, `respon`, `tindakan`, `monitoring`, `nummin`, `nummax`) VALUES
(1, 'SANGAT RENDAH', 'Dilakukan monitoring.', 'Melanjutkan monitoring.', 'Minimal 12 jam', 0, 0),
(2, 'RENDAH', '<ol>\r\n<li>Harus segera dievaluasi oleh perawat yang terdaftar kompeten,</li>\r\n<li>Harus memutuskan apakah perubahan frekuensi pemantauan klinis atau wajib eskalasi perawatan klinis</li>\r\n</ol>', 'Perawat melakukan asessmen atau perawat meningkatkan frekuensi monitoring', 'Minimal 4-6 jam.', 1, 4),
(3, 'SEDANG', 'Harus segera melakukan tinjauan mendesak oleh klinisi yang terampil dengan kompetensi dalam penilaian penyakit akut di bangsal, biasanya oleh dokter atau perawat dengan mempertimbangkan apakah eskalasi perawatan ke tim perawatan klinis yang diperlukan (yaitu tim penjangkauan perawatan kritis).', 'Perawat berkolaborasi dengan tim / pemberian asesmen kegawatan / meningkatkan perawatan dengan fasilitas monitor yang lengkap.', 'Minimal 1 jam.', 5, 6),
(4, 'TINGGI', 'Harus segera memberikan penilaian darurat secara klinis oleh tim critical care outreach atau code blue dengan kompetensi penanganan pasien kritis dan biasanya terjadi transfer pasien ke area perawatan dengan alat bantu.', 'Berkolaborasi dengan tim medis/ pemberi asesmen kegawatan/ pindah ruangan HCU/ICU.', 'Bedset monitor everytime', 7, 19);

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
