$(document).ready(function () {
    $('owl-carousel').each(function () {
        var config = eval("(" + $(this).attr('config') + ")");
        $(this).addClass('owl-carousel').owlCarousel(config);
    });
})
