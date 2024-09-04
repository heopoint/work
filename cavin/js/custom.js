$(document).ready(function(){	

	
	
	//isotope
	var $wrap = $(".wrap");
	var $filter = $(".filter a");	
	$wrap.isotope({	
		 itemSelector : '.item',
		 masonry : {
			  columnWidth : 320,
			  rowHeight: 200
			}		  
	});	

	//sort
	$filter.on("click",function(e){
		e.preventDefault();
		var $this = $(this);
		$filter.removeClass("on");
		$this.addClass("on");
	    var selector = $this.attr('data-filter');
	    $wrap.isotope({ filter: selector });	 
	});	
	
	// auto sized right contents	
	/*
	$(window).on("resize",function(){
		var fullWid = $(window).width();
		var navWid = $(".header").width();
		var conWid = fullWid-navWid;		
		$(".wrap").width(conWid);
	});
	*/
	
	

	
	
	

});
