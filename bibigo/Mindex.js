$(function(){

    
    
    

    $('.story_btn li').click(function(){
        var idx = $(this).index()

        $('.story_btn li').removeClass('on')
        $(this).addClass('on')

        $('.story_stImg li').removeClass('on')
        $('.story_stImg li').eq(idx).addClass('on')

        $('.story_stList li').removeClass('on')
        $('.story_stList li').eq(idx).addClass('on')
    })

    //  스토리 js
    //  국가 js
    $(' #da-thumbs > li ').each( function() { $(this).hoverdir(); } );
    
    $('.visual .nav li a').click(function(e){
        e.preventDefault()
        var attr=$(this).attr('href') 
        alert
        $('.scene').animate({'left':'0'})  
        $('.scene iframe').attr('src',attr)
        $('.btn img').transition({ rotate: '45deg' });
    })
    var sw=0
    $('.btn img').click(function(){
        sw=!sw
        if(sw){
            $('.scene').animate({'left':'0'})
            $('.btn img').transition({ rotate: '45deg' });  
        }else{
            $('.scene').animate({'left':'50%'})
            $('.btn img').transition({ rotate: '0deg' });  
        }
    })  
    //  국가 js
    //  메뉴 js
    
    var Wwth = $(window).width()
    var shei = 150
    var fhei = 350
    // $('.SlideWrap').mousewheel(function(event, delta){
    //     event.preventDefault();
    //     if(delta>0){
    //         // alert('위로')
    //             $('.storyWrap').stop().animate({'margin-top':'-='+shei+'px'},500,function(){
    //             $('.storyWrap .story').first().stop().appendTo('.storyWrap')
    //             $('.storyWrap').css({'margin-top':'-'+(shei*3)+'px'})
    //             })
    //             $('.fadeWrap').stop().animate({'margin-top':'-='+fhei+'px'},0,function(){
    //             $('.fadeWrap .fade').first().stop().appendTo('.fadeWrap')
    //             $('.fadeWrap').css({'margin-top':'-'+(fhei*3)+'px'})
    //             })
    //         $('.titfade').removeClass('on')
    //         $('.titfade').first().stop().appendTo('.titWrap')
    //         $('.titfade:nth-child(4)').addClass('on')
    //         if(Wwth > 1200){
    //             $('.slideContainer .slide').stop().transition({scale: .9},500)
    //             $('.slideContainer .slide').stop().animate({'margin':'0 1%'},500)
    //             $('.slideContainer .slide:nth-child(4)').next().stop().transition({scale: 1.5},500)
    //             $('.slideContainer .slide:nth-child(4)').next().stop().animate({'margin':'0 3%'},500)
    //         }else{
    //             $('.slideContainer .slide').stop().transition({scale: .8},500)
    //             $('.slideContainer .slide').stop().animate({'margin':'0 1%'},500)
    //             $('.slideContainer .slide:nth-child(4)').next().stop().transition({scale: 1.2},500)
    //             $('.slideContainer .slide:nth-child(4)').next().stop().animate({'margin':'0 3%'},500)
    //         }
    //         $('.SlideWrap').stop().animate({'left':'-396%'},500,function(){
    //             $('.SlideWrap .slide').first().stop().appendTo('.SlideWrap')
    //             $('.SlideWrap').css({'left':'-300%'})
    //         })//마우스 휠다운 슬라이드
    //     }else if(delta<0){
    //         // alert('아래로')
    //             $('.storyWrap').stop().animate({'margin-top':'+='+shei+'px'},500,function(){
    //             $('.storyWrap .story').last().stop().prependTo('.storyWrap')
    //             $('.storyWrap').css({'margin-top':'-'+(shei*3)+'px'})
    //             })
    //             $('.fadeWrap').stop().animate({'margin-top':'+='+fhei+'px'},0,function(){
    //             $('.fadeWrap .fade').last().stop().prependTo('.fadeWrap')
    //             $('.fadeWrap').css({'margin-top':'-'+(fhei*3)+'px'})
    //             })
    //         $('.titfade').removeClass('on')
    //         $('.titfade').last().stop().prependTo('.titWrap')
    //         $('.titfade:nth-child(4)').addClass('on')
    //         if(Wwth > 1200){
    //             $('.slideContainer .slide').stop().transition({scale: .9},500)
    //             $('.slideContainer .slide').stop().animate({'margin':'0 1%'},500)
    //             $('.slideContainer .slide:nth-child(4)').prev().stop().transition({scale: 1.5},500)
    //             $('.slideContainer .slide:nth-child(4)').prev().stop().animate({'margin':'0 3%'},500)
    //         }else{
    //             $('.slideContainer .slide').stop().transition({scale: .8},500)
    //             $('.slideContainer .slide').stop().animate({'margin':'0 1%'},500)
    //             $('.slideContainer .slide:nth-child(4)').prev().stop().transition({scale: 1.2},500)
    //             $('.slideContainer .slide:nth-child(4)').prev().stop().animate({'margin':'0 3%'},500)
    //         }
    //         $('.SlideWrap').stop().animate({'left':'-204%'},500,function(){
    //             $('.SlideWrap .slide').last().stop().prependTo('.SlideWrap')
    //             $('.SlideWrap').css({'left':'-300%'})
    //         })//마우스 휠업 슬라이드   
    //     }//휠 다운 델타
        
    // })//슬라이드 마우스휠 이벤트

    $('.next').click(function(e){
        e.preventDefault()
        $('.storyWrap').stop().animate({'margin-top':'-='+shei+'px'},500,function(){
            $('.storyWrap .story').first().stop().appendTo('.storyWrap')
            $('.storyWrap').css({'margin-top':'-'+(shei*3)+'px'})
         })
         $('.fadeWrap').stop().animate({'margin-top':'-='+fhei+'px'},0,function(){
            $('.fadeWrap .fade').first().stop().appendTo('.fadeWrap')
            $('.fadeWrap').css({'margin-top':'-'+(fhei*3)+'px'})
        })
        $('.titfade').removeClass('on')
        $('.titfade').first().stop().appendTo('.titWrap')
        $('.titfade:nth-child(4)').addClass('on')
        if(Wwth > 1200){
            $('.slideContainer .slide').stop().transition({scale: .9},500)
            $('.slideContainer .slide').stop().animate({'margin':'0 1%'},500)
            $('.slideContainer .slide:nth-child(4)').next().stop().transition({scale: 1.5},500)
            $('.slideContainer .slide:nth-child(4)').next().stop().animate({'margin':'0 3%'},500)
        }else{
            $('.slideContainer .slide').stop().transition({scale: .8},500)
            $('.slideContainer .slide').stop().animate({'margin':'0 1%'},500)
            $('.slideContainer .slide:nth-child(4)').next().stop().transition({scale: 1.2},500)
            $('.slideContainer .slide:nth-child(4)').next().stop().animate({'margin':'0 3%'},500)
        }
        $('.SlideWrap').stop().animate({'left':'-396%'},500,function(){
            $('.SlideWrap .slide').first().stop().appendTo('.SlideWrap')
            $('.SlideWrap').css({'left':'-300%'})
        })
    })
    $('.prev').click(function(e){
        e.preventDefault()
        $('.storyWrap').stop().animate({'margin-top':'+='+shei+'px'},500,function(){
            $('.storyWrap .story').last().stop().prependTo('.storyWrap')
            $('.storyWrap').css({'margin-top':'-'+(shei*3)+'px'})
         })
         $('.fadeWrap').stop().animate({'margin-top':'+='+fhei+'px'},0,function(){
            $('.fadeWrap .fade').last().stop().prependTo('.fadeWrap')
            $('.fadeWrap').css({'margin-top':'-'+(fhei*3)+'px'})
        })
        $('.titfade').removeClass('on')
        $('.titfade').last().stop().prependTo('.titWrap')
        $('.titfade:nth-child(4)').addClass('on')
        if(Wwth > 1200){
            $('.slideContainer .slide').stop().transition({scale: .9},500)
            $('.slideContainer .slide').stop().animate({'margin':'0 1%'},500)
            $('.slideContainer .slide:nth-child(4)').prev().stop().transition({scale: 1.5},500)
            $('.slideContainer .slide:nth-child(4)').prev().stop().animate({'margin':'0 3%'},500)
        }else{
            $('.slideContainer .slide').stop().transition({scale: .8},500)
            $('.slideContainer .slide').stop().animate({'margin':'0 1%'},500)
            $('.slideContainer .slide:nth-child(4)').prev().stop().transition({scale: 1.2},500)
            $('.slideContainer .slide:nth-child(4)').prev().stop().animate({'margin':'0 3%'},500)
        }
        $('.SlideWrap').stop().animate({'left':'-204%'},500,function(){
            $('.SlideWrap .slide').last().stop().prependTo('.SlideWrap')
            $('.SlideWrap').css({'left':'-300%'})
        })//마우스 휠업 슬라이드   
    })

    //  메뉴 js
    //  레시피 js

    $('.recipe_next').click(function(e){
        e.preventDefault()
        $('.recipe_menu ul').animate({'margin-left':'-200%'},800,function(){
            $('.recipe_menu ul li').first().appendTo('.recipe_menu ul');
            $('.recipe_menu ul').css({'margin-left':'-100%'})
        })
        $('.explanwrap').animate({'margin-top':'0px'},800,function(){
            $('.explanwrap>li').last().prependTo('.explanwrap');
            $('.explanwrap').css({'margin-top':'-400px'})
        })
    })

    $('.recipe_prev').click(function(e){
        e.preventDefault()
        $('.recipe_menu ul').animate({'margin-left':'0px'},800,function(){
            $('.recipe_menu ul li').last().prependTo('.recipe_menu ul');
            $('.recipe_menu ul').css({'margin-left':'-100%'})
        })
            $('.explanwrap').animate({'margin-top':'-800px'},800,function(){
            $('.explanwrap>li').first().appendTo('.explanwrap');
            $('.explanwrap').css({'margin-top':'-400px'})
        })
    })
    $(".recipe_scroll").mCustomScrollbar({
            theme:"dark"
        });
    //  레시피 js
    //  뉴스 js

    var Nidx = ''
    
   

    $('.news_tab li').click(function(){
        Nidx = $(this).index()

        $('.news_tab li').removeClass('on')
        $(this).addClass('on')

        $('.swiper-container').removeClass('on')
        $('.swiper-container').eq(Nidx).addClass('on')

        // $('.news_list li').css({'opacity':'0'})
        // var idx = 0
        // $('.news_list').eq(Nidx).find('li').each(function(){
        //     idx = $(this).index()
        //     $('.news_list').eq(Nidx).find('li').delay(200).eq(idx).animate({'opacity':'1'})
        //     // alert(idx)
        // })
        // idx = 0
    })

    // $(window).scroll(function(){
    //     var Nsch = $('.news_wrap').offset().top
    //     var sch = $(window).scrollTop()
    //     if(sch >= Nsch){
    //         $('.news_list li').each(function(){
    //            var idx = $(this).index()
    //            $('.news_list').eq(Nidx).find('li').delay(200).eq(idx).animate({'opacity':'1'})
    //        })
    //     }
    // })
    var swiper1 = new Swiper('.swiper1', {
        spaceBetween: 10,
          slidesPerView: 3,
          pagination: {
            el: '.swiper-pagination1',
            type: 'progressbar',
          },
      });
      var swiper2 = new Swiper('.swiper2', {
        spaceBetween: 10,
          slidesPerView: 3,
          pagination: {
            el: '.swiper-pagination2',
            type: 'progressbar',
          },
      });
      var swiper3 = new Swiper('.swiper3', {
        spaceBetween: 10,
          slidesPerView: 3,
          pagination: {
            el: '.swiper-pagination3',
            type: 'progressbar',
          },
      });
   
})