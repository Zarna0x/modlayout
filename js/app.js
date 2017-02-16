$(document).ready(function () {
	//Mobile Nav functionality
	$("#hamburger,#close").click(function(){
         $("#hamburger,#close").toggle();
         $(".custom-navigation #links").toggleClass('visible');
	});
});
