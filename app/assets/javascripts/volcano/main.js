$(document).ready(function(){
	

	/*  Foundation Init    */
	$(document).foundation();



	/*  carousel Init    */
	$('#carousel').carouFredSel({
	 	width : '670',
	 	pagination  : ".pagination",
	 	responsive : true,
	 	scroll :{
	 		fx : 'fade'
	 	},
	 	items :{
	 		visible : 1,
	 		width : '670'
	 	},
		swipe: {
			onMouse: true,
			onTouch: true
		}
    });





	/*    Mean navigation menu scroll to    */
    $('#mean_nav ul li a').click(function(e){
    	e.preventDefault();
    	scrollTo($(this).attr('href'), 900, 'easeInOutCubic');
    });






    /*    Back to top button    */
    var back_top = $('#back_top');

    back_top.click(function(e){
    	e.preventDefault();
    	scrollTo(0, 900, 'easeInOutCubic');
    	
    });

    function scrollTo(target, speed, ease){
    	$(window).scrollTo(target, speed, {easing:ease});
    }

    $(window).on('scroll', function(){    
	    if($(this).scrollTop()>749)
	    {
	    	back_top.stop().animate({opacity : 1}, 250);
	    }else
	    {
	    	back_top.stop().animate({opacity : 0}, 250);	    
	    }   
    });



    // vegas

    $.vegas('slideshow', {
      delay:7000,
      backgrounds:[
        { src:'https://suedbayerische-immobilien.de/sites/default/files/Sehenswuerdigkeiten-Muenchen/Schloss-Neuschwanstein-Bayern/Schloss-Neuschwanstein.jpg', fade:1500 },   
        { src:'http://philpriston.com/wp-content/uploads/2015/01/DSC02022.jpg', fade:1500 },
         { src:'http://wallpaper.pickywallpapers.com/1920x1080/london-parliament.jpg', fade:1500 },   
         { src:'http://hdwallpaperia.com/wp-content/uploads/2014/01/London-Wallpaper-HD-Cityscape-Image.jpg', fade:1500 }
      ]
    });

});