var scrollTopNav = 10;
var scrollTopCommunity = 500;
var windowH = 700;
var $body = $('body');
var $window = $(window);
var $document = $(document);

function progressBar() {
  var winScroll = $document.scrollTop();
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  $("#scrollIndicator").css("width",scrolled + "%");
}

//navbar scrolling
$window.on("scroll", function() {
  if($window.scrollTop() > scrollTopNav) {
    $(".navbar").removeClass("navbar-white");
    $(".navbar").addClass("navbar-scrolled");
    $(".nav-link").addClass("nav-link-scrolled");
  } else {
    //remove the background property so it comes transparent again (defined in your css)
    $(".navbar").removeClass("navbar-scrolled");
    $(".navbar").addClass("navbar-white");
    $(".nav-link").removeClass("nav-link-scrolled");
  }
  // animation when scrolling
  if($(".first-left-img").position().top < $window.scrollTop() + windowH) {
    $(".first-left-img").addClass("animated fadeInLeft");
    $(".first-right-img").addClass("animated fadeInRight");
  };
  if($(".second-left-img").position().top < $window.scrollTop() + windowH) {
    $(".second-left-img").addClass("animated fadeInLeft");
    $(".second-right-img").addClass("animated fadeInRight");
  };
  if($("#space").position().top < $window.scrollTop() + windowH) {
    $("#space").addClass("animated fadeInLeft");
    $("#discover-campus").addClass("animated fadeInRight");  
  };
  if($(".event-hall").position().top < $window.scrollTop() + windowH) {
    $(".event-hall").addClass("animated fadeInLeft");
  }
  if($(".class-room").position().top < $window.scrollTop() + windowH) {
    $(".class-room").addClass("animated fadeInRight");
  }
  if($(".office-room").position().top < $window.scrollTop() + windowH) {
    $(".office-room").addClass("animated fadeInLeft");
  }
  if($(".meeting-room").position().top < $window.scrollTop() + windowH) {
    $(".meeting-room").addClass("animated fadeInRight");
  }

  //add "book a tour" button when scrolling		
  if($window.scrollTop() > scrollTopCommunity) {
    $(".nav-book-button").addClass("show");
  }	else {
    $(".nav-book-button").removeClass("show")
  }
    // show progress bar
  progressBar();
});

// Find all YouTube videos
var $allVideos = $("iframe[src^='//www.youtube.com']");
// Figure out and save aspect ratio for each video
$.each($allVideos,function() {
  $(this)
    .data('aspectRatio', this.height / this.width)
    // and remove the hard coded width/height
    .removeAttr('height')
    .removeAttr('width');
});
// When the window is resized
$window.resize(function() {
  var newWidth = $body.width();
  // Resize all videos according to their own aspect ratio
  $allVideos.each(function() {
    var $el = $(this);
    $el
      .width(newWidth)
      .height(newWidth * $el.data('aspectRatio'));
  });
// Kick off one resize to fix all videos on page load
}).resize();