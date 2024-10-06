const headerBg = ['#04C5EE', '#0D0E40', '#05C3EF', '#7578F1', '#EB579E']
const listItems = document.querySelectorAll('nav ul li');

listItems.forEach((li, i) => {
  const link = li.querySelector('a'); // li 내부의 a 요소 가져오기

  // 클릭 이벤트 처리
  link.addEventListener('click', function(event) {
    event.preventDefault();

    const targetId = this.getAttribute('href');
    const targetSection = document.querySelector(targetId);

    window.scrollTo({
      top: targetSection.offsetTop,
      behavior: 'smooth'
    });
  });
});

window.addEventListener('scroll', function() {
  let scrollTop =   document.documentElement.scrollTop;
  let sections = document.querySelectorAll('section');
  let header = document.querySelector('header');

  sections.forEach((section, i) => {
    let sectionTop = section.offsetTop;
    let video = section.querySelector('video');
    
    if (scrollTop >= sectionTop - 100) {
      if (video) video.play();
      
      // li 요소의 클래스 처리
      for (const li of listItems) {
        li.classList.remove('on');
      }
      listItems[i].classList.add('on');  // 현재 인덱스의 li에 클래스 추가
      
      sections.forEach(sec => sec.classList.remove('on'));
      section.classList.add('on');
      
      console.log(headerBg[i]);
      header.style.backgroundColor = headerBg[i];
      
    } else {
      if (video) video.pause();
    }
  });
});

let sections = document.querySelectorAll('section')

sections.forEach(function (section,i) {
    section.addEventListener('wheel', function (e) {
        e.preventDefault()
        let delta = e.deltaY
        // 마우스 휠을 위로 스크롤(delta < 0)하는데
        // 현재 첫 번째 섹션(i === 0)에 있으면 더 이상 
        //이전 섹션으로 갈 수 없으므로 아무 작업도 하지 않고 함수를 종료합니다.
        if(delta<0 && i===0){
            return
            // 마우스 휠을 아래로 스크롤(delta > 0)하는데 
            //마지막 섹션(i === sections.length - 1)에 있으면 
            //더 이상 다음 섹션으로 갈 수 없으므로 아무 작업도 하지 않고 함수를 종료합니다.
        }else if(delta>0 && i===sections.length-1){
            return
        }
        let secTop = delta < 0 ? section.previousElementSibling : section.nextElementSibling
        if (secTop) {
          //선택된 섹션(secTop)의 화면 상단에서의 위치(offsetTop)를 가져옵니다
            let targetOffsetTop = secTop.offsetTop
            window.scrollTo({ top: targetOffsetTop, behavior: 'smooth' })
        }
    })
})