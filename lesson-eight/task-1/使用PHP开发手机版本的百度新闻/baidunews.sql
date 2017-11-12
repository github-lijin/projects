-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 2017-03-03 13:53:03
-- 服务器版本： 10.1.13-MariaDB
-- PHP Version: 5.6.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `baidunews`
--

-- --------------------------------------------------------

--
-- 表的结构 `news`
--

CREATE TABLE `news` (
  `id` int(11) NOT NULL,
  `newstype` char(200) NOT NULL,
  `newstitle` varchar(200) NOT NULL,
  `newsimg` varchar(200) NOT NULL,
  `newstime` datetime NOT NULL,
  `newssrc` char(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `news`
--

INSERT INTO `news` (`id`, `newstype`, `newstitle`, `newsimg`, `newstime`, `newssrc`) VALUES
(5, '精选', '123', '123', '2017-02-12 00:00:00', 'jike'),
(6, '精选', '1234', 'img/2.jpg', '2017-03-05 00:00:00', 'jike'),
(7, '精选', '123', 'img/2.jpg', '2017-03-06 00:00:00', 'jike'),
(8, '精选', '123', 'img/2.jpg', '2017-03-05 00:00:00', 'jike'),
(9, '精选', '123', 'img/2.jpg', '2017-03-05 00:00:00', 'jike'),
(10, '精选', '123', 'img/2.jpg', '2017-03-05 00:00:00', 'jike'),
(11, '图片', '123456', 'img/2.jpg', '2017-03-04 00:00:00', 'jike'),
(12, '军事', '123456', 'img/2.jpg', '2017-03-04 00:00:00', 'jike'),
(13, '社会', 'ceshi', 'img/2.jpg', '2017-03-05 00:00:00', 'jike'),
(14, '社会', 'ceshi', 'img/2.jpg', '2017-03-05 00:00:00', 'jike');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `news`
--
ALTER TABLE `news`
  ADD PRIMARY KEY (`id`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `news`
--
ALTER TABLE `news`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
