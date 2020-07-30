$(document).ready(function () {

    $nav = $('.nav');
    $toggleCollapse = $('.toggle-collapse');

    /** click event on toggle menu */
    $toggleCollapse.click(function () {
        $nav.toggleClass('collapse');
    })

});

    // owl-crousel for blog
    $('.owl-carousel').owlCarousel();


    // click to scroll down
    $('.move-down button').click(function () {
        $('html, body').animate({
            scrollTop: 1000
        }, 3000);
    })
    
    // click to scroll top
    $('.move-up span').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    })
