// owl carousel script
$(document).ready(function() {
    $('#expertise-carousel').owlCarousel({
        margin: 15,
        nav: false,
        dot: true,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 2
            },
            1000: {
                items: 5
            }
        }
    })
    $('#services-carousel').owlCarousel({
        margin: 15,
        nav: false,
        dot: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 4
            }
        }
    })
    $('#work-carousel').owlCarousel({
        margin: 15,
        nav: false,
        dot: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    })
});