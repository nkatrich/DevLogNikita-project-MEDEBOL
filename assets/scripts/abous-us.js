// Variables
    // DOM vars


    // DOM change theme
    const toggleTheme = document.querySelector('.toggle-theme');
    const toggleView = document.querySelector('.toggle-view');
    const body = document.querySelector('body');
    const header = document.querySelector('.header');
    const footer = document.querySelector('.footer');
    const headerFooterLogo = document.querySelectorAll('.header-footer-logo');
    const factTitle = document.querySelectorAll('.fact-title');
    const marketingLogo = document.querySelectorAll('.marketing-logo');

// toggle change theme

toggleTheme.addEventListener('click', () => {
    body.classList.toggle('dark');
    header.classList.toggle('dark');
    footer.classList.toggle('dark');
    toggleTheme.classList.toggle('dark');
    toggleView.classList.toggle('dark');

    headerFooterLogo.forEach(el => {
        el.classList.toggle('dark');
    });
    factTitle.forEach(el => {
        el.classList.toggle('dark');
    })
    marketingLogo.forEach(el => {
        el.classList.toggle('dark')
    })
});

// Logic scroll header

window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset;

    if (scrollTop > (window.lastScrollTop || 0)) {
        header.classList.add('moved');
    } else {
        header.classList.remove('moved');
    }
    window.lastScrollTop = scrollTop;
});

