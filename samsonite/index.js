$(document).ready(function() {
  $('ul').on('click', 'li a', function(e) {
    e.preventDefault();
    var href = $(this).attr('href');
    var secTop = $(href).offset().top;
    $('html').stop().animate({ scrollTop: secTop },500);
  });

  $(window).scroll(function() {
    var scrTop = $(window).scrollTop();
    var h = $(window).height();

    $('section').each(function(i) {
      var secTop = $(this).offset().top;

      if (scrTop + 50 >= secTop && scrTop + 50 <= secTop + h) {
        $('nav li a').removeClass('on');
        $('nav li').eq(i).find('a').addClass('on');
        $(this).addClass('on');
      } else {
        $(this).removeClass('on');
      }
    });
  });

  $('section').on('wheel', function(e) {
    e.preventDefault();
    var delta = e.originalEvent.deltaY;
    var targetSection = delta < 0 ? $(this).prev('section') : $(this).next('section');

    if (targetSection.length) {
      var targetTop = targetSection.offset().top;
      $('html').stop().animate({ scrollTop: targetTop }, '500');
    }
  });
});

/*
const sections = document.querySelectorAll('section')
const navItems = document.querySelectorAll('nav li')
 
const articles = document.querySelectorAll('article.visual .title')

document.querySelector('ul').addEventListener('click', function (e) {
  let anchor = e.target.closest('li a')
  if (anchor) {
    e.preventDefault()
    let href = anchor.getAttribute('href')
    let secTop = document.querySelector(href).offsetTop
    window.scrollTo({ top: secTop, behavior: 'smooth' })
  }
})

window.addEventListener('scroll', function () {
  let scrTop = window.scrollY
  let h=this.window.innerHeight
 
  sections.forEach(function (section, i) {
    section.classList.remove('on')
    let secTop = section.offsetTop
    if (scrTop+50 >= secTop  && scrTop+50 <= secTop+h ) {
      navItems.forEach(function (navItem) {
        navItem.querySelector('a').classList.remove('on')
      })
      navItems[i].querySelector('a').classList.add('on')
      section.classList.add('on')
    }
  })
})

sections.forEach(function (section) {
  section.addEventListener('wheel', function (e) {
    e.preventDefault()
    let delta = e.deltaY
    let targetSection =
      delta < 0
        ? section.previousElementSibling
        : section.nextElementSibling

    if (targetSection) {
   
      let targetTop = targetSection.offsetTop
      window.scrollTo({ top: targetTop, behavior: 'smooth' })
    }
  })
})
*/
