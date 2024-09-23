
// ----------------------------
let grid
const frame = '.productItem'
const box = '.productItem article'
const speed = '.5s'

window.addEventListener('load', function () {
    init()
    document.querySelector(".item li a.on").click();
})


function init() {
    grid = new Isotope(frame, {
        itemSelector: box,
        columnWidth: box,
        transitionDuration: speed,
        filter: ".soda"
    })
}

const items = document.querySelectorAll('.item li a')

items.forEach(item => {
    item.addEventListener('click', function (e) {
        e.preventDefault()
        let href = this.getAttribute('href')
        grid.arrange({ filter: href })

        items.forEach((item) => {
            item.classList.remove('on')
        })
        this.classList.add('on')

    })
})

const aElems = document.querySelectorAll('.menu li a')
aElems.forEach(function (a) {
    a.addEventListener('click', function (e) {
        e.preventDefault();
        aElems.forEach(function (link) {
            link.classList.remove('on');
        })
        this.classList.add('on')
        let href = this.getAttribute('href');
        document.querySelectorAll('article').forEach(function (article) {
            article.classList.remove('on');
        });
        document.querySelector(href).classList.add('on');
    });
});
//---------------------------------

function dotAni(active) {

    let current = active
    let currentPos = current.getBoundingClientRect().left + window.pageXOffset;
    let currentWid = current.offsetWidth / 2
    document.querySelector('.dot').scrollTo({
        left: currentPos + currentWid - 5,
        behavior: 'smooth'
    });
}

const firstTabMenu = document.querySelector('.menu li');
dotAni(firstTabMenu);