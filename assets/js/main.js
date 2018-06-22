var scrollTopNav = 10;
var scrollTopCommunity = 500;
var windowH = 700;
function progressBar() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  $("#scrollIndicator").css("width",scrolled + "%");
}
//navbar scrolling
$(window).on("scroll", function() {
  // <disable hover>
  let body = document.body,
  timer;
  window.addEventListener('scroll', function() {
  clearTimeout(timer);
  if(!body.classList.contains('disable-hover')) {
  body.classList.add('disable-hover')
  };
  timer = setTimeout(function(){
  body.classList.remove('disable-hover')
  },500);
  }, false);
  // </disable hover>

  if($(window).scrollTop() > scrollTopNav) {
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
  if($(".first-left-img").position().top < $(window).scrollTop() + windowH) {
    $(".first-left-img").addClass("animated fadeInLeft");
    $(".first-right-img").addClass("animated fadeInRight");
  };
  if($(".second-left-img").position().top < $(window).scrollTop() + windowH) {
    $(".second-left-img").addClass("animated fadeInLeft");
    $(".second-right-img").addClass("animated fadeInRight");
  };
  if($("#space").position().top < $(window).scrollTop() + windowH) {
    $("#space").addClass("animated fadeInLeft");
    $("#discover-campus").addClass("animated fadeInRight");  
  };
  if($(".event-hall").position().top < $(window).scrollTop() + windowH) {
    $(".event-hall").addClass("animated fadeInLeft");
  }
  if($(".class-room").position().top < $(window).scrollTop() + windowH) {
    $(".class-room").addClass("animated fadeInRight");
  }
  if($(".office-room").position().top < $(window).scrollTop() + windowH) {
    $(".office-room").addClass("animated fadeInLeft");
  }
  if($(".meeting-room").position().top < $(window).scrollTop() + windowH) {
    $(".meeting-room").addClass("animated fadeInRight");
  }
  // show progress bar
  if($(window).scrollTop() > scrollTopCommunity) {
    $(".nav-book-button").addClass("show");
  }	else {
    $(".nav-book-button").removeClass("show")
  }
  progressBar();
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