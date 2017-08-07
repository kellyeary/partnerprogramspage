$(document).ready(function() {
    //.header is above the fold content
    var topOfOthDiv = $(".header").offset().top;
    //function is set off by scrolling past header
    $(window).scroll(function() {
        if($(window).scrollTop() > topOfOthDiv) {
          //CTA container slides down after scrolling past the header
            $(".sticky").slideDown(200);
        }
          //CTA container hides when back at top of page
        else{
          $(".sticky").slideUp(200);
        }
    });
});
