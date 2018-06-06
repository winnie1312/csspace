		//navbar scrolling
		$(window).on("scroll", function() {
			if($(window).scrollTop() > 10) {
					$(".navbar").addClass("navbar-scrolled");
					$(".nav-link").addClass("nav-link-scrolled");
			} else {
					//remove the background property so it comes transparent again (defined in your css)
				 $(".navbar").removeClass("navbar-scrolled");
				 $(".nav-link").removeClass("nav-link-scrolled");
      }
      
      if($(window).scrollTop()>500) {
				$(".nav-book-button").addClass("show");
			}	else {
        $(".nav-book-button").removeClass("show")
			}
		});
		//add "book a tour" button when scrolling
		
    $(".active").toggleClass("active");
    $(".active").onclick = $(".active").toggleClass("active");

// Find all YouTube videos
var $allVideos = $("iframe[src^='//www.youtube.com']"),

    // The element that is fluid width
    $fluidEl = $("body");

// Figure out and save aspect ratio for each video
$allVideos.each(function() {
  $(this)
    .data('aspectRatio', this.height / this.width)

    // and remove the hard coded width/height
    .removeAttr('height')
    .removeAttr('width');

});

// When the window is resized
$(window).resize(function() {

  var newWidth = $fluidEl.width();

  // Resize all videos according to their own aspect ratio
  $allVideos.each(function() {

    var $el = $(this);
    $el
      .width(newWidth)
      .height(newWidth * $el.data('aspectRatio'));

  });

// Kick off one resize to fix all videos on page load
}).resize();