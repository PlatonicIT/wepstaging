jQuery(window).error(function(e){
    e.preventDefault();
});
jQuery(document).ready(function($){
    $(document).click(function(e) {
        if (!$(e.target).is('a')) {
            $('.collapse').collapse('hide');	    
        }
    });

    // Darker Navigation
    if($(".navbar").hasClass('animate')) {
        $(window).scroll(function () {
            var currentScrollTop = $(window).scrollTop();
            $('body').append('<style>.navbar::after{opacity: ' + currentScrollTop/$('.slider, .hero-wrap').height() + ';}</style>');
            if($(".navbar").hasClass('sticky-menu')) {
                var $height = $('.navbar').height();  
                $('.order_online').css({                        
                    'margin-top': $height
                });                          
            } else {
                $('.order_online').css({                        
                    'margin-top': '0'
                });
            }
        });
    }
 

    // Sticky Menu
    if($(".nav_white_label_area").hasClass('is-sticky')) {
        $(function(){  
            createSticky($(".is-sticky"));
        });
          
        function createSticky(sticky) {            
            if (typeof sticky !== "undefined") {
          
              var pos = sticky.offset().top,
                  win = $(window);
                
              win.on("scroll", function() {
                win.scrollTop() >= pos ? sticky.addClass("sticky-menu") : sticky.removeClass("sticky-menu"); 
                if($(".nav_white_label_area").hasClass('sticky-menu')) {
                    var $height = $('.navbar').height();  
                    $('.nav_white_label_area').css({                        
                        'margin-top': $height
                    });                          
                } else {
                    $('.nav_white_label_area').css({                        
                        'margin-top': 0
                    });
                }
              });     
            }
        }
    } 
});    