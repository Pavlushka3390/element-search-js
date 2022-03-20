let modal = document.querySelector('#modal_main');
let modalSuccess = document.querySelector('#modal_success');
let buttonsClose = document.querySelectorAll('.modal__close');
let button = modal.querySelector('.show-success');

modal.classList.add('modal_active');

for(let x of buttonsClose) {
    x.onclick = function(event) {
        parent = this.closest('.modal');
        parent.classList.remove('modal_active');
    }
}

button.onclick = function() {
    parent = this.closest('.modal');
    parent.classList.remove('modal_active');
    modalSuccess.classList.add('modal_active');
};