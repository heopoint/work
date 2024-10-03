//자주 수정이 일어날 정보값들을 상단에 전역변수로 설정
const frame = "section"; 
const article = "article"; 
 
const activeClass = "on"; 
const btn = document.querySelectorAll("main ul li"); 
let grid;  

 
window.addEventListener("load", ()=>{     
  init();  
  filter(btn);  
});


function init(){

  grid = new Isotope(frame, {
    itemSelector: article,
    columnWidth: article,
    transitionDuration: '0.5s'
  });
}
  
 
function filter(menu){  
  for(let el of menu){
    el.addEventListener("click", e=>{
      e.preventDefault();
      const sort = e.currentTarget.querySelector("a").getAttribute("href");
      grid.arrange({
        filter : sort
      });

      for(let el of menu){
        el.classList.remove(activeClass);
      }
      
      e.currentTarget.classList.add(activeClass);
    })
  }
}

