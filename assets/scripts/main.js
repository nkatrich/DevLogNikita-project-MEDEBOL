// variables
    // DOM vars

    // burger-menu

    const burgerMenuBtn = document.querySelector('.burger-menu');
    const burgerMenuModal = document.querySelector('.burger-menu-modal');

    // input find offer
    const suggestedOffersByInput = document.querySelector('.suggested-offers-by-input');
    const darkBg = document.querySelector('.dark-bg');

    // catalog
    const modalCatalog = document.querySelector('.modal-catalog');

    // slider
    const slider = document.querySelector('.slider');
    const btnLeftArrowOfSlider = document.querySelector('.btn-left-arrow-of-slider');
    const btnRightArrowOfSlider = document.querySelector('.btn-right-arrow-of-slider');

    // modal windows
    const dialog = document.querySelector('dialog');
    const modalOffer = document.querySelector('.modal-offer');
        // modal offer tags
        const contentImageOffer = document.querySelector('.content-image-offer img');
        const nameDescriptionOfOffer = document.querySelector('.name-description-of-offer');
        const price = document.querySelector('.price');
        const throwInBin = document.querySelector('.throw-in-bin');
    const bagOfOffers = document.querySelector('.bag-of-offers');
    const formForBuy = document.querySelector('.form-for-buy');
    const btnOrderPreform = document.querySelector('.div-order-preform button');
    const suggestedOffers = document.querySelector('.suggested-offers');
    const pSuggestedOffer = document.querySelector('.p-suggested-offer');
    const formEmail = document.querySelector('#email');
    const formName = document.querySelector('#name');
    const tick = document.querySelector('#tick');

    // modal window form
    const order = document.querySelector('.order');
    const inCaseIfWrong = document.querySelector('.in-case-if-wrong')
    const ifOrderSuccessful = document.querySelector('.if-order-successful');

    // fixed button to check whishlist
    const currentBag = document.querySelector('.current-bag');

    // cards-content
    const divOffers = document.querySelector('.div-offers');
    const cardOfferImg = document.querySelectorAll('.card-offer img');
    const descriptionOfOffer = document.querySelectorAll('.description-of-offer');
    const currentGoods = document.querySelector('.current-goods');

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
    const btnCatalogImg = document.querySelector('.btn-catalog img');
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
    burgerMenuModal.classList.toggle('dark');
    inputSearch.classList.toggle('dark');
    search.classList.toggle('dark');
    suggestedOffersByInput.classList.toggle('dark');
    btnCatalog.classList.toggle('dark');
    modalCatalog.classList.toggle('dark');
    btnLeftArrowOfSlider.classList.toggle('dark');
    btnRightArrowOfSlider.classList.toggle('dark');
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
    // sofas
    {src: './assets/images/furniture/furniture-1.webp', text: 'Современный трехместный диван с прямыми линиями. Имеет низкую спинку и тонкие высокие ножки, что придает конструкции легкость. Выполнен в лаконичном скандинавском стиле.', id: 1, cardAN: "#card-a-1", price: 1200},
    {src: './assets/images/furniture/furniture-2.webp', text: 'Уютный диван песочного или светло-коричневого оттенка. Отличается пышными формами, мягкими подлокотниками и дополнительными подушками спинки. Идеально подойдет для традиционного интерьера.', id: 2, cardAN: "#card-a-2", price: 1400},
    {src: './assets/images/furniture/furniture-3.webp', text: 'Стильный диван графитового цвета на металлическом каркасе. Дизайн подчеркнут четкими формами подушек и видимым основанием, что характерно для стиля лофт или хай-тек.', id: 3, cardAN: "#card-a-3", price: 1650},
    // beds
    {src: './assets/images/furniture/furniture-4.webp', text: 'Минималистичная модель в натуральном светлом оттенке дерева. Имеет простое низкое изголовье и тонкие ножки. Застелена светлым постельным бельем с серым пледом в ногах.', id: 4, cardAN: "#card-a-4", price: 2300},
    {src: './assets/images/furniture/furniture-5.webp', text: 'Элегантная модель темно-серого цвета. Главная особенность — высокое мягкое изголовье с небольшими боковыми «ушками» (крыльями). Выглядит массивно и комфортно.', id: 5, cardAN: "#card-a-5", price: 1950},
    {src: './assets/images/furniture/furniture-6.webp', text: 'Модель из дерева насыщенного коричневого цвета с выраженной текстурой. Имеет классическое прямоугольное изголовье средней высоты. Дизайн сочетает в себе уют и строгость.', id: 6, cardAN: "#card-a-6", price: 2679},
    // shelves
    {src: './assets/images/furniture/furniture-7.webp', text: 'Минималистичная композиция из четырех отдельных деревянных полок светлого оттенка. Они крепятся к стене без видимых кронштейнов, создавая эффект легкости. Расположены каскадом друг над другом.', id: 7, cardAN: "#card-a-7", price: 350},
    {src: './assets/images/furniture/furniture-8.webp', text: 'Две полки, объединенные общим дизайном. Деревянные поверхности дополнены строгими черными металлическими рамами-держателями прямоугольной формы. Отлично подойдут для интерьера в стиле лофт.', id: 8, cardAN: "#card-a-8", price: 539},
    {src: './assets/images/furniture/furniture-9.webp', text: 'Дизайнерская трехъярусная конструкция. Темные деревянные полки пересекаются тонкой металлической вертикальной опорой, смещенной от центра. Асимметричный и современный вид.', id: 9, cardAN: "#card-a-9", price: 399},
    // closets
    {src: './assets/images/furniture/furniture-10.webp', text: 'Высокий двухстворчатый шкаф в очень светлом (почти белом) дереве. Гладкие фасады без видимых ручек подчеркивают чистоту линий. Стоит практически вплотную к полу, скрывая ножки.', id: 10, cardAN: "#card-a-10", price: 979},
    {src: './assets/images/furniture/furniture-11.webp', text: 'Компактный шкаф из дерева теплого коричневого оттенка с выраженной вертикальной текстурой. Имеет две дверцы с лаконичными ручками и установлен на тонкие, аккуратные ножки.', id: 11, cardAN: "#card-a-11", price: 1479},
    {src: './assets/images/furniture/furniture-12.webp', text: 'Двухдверный шкаф из темного дерева, приподнятый над полом на высоком и тонком черном металлическом каркасе. Такое основание делает массивную мебель визуально более легкой.', id: 12, cardAN: "#card-a-12", price: 1290},
    // tables
    {src: './assets/images/furniture/furniture-13.webp', text: 'Конструкция выполнена из светлого дерева в лаконичном скандинавском стиле. Столешница и массивные боковые опоры образуют единый монолитный контур. Отлично подойдет как для работы, так и в качестве обеденного стола в светлом интерьере.', id: 13, cardAN: "#card-a-13", price: 1100},
    {src: './assets/images/furniture/furniture-14.webp', text: 'Классическое сочетание массивной столешницы из дерева среднего тона и черного металлического подстолья. П-образные металлические ножки обеспечивают высокую устойчивость и придают мебели индустриальный характер.', id: 14, cardAN: "#card-a-14", price: 1299},
    {src: './assets/images/furniture/furniture-15.webp', text: 'Модель с выразительной столешницей из темного дерева с глубокой текстурой. Основание представляет собой тонкую, но прочную металлическую раму черного цвета. Выглядит элегантно и менее массивно, чем центральная модель, благодаря более тонким линиям каркаса.', id: 15, cardAN: "#card-a-15", price: 1179},
]

// show all current offers

currentGoods.innerText = contentCard.length;

// make short text

const futureShortedTexts = [];
for (let j = 0; j < contentCard.length; j++) {
    futureShortedTexts.push(contentCard[j].text);
}

// adding cards(dynamic adding)

for (let i = 0; i < contentCard.length; i++) {
    let shorted = shortText(futureShortedTexts)
    cardOfferImg[i].src = contentCard[i].src;
    descriptionOfOffer[i].textContent = shorted[i];
}

// logic of cards button

let getIdOfBtn;

divOffers.addEventListener('click', (e) => {
    const find = e.target.closest('.find');

    if (find) {
        getIdOfBtn = Number(find.dataset.offer);
        modalOffer.showModal();
        contentImageOffer.src = contentCard[getIdOfBtn - 1].src;
        nameDescriptionOfOffer.textContent = contentCard[getIdOfBtn - 1].text;
        price.textContent = `${contentCard[getIdOfBtn - 1].price}£`;
        toShortForWhishlist.push(contentCard[getIdOfBtn - 1].text);
    }
})

// logic burger-menu

burgerMenuBtn.addEventListener('click', () => {
    burgerMenuModal.classList.toggle('shown');
})

// logic of input search

// style when active

inputSearch.addEventListener('focus', () => {
    darkBg.classList.add('shown');
    inputSearch.style.borderRadius = '20px 0 0 0';
})

inputSearch.addEventListener('blur', () => {
    darkBg.classList.remove('shown');
    inputSearch.style.borderRadius = '20px 0 0 20px';
})

// suggest offers by input

let userSearchResult
let findIdResultFoundByUser;
let idForA;
let savedValue;

// system convert in low case exist content text of card in case if user write any case(big small). Also system convert to low case value from input. It guarantee that system can filter user wants

// debounce code for input search

function debounce(fn, delay) {
  let timer;

  return function(...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  }
}

function showResults(query) {
    // find result if exist
    if (query.length === 0) {
        suggestedOffersByInput.classList.remove('shown');
        return;
    }
    
    suggestedOffersByInput.innerHTML = ``;
    savedValue = query
    let queryLowCase = query.toLowerCase();
    userSearchResult = contentCard.filter(i => i.text.includes(queryLowCase)).map(i => i.text.toLowerCase());
    findIdResultFoundByUser = contentCard.filter(i => i.text.includes(queryLowCase)).map(i => i.cardAN);

    if (!savedValue) {
        suggestedOffersByInput.classList.remove('shown');
    }
    else if (userSearchResult.length === 0) suggestedOffersByInput.classList.remove('shown');
    else {
        suggestedOffersByInput.classList.add('shown');
        let shorted = shortText(userSearchResult)
        for (let i = 0; i < userSearchResult.length; i++) {
            suggestedOffersByInput.innerHTML += `<a href="${findIdResultFoundByUser[i]}">${shorted[i]}</a><hr>`;
        }
        savedValue = undefined;
    }
}

// call debounce

inputSearch.addEventListener("input", debounce(e => {
  showResults(e.target.value);
}, 500));

suggestedOffersByInput.addEventListener('click', () => {
    suggestedOffersByInput.classList.remove('shown');
    inputSearch.style.borderRadius = '20px 0 0 20px';
})

setInterval(() => {
    if (suggestedOffersByInput.classList.contains('shown')) inputSearch.style.borderRadius = '20px 0 0 0';
}, 70)

// logic of catalog

btnCatalog.addEventListener('mouseenter', () => {
    modalCatalog.classList.add('shown');
})

btnCatalog.addEventListener('mouseleave', () => {
    modalCatalog.classList.remove('shown');
})

// logic of slider

let indexOfImgInSlider = 0;

btnLeftArrowOfSlider.addEventListener('click', () => {
    if (indexOfImgInSlider > 0) {
        indexOfImgInSlider--;
        moveSlider();
    }
})

btnRightArrowOfSlider.addEventListener('click', () => {
    if (indexOfImgInSlider != 2) {
        indexOfImgInSlider++;
        moveSlider();
    }
})

// logic of dialogs

currentBag.addEventListener('click', () => {
    bagOfOffers.showModal();
    checkIfBinEmpty();
    checkIfBtnPreorderEnable();
})

// insert good in wishlist

let toShortForWhishlist = [];
throwInBin.addEventListener('click', () => {
    let shorted = shortText(toShortForWhishlist);
    suggestedOffers.innerHTML += `<div class="card-suggested-offer"><img class="img-suggested-offer" src="${contentCard[getIdOfBtn - 1].src}" alt="Мебель" width="70px" height="70px"><p class="p-suggested-offer">${shorted}</p><div class="div-suggested-offer"><button class="btn-suggested-offer""><img src="./assets/icons/bin.svg" alt="Отменить и убрать" width="50px" height="50px"></button></div></div>`;
    // delete previous shorted text
    toShortForWhishlist.pop();
    
    modalOffer.close();
})

// delegation event listeners for delete good from wishlist

suggestedOffers.addEventListener('click', (e) => {
    const btnSuggestedOffer = e.target.closest('.btn-suggested-offer');
    const cardSuggestedOffer = e.target.closest('.card-suggested-offer');

    if (btnSuggestedOffer) {
        cardSuggestedOffer.remove();
        checkIfBinEmpty();
        checkIfBtnPreorderEnable();
    }
})

// close current dialog by cross button

document.addEventListener('click', (e) => {
    const btnCloseModal = e.target.closest('.div-close-modal');

    if (btnCloseModal) {
        modalOffer.close();
        bagOfOffers.close();
        formForBuy.close();
        toShortForWhishlist.pop();
    }
})

// form logic

let checkOneTime = true;
order.addEventListener('click', (e) => {
    e.preventDefault();
    let formEmailValue = formEmail.value;
    let formNameValue = formName.value;
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (regex.test(formEmailValue) && formEmailValue.length >= 6 && formNameValue.length >= 2 && tick.checked) {
        formForBuy.close();
        suggestedOffers.innerHTML = ``;
        ifOrderSuccessful.classList.add('shown');
        setTimeout(() => {
            ifOrderSuccessful.classList.remove('shown');
        }, 9000)
    }
    else {
        if (checkOneTime) {
            inCaseIfWrong.style.display = 'block';
            inCaseIfWrong.innerText = `Введены некорректные данные. Проверьте что все поля введены, email содержит @, .com. Так же вы согласными с условиями.`;
            checkOneTime = false;
        }
    }
})

// function for make from long text to short text

function shortText(text) {
    let restoredStr;
    let restoredAll = [];
    for (let i = 0; i < text.length; i++) {
        let splited = text[i].split("");
        let returnToStr = [];
        for (let j = 0; j < 35; j++) {
            returnToStr.push(splited[j])
        }
        restoredStr = returnToStr.join("").trim();
        restoredStr += '...';
        restoredAll.push(restoredStr);
    }
    return restoredAll;
}

// function for check if bin empty put definite text, else: text is absence and there is will be goods

function checkIfBinEmpty() {
    if (!suggestedOffers.querySelector('.card-suggested-offer')) {
        suggestedOffers.innerHTML = `<h2 class="if-bin-empty">Здесь пока ничего нету</h2>`;
    }

    else if (suggestedOffers.querySelector('.if-bin-empty')) {
        suggestedOffers.querySelector('.if-bin-empty').remove();
    }
}

function checkIfBtnPreorderEnable() {
    if (suggestedOffers.querySelector('.card-suggested-offer')) {
        btnOrderPreform.disabled = false;
        btnOrderPreform.addEventListener('click', () => {
            bagOfOffers.close();
            formForBuy.showModal();
        })
    }

    if (!suggestedOffers.querySelector('.card-suggested-offer')) {
        btnOrderPreform.disabled = true;
    }
}

// function need for move pictures in slider

function moveSlider() {
    const widthOfSlider = slider.offsetWidth;
    slider.style.transform = `translateX(-${indexOfImgInSlider * widthOfSlider}px)`;
}