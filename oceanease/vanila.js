
 

//  const section = document.querySelector('section');
//   const articleElems = document.querySelectorAll('article');
//   const frame = document.querySelector('.frame');
//   const scene = document.querySelector('.scene');
//   let isFrameOpen = false;

//   // Hover 시 배경 이미지 변경
//   articleElems.forEach((art) => {
//     art.addEventListener('mouseenter', function () {
//       art.classList.add('on');
//       let fullBg = art.querySelector('h3').dataset.bg;
//       section.style.backgroundImage = `url(${fullBg})`;
//     });

//     art.addEventListener('mouseleave', function () {
//       art.classList.remove('on');
//     });
//   });

//   // 버튼 클릭 시 창 열기
//   document.querySelectorAll('button a').forEach((link) => {
//     link.addEventListener('click', function (e) {
//       e.preventDefault();
//       let href = this.getAttribute('href');

//       // 프레임 열기 애니메이션
//       frame.style.top = '0';
//       isFrameOpen = true;

//       // Fetch the content of the external file
//       fetch(href)
//         .then(response => response.text())
//         .then(data => {
//           // Load the fetched HTML into the scene
//           scene.innerHTML = data;
//         })
//         .catch(error => {
//           scene.textContent = `Error loading content from ${href}`;
//         });

//       // 콘텐츠 로드 후 스크롤 가능하게 설정
//       document.body.style.overflowY = 'auto';
//     });
//   });

//   // 스크롤이 맨 위에 도달하면 창 닫기
//   window.addEventListener('scroll', function () {
//     if (isFrameOpen && window.scrollY === 0) {
//       closeFrame();
//     }
//   });

//   // 프레임 닫기 함수
//   function closeFrame() {
//     frame.style.top = '100%';
//     document.body.style.overflowY = 'hidden';
//     isFrameOpen = false;
//   }