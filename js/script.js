$(document).ready(function(){
	$(".navbar-burger").click(function(){
		$(".navbar-burger").toggleClass("is-active");
		$(".navbar-menu").toggleClass("is-active");
	});

	$("#tombolProjek, .navbar-item").on('click', function(event) {

    
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
 
        window.location.hash = hash;
      });
    } 
  });

});


