-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Czas generowania: 11 Sie 2020, 01:55
-- Wersja serwera: 10.4.11-MariaDB
-- Wersja PHP: 7.4.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Baza danych: `essentialmode`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `mkt_dm`
--

CREATE TABLE `mkt_dm` (
  `id` int(11) NOT NULL,
  `sender` varchar(255) NOT NULL,
  `senderIdentifier` varchar(255) NOT NULL,
  `receiver` varchar(255) NOT NULL,
  `receiverIdentifier` varchar(255) NOT NULL,
  `messageTopic` varchar(255) NOT NULL DEFAULT '^^^NO_TOPIC^^^',
  `messageContent` varchar(255) NOT NULL DEFAULT '^^^NO_MSG^^^',
  `messageDate` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indeksy dla zrzutów tabel
--

--
-- Indeksy dla tabeli `mkt_dm`
--
ALTER TABLE `mkt_dm`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT dla tabeli `mkt_dm`
--
ALTER TABLE `mkt_dm`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
