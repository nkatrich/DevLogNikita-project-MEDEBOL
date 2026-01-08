// Variables
    // DOM vars

    const modalOffer = document.querySelector('.modal-offer');
    const bagOfOffers = document.querySelector('.bag-of-offers');
    const formForBuy = document.querySelector('.form-for-buy');
    // DOM change theme
    const toggleTheme = document.querySelector('.toggle-theme');
    const toggleView = document.querySelector('.toggle-view');
    const body = document.querySelector('body');
    const header = document.querySelector('.header');
    const footer = document.querySelector('.footer');
    const headerFooterLogo = document.querySelectorAll('.header-footer-logo');
    const divNavHeaderFooterA = document.querySelectorAll('.div-nav-header-footer');
    const stick = document.querySelectorAll('.stick');
    const blocksOfInputAndCatalog = document.querySelector('.blocks-of-input-and-catalog');
    const inputSearch = document.querySelector('.input-search');
    const search = document.querySelector('.search');
    const btnCatalog = document.querySelector('.btn-catalog');
    const currentOffers = document.querySelector('.current-offers');
    const threeOffer = document.querySelectorAll('.three-offer');
    const cardOffer = document.querySelectorAll('.card-offer');
    

// toggle change theme

toggleTheme.addEventListener('click', () => {
    body.classList.toggle('dark');
    header.classList.toggle('dark');
    footer.classList.toggle('dark');
    toggleTheme.classList.toggle('dark');
    toggleView.classList.toggle('dark');
    inputSearch.classList.toggle('dark');
    search.classList.toggle('dark');
    btnCatalog.classList.toggle('dark');
    currentOffers.classList.toggle('dark');

    headerFooterLogo.forEach(el => {
        el.classList.toggle('dark');
    });
    divNavHeaderFooterA.forEach(el => {
        el.classList.toggle('dark');
    });
    stick.forEach(el => {
        el.classList.toggle('dark');
    });
    threeOffer.forEach(el => {
        el.classList.toggle('dark');
    });
    cardOffer.forEach(el => {
        el.classList.toggle('dark');
    });
});

// Logic scroll header

window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset;

    if (scrollTop > (window.lastScrollTop || 0)) {
        header.classList.add('moved');
        blocksOfInputAndCatalog.classList.add('moved');
    } else {
        header.classList.remove('moved');
        blocksOfInputAndCatalog.classList.remove('moved');
    }
    window.lastScrollTop = scrollTop;
});

// Cards logic: Content

