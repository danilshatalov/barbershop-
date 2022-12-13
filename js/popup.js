const link = document.querySelector('.login-link');
const popup = document.querySelector('.modal-login');
const login = popup.querySelector('[name = login]');
const password = popup.querySelector('[name = password]');
const close = document.querySelector('.modal-close');
const form = popup.querySelector('form');


link.addEventListener('click', function (evt) {
    evt.preventDefault();
    popup.classList.add('modal-show');
    login.focus();

});

close.addEventListener('click', function (evt) {
    evt.preventDefault();
    popup.classList.remove('modal-show');
    popup.classList.remove('modal-error');
});

form.addEventListener('submit', function (evt) {
    if (!login.value || !password.value) {
        evt.preventDefault();
        console.log('Введите логин и пароль');
        popup.classList.remove('modal-error');
        popup.offsetWidth = popup.offsetWidth;
        popup.classList.add('modal-error');


    }
});

window.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
        if (popup.classList.contains('modal-show')) {
            evt.preventDefault();
            popup.classList.remove('modal-show');
        }
    }
});

