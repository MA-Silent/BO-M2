let scrollCont = document.querySelector('.gallery');
let main = document.querySelector('main');
let next = document.getElementById('nextBtn');
let back = document.getElementById('backBtn');

function scroll(number){
    main.scrollTop = number
    return main.scrollTop
}

next.addEventListener("click", () => {
    scrollCont.style.scrollBehavior = "smooth"
    scrollCont.scrollLeft += 1300
})

back.addEventListener("click", () => {
    scrollCont.style.scrollBehavior = "smooth"
    scrollCont.scrollLeft -= 1300
})