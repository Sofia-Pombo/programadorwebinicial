-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 30-12-2023 a las 19:29:55
-- Versión del servidor: 8.0.31
-- Versión de PHP: 8.0.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `lagaticueva`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `novedades`
--

DROP TABLE IF EXISTS `novedades`;
CREATE TABLE IF NOT EXISTS `novedades` (
  `id` int NOT NULL AUTO_INCREMENT,
  `titulo` varchar(250) NOT NULL,
  `subtitulo` text NOT NULL,
  `cuerpo` text NOT NULL,
  `img_id` varchar(300) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `novedades`
--

INSERT INTO `novedades` (`id`, `titulo`, `subtitulo`, `cuerpo`, `img_id`) VALUES
(5, 'Sorteo de festejo por Killa', 'Para festejar su día 84 de tratamiento contra la PIF', 'Nuestra Killa del amor, la guerrera número 1 de La Gaticueva, cumplió su día 84 de tratamiento contra la PIF y sus resultados dieron bárbaros. Así que organizamos un sorteo para ustedes porque todo esto fue posible gracias a su ayuda. Pueden participar por Instagram, vamos a sortear en 48 hs.', 'efqygit6adsul9chickw'),
(6, 'Calendario 2024', '¡Ya podés encargarnos el tuyo!', 'Se viene nuestro calendario 2024, con las mejores fotos de nuestros gaticuevitos de este año. Con frases y un diseño hermoso para disfrutar todo el año. Para que te queden los recuerdos del 2023 que no vamos a borrar de nuestros corazones. ¡Tenés tiempo hasta la semana que viene para encargarlo con descuento!', 'ikdyganj4ejrovlsilf2'),
(2, 'Showroom y brindis navideño', '¡Última oportunidad del año!', 'Vení a conocer y mimar a nuestros gaticuevitos. También tenés nuestra gatitienda con muchas opciones de regalos para navidad. En la Gaticueva Central, de 18 a 21.30 hs. Hay cupos limitados. ¡Reservá tu entrada!', 'ak1s9l0tgr6pclryklk7'),
(4, 'Bingos pendientes', 'Vamos a estar jugando mañana viernes', 'Estén atentos porque mañana vamos a estar jugando los bingos que nos quedaron pendientes. Van a poder ver los resultados en nuestras historias de Instagram. ¡Suerte para todos!', 'jsnl6fgsssrrfzu6ll6f');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE IF NOT EXISTS `usuarios` (
  `id` int NOT NULL AUTO_INCREMENT,
  `usuario` varchar(250) NOT NULL,
  `password` varchar(250) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `usuario`, `password`) VALUES
(1, 'sofia', '81dc9bdb52d04dc20036dbd8313ed055'),
(2, 'prueba', '4a7d1ed414474e4033ac29ccb8653d9b');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
