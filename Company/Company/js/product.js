$(document).ready(function(){
    $('#raumuong').popover({
    	html : true,
      	content: function() {
        return $('#popover_content_wrapper').html();
      }
    });
});
