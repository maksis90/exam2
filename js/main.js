'use strict';

(function($){
    $(document).ready(function() {
        // isotope
            $('.blocks').isotope({
                itemSelector: '.blocks__img',
                percentPosition: true,
                masonry: {
                    columnWidth: '.sizer',
                    gutter: 10
                }
            });

            $('.filters').on('click', 'li', function () {
                var val = $(this).data('filter');
                $('.blocks').isotope({filter: val});
            });

       /* $('#filters, li').on('click', function() {
            $('li.filters__link--active').removeClass('filters__link--active');
            $(this).addClass('filters__link--active');
        });
        */
        // slider

        $(document).ready(function() {
        $('.slider').slick({
			dots: true
        });
    });

    });
})(jQuery);

//map

var map,
    image = 'images/marker.png',
    coordinates = {lat: 49.568722, lng: 34.585238};

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: coordinates,
        zoom: 19
    });

    var marker = new google.maps.Marker({
        position: coordinates,
        map: map,
        icon: image
    });
}