
//When document is scrolling it shoot this event and call the scrollBrightness function
window.addEventListener("scroll", scrollBrightness);

function scrollBrightness(){

    //I get the header from the document
    const header = document.querySelector('.header');

    //I give it the header__brightness class when the scroll on Y axis is above 0
    header.classList.toggle('header__brightness', window.scrollY > 0);
}