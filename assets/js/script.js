function toggleMenu() {
}









document.addEventListener('DOMContentLoaded', function () {



    document.querySelector('.menu-toggle').addEventListener('click', function () {
        document.querySelector('body').classList.toggle('hidden');
        document.querySelector('.nav-menu').classList.toggle('show');
    });


    const bookmarkIcons = document.querySelectorAll('.bookmark-icon');

    bookmarkIcons.forEach(function (icon) {
        icon.addEventListener('click', function () {
            icon.classList.toggle('active');
        });
    });
});