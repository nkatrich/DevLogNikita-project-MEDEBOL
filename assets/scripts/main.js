// variables
    // DOM vars

    // modal windows
    const modalOffer = document.querySelector('.modal-offer');
    const bagOfOffers = document.querySelector('.bag-of-offers');
    const formForBuy = document.querySelector('.form-for-buy');

    // cards-content
    const cardOfferImg = document.querySelectorAll('.card-offer img');
    const descriptionOfOffer = document.querySelectorAll('.description-of-offer');

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
    descriptionOfOffer.forEach(el => {
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

// entire list is in order with HTML structure
const contentCard = [
    {src: './assets/images/furniture/furniture-1.webp', text: 'Современный трехместный диван с прямыми линиями. Имеет низкую спинку и тонкие высокие ножки, что придает конструкции легкость. Выполнен в лаконичном скандинавском стиле.'},
    {src: './assets/images/furniture/furniture-2.webp', text: 'Уютный диван песочного или светло-коричневого оттенка. Отличается пышными формами, мягкими подлокотниками и дополнительными подушками спинки. Идеально подойдет для традиционного интерьера.'},
    {src: './assets/images/furniture/furniture-3.webp', text: 'Стильный диван графитового цвета на металлическом каркасе. Дизайн подчеркнут четкими формами подушек и видимым основанием, что характерно для стиля лофт или хай-тек.'},
    {src: './assets/images/furniture/furniture-4.webp', text: 'Минималистичная модель в натуральном светлом оттенке дерева. Имеет простое низкое изголовье и тонкие ножки. Застелена светлым постельным бельем с серым пледом в ногах.'},
    {src: './assets/images/furniture/furniture-5.webp', text: 'Элегантная модель темно-серого цвета. Главная особенность — высокое мягкое изголовье с небольшими боковыми «ушками» (крыльями). Выглядит массивно и комфортно.'},
    {src: './assets/images/furniture/furniture-6.webp', text: 'Модель из дерева насыщенного коричневого цвета с выраженной текстурой. Имеет классическое прямоугольное изголовье средней высоты. Дизайн сочетает в себе уют и строгость.'},
    {src: './assets/images/furniture/furniture-7.webp', text: 'Минималистичная композиция из четырех отдельных деревянных полок светлого оттенка. Они крепятся к стене без видимых кронштейнов, создавая эффект легкости. Расположены каскадом друг над другом.'},
    {src: './assets/images/furniture/furniture-8.webp', text: 'Две полки, объединенные общим дизайном. Деревянные поверхности дополнены строгими черными металлическими рамами-держателями прямоугольной формы. Отлично подойдут для интерьера в стиле лофт.'},
    {src: './assets/images/furniture/furniture-9.webp', text: 'Дизайнерская трехъярусная конструкция. Темные деревянные полки пересекаются тонкой металлической вертикальной опорой, смещенной от центра. Асимметричный и современный вид.'},
    {src: './assets/images/furniture/furniture-10.webp', text: 'Высокий двухстворчатый шкаф в очень светлом (почти белом) дереве. Гладкие фасады без видимых ручек подчеркивают чистоту линий. Стоит практически вплотную к полу, скрывая ножки.'},
    {src: './assets/images/furniture/furniture-11.webp', text: 'Компактный шкаф из дерева теплого коричневого оттенка с выраженной вертикальной текстурой. Имеет две дверцы с лаконичными ручками и установлен на тонкие, аккуратные ножки.'},
    {src: './assets/images/furniture/furniture-12.webp', text: 'Двухдверный шкаф из темного дерева, приподнятый над полом на высоком и тонком черном металлическом каркасе. Такое основание делает массивную мебель визуально более легкой.'},
    {src: './assets/images/furniture/furniture-13.webp', text: 'Конструкция выполнена из светлого дерева в лаконичном скандинавском стиле. Столешница и массивные боковые опоры образуют единый монолитный контур. Отлично подойдет как для работы, так и в качестве обеденного стола в светлом интерьере.'},
    {src: './assets/images/furniture/furniture-14.webp', text: 'Классическое сочетание массивной столешницы из дерева среднего тона и черного металлического подстолья. П-образные металлические ножки обеспечивают высокую устойчивость и придают мебели индустриальный характер.'},
    {src: './assets/images/furniture/furniture-15.webp', text: 'Модель с выразительной столешницей из темного дерева с глубокой текстурой. Основание представляет собой тонкую, но прочную металлическую раму черного цвета. Выглядит элегантно и менее массивно, чем центральная модель, благодаря более тонким линиям каркаса.'},
]

// adding cards(dynamic adding)

for (let i = 0; i < contentCard.length; i++) {
    cardOfferImg[i].src = contentCard[i].src;
    descriptionOfOffer[i].textContent = contentCard[i].text;
}