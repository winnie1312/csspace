function progressBar() {
  var scrollPosition = $(window).scrollTop();
  var height = $(document).height() - $(window).height();
  var progressBarPosition = (scrollPosition / height) * 100;
  $("#scrollIndicator").width(progressBarPosition + "%");
}

$(window).on("scroll", function() {
  //add "book a tour" button on navbar when scrolling over BOOK NOW button
  if($(window).scrollTop() > $(".book-now-button").position().top) {
    $(".nav-book-button").addClass("show");
  }	else {
    $(".nav-book-button").removeClass("show")
  }
    // show progress bar
  progressBar();
  // animation when scrolling
    $(".first-left-img").addClass("animated fadeInLeft");
    $(".first-right-img").addClass("animated fadeInRight");
    $(".second-left-img").addClass("animated fadeInLeft");
    $(".second-right-img").addClass("animated fadeInRight");
    $("#space").addClass("animated fadeInLeft");
    $("#discover-campus").addClass("animated fadeInRight");  
    $(".event-hall").addClass("animated fadeInLeft");
    $(".class-room").addClass("animated fadeInRight");
    $(".office-room").addClass("animated fadeInLeft");
    $(".meeting-room").addClass("animated fadeInRight");
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
$(window).resize(function() {
  var newWidth = $('body').width();
  // Resize all videos according to their own aspect ratio
  $allVideos.each(function() {
    var $el = $(this);
    $el
      .width(newWidth)
      .height(newWidth * $el.data('aspectRatio'));
  });
// Kick off one resize to fix all videos on page load
}).resize();