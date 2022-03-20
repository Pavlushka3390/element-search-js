menuMain = document.querySelectorAll('.menu_main');

function clear(menu) {
    for(let x of menu.querySelectorAll('.menu_sub')) {
        x.classList.remove('menu_active');
    }
}

clickMenuHandler = function(event) {
    
    let parent = event.target.closest('.menu__item')
    
    let sub = parent.querySelector('.menu_sub');

    if (sub === null) {
        return true;
    }

    event.preventDefault()

    let menuActive = sub.classList.contains('menu_active');

    let menu = parent.closest('.menu');
    clear(menu);

    if(menuActive) {
        sub.classList.remove('menu_active');
    } else {
        sub.classList.add('menu_active');
    }
}

for(menu of menuMain) {
    let x = menu.querySelectorAll('.menu__link');
    for(let y of x) {
        y.onclick = clickMenuHandler;
    };
}