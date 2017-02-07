
/*Sticky Nav-------------------------------------------------------------- */
function collapseNavbar() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
}

$(window).scroll(collapseNavbar);
$(document).ready(collapseNavbar);

// Highlight the top nav as scrolling occurs
// $('body').scrollspy({
//     target: '.navbar-fixed-top'
// });

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a:not(.dropdown-toggle)').click(function() {
    $('.navbar-toggle:visible').click();
});


/*-------------------------------------------------------------*/

$(document).ready(function() {
    $('.skillfade').hide().fadeIn();
});



// $(function() {
// $('body').hide().fadeIn(300);
//
// });

$(document).ready(function() {

    /* Every time the window is scrolled ... */
    $(window).scroll( function(){

        /* Check the location of each desired element */
        $('.hideme').each( function(i){

            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){

                $(this).animate({'opacity':'1'},500);

            }

        });

    });

});
