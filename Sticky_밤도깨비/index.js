const headerBg=['#1e2c5a','#1e2c5a','#ff7800','#ffe100','#7057a3','#eb6ea5','#c4d700','#00341f']
const h1Img=['logo_y.png','logo_n.png','logo_w.png']

const nav_y=['intro_y.png','yyd_y.png','banpo_y.png','ddp_y.png','cheong_y.png','market_y.png','christ_y.png']
const nav_n=['intro_n.png','yyd_n.png','banpo_n.png','ddp_n.png','cheong_n.png','market_n.png','christ_n.png']
const nav_w=['intro_w.png','yyd_w.png','banpo_w.png','ddp_w.png','cheong_w.png','market_w.png','christ_w.png']

const sns_y=['twitter_y.png','facebook_y.png','insta_y.png','youtube_y.png']
const sns_n=['twitter_n.png','facebook_n.png','insta_n.png','youtube_n.png']
const sns_w=['twitter_w.png','facebook_w.png','insta_w.png','youtube_w.png']

const header=document.querySelector('header')
const menuElems=document.querySelectorAll('.menu li')
header.style.backgroundColor=headerBg[0]

const snsElems=document.querySelectorAll('.sns li')
const sectionElems=document.querySelectorAll('section')

const home =  document.querySelector('a.top')

window.addEventListener('scroll', function () {
  // let scrTop=pageYOffset
  let scrTop=scrollY
  document.querySelector('h6').textContent=scrTop

  if(scrTop>=610){
    home.style.opacity=1
  }else{
    home.style.opacity=0
  }
  
 
  sectionElems.forEach(function(section,i){
    let secTop=section.offsetTop
    if(scrTop>=secTop){
      header.style.backgroundColor=headerBg[i]

      
      if(i===0 ||i===1 || i===4){
        header.querySelector('h1 img').setAttribute('src','./img/'+h1Img[0])
        menuElems.forEach(function(menu,j){
          console.log(menu,j);
          menu.querySelector('img').setAttribute('src','./img/'+ nav_y[j])
        })
        snsElems.forEach(function(sns,k){
          sns.querySelector('img').setAttribute('src','./img/'+ sns_y[k])
        })
      }

      if(i===2 ||i===3 || i===5 || i===6){
        header.querySelector('h1 img').setAttribute('src','./img/'+h1Img[1])
        menuElems.forEach(function(menu,j){
           menu.querySelector('img').setAttribute('src','./img/'+ nav_n[j])
        })
        snsElems.forEach(function(sns,k){
          sns.querySelector('img').setAttribute('src','./img/'+ sns_n[k])
        })
      }
      if(i===7){
        header.querySelector('h1 img').setAttribute('src','./img/'+h1Img[2])
        menuElems.forEach(function(menu,j){
         menu.querySelector('img').setAttribute('src','./img/'+ nav_w[j])
        })
        snsElems.forEach(function(sns,k){
          sns.querySelector('img').setAttribute('src','./img/'+ sns_w[k])
        })
      }
    }
  })

})

home.addEventListener('click',function(e){
  e.preventDefault()
  window.scrollTo({top:0,behavior:"smooth"})
})


menuElems.forEach(li => {
li.addEventListener('click',function(e){
  e.preventDefault()
  let href=li.querySelector('a').getAttribute('href')
  
  let secTop=document.querySelector(href).offsetTop
  window.scrollTo({top:secTop,behavior:"smooth"})
})
});

