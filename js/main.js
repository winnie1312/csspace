$(document).ready(function () {
    $(".navbar").toggleClass("bg-dark");    
    $(document).scroll(function () {
        $(".navbar").toggleClass("bg-dark", $(this).scrollTop() > $(".navbar").height());
    });
    $(".active").toggleClass("active");
    $(".active").onclick = $(".active").toggleClass("active");
});