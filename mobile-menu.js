window.onload = function () {
    var mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    var mobileMenu = document.querySelector('.mobile-menu');
    var desktopMenu = document.querySelector('.desktop-menu');

    // Функція для перевірки розмірів екрану та визначення, чи потрібно приховувати десктопне меню і кнопку "Меню"
    function checkScreenWidth() {
        var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

        // Перевірка розміру екрану та визначення видимості десктопного меню та кнопки "Меню"
        desktopMenu.style.display = (screenWidth <= 768) ? 'none' : 'block';
        mobileMenuToggle.style.display = (screenWidth <= 768) ? 'block' : 'none';
    }

    // Показуємо кнопку "Меню" на мобільних пристроях при завантаженні сторінки
    mobileMenuToggle.style.display = 'none';

    // Обробник подій для кнопки "Меню"
    mobileMenuToggle.onclick = function () {
        // Перевірка, чи є клас 'menu-open', і додавання/видалення класу 'menu-open' для мобільного меню
        mobileMenu.classList.toggle('menu-open', !mobileMenu.classList.contains('menu-open'));

        // Оновлення розмірів екрану та видимості елементів при взаємодії з кнопкою "Меню"
        checkScreenWidth();
    };

    // Обробник подій для розмірів вікна при завантаженні сторінки та зміні розмірів вікна
    window.addEventListener('resize', checkScreenWidth);
    checkScreenWidth(); // Викликаємо перевірку розмірів екрану при завантаженні сторінки
};
