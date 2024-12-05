document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.header__button-mobile').addEventListener('click', function() {
        const nav = document.querySelector('.header__nav');
        nav.classList.toggle('open');
    });

    document.addEventListener('click', function(event) {
        const nav = document.querySelector('.header__nav');
        const button = document.querySelector('.header__button-mobile');
        
        if (!nav.contains(event.target) && !button.contains(event.target)) {
            nav.classList.remove('open');
            
        }
    });
});