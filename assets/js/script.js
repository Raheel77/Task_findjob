function toggleMenu() {
    document.querySelector('.nav-center').classList.toggle('show');
}


document.addEventListener('DOMContentLoaded', function () {
    const bookmarkIcons = document.querySelectorAll('.bookmark-icon');

    bookmarkIcons.forEach(function (icon) {
        icon.addEventListener('click', function () {
            icon.classList.toggle('active');
        });
    });
});