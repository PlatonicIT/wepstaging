jQuery(document).ready(function($){
    $(document).click(function(e) {
	if (!$(e.target).is('a')) {
    	$('.collapse').collapse('hide');	    
    }
});
});    