/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./mobile-menu.js":
/*!************************!*\
  !*** ./mobile-menu.js ***!
  \************************/
/***/ (() => {

eval("window.onload = function () {\r\n    var mobileMenuToggle = document.getElementById('mobile-menu-toggle');\r\n    var mobileMenu = document.querySelector('.mobile-menu');\r\n    var desktopMenu = document.querySelector('.desktop-menu');\r\n\r\n    // Функція для перевірки розмірів екрану та визначення, чи потрібно приховувати десктопне меню і кнопку \"Меню\"\r\n    function checkScreenWidth() {\r\n        var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;\r\n\r\n        // Перевірка розміру екрану та визначення видимості десктопного меню та кнопки \"Меню\"\r\n        desktopMenu.style.display = (screenWidth <= 768) ? 'none' : 'block';\r\n        mobileMenuToggle.style.display = (screenWidth <= 768) ? 'block' : 'none';\r\n    }\r\n\r\n    // Показуємо кнопку \"Меню\" на мобільних пристроях при завантаженні сторінки\r\n    mobileMenuToggle.style.display = 'none';\r\n\r\n    // Обробник подій для кнопки \"Меню\"\r\n    mobileMenuToggle.onclick = function () {\r\n        // Перевірка, чи є клас 'menu-open', і додавання/видалення класу 'menu-open' для мобільного меню\r\n        mobileMenu.classList.toggle('menu-open', !mobileMenu.classList.contains('menu-open'));\r\n\r\n        // Оновлення розмірів екрану та видимості елементів при взаємодії з кнопкою \"Меню\"\r\n        checkScreenWidth();\r\n    };\r\n\r\n    // Обробник подій для розмірів вікна при завантаженні сторінки та зміні розмірів вікна\r\n    window.addEventListener('resize', checkScreenWidth);\r\n    checkScreenWidth(); // Викликаємо перевірку розмірів екрану при завантаженні сторінки\r\n};\r\n\n\n//# sourceURL=webpack:///./mobile-menu.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./mobile-menu.js"]();
/******/ 	
/******/ })()
;