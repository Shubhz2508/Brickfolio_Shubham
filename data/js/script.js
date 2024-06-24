
document.addEventListener('DOMContentLoaded', () => {
    var swiper = new Swiper('.mySwiper', {
        slidesPerView: 1.01,
        reverseDirection: true,
        spaceBetween: 10,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            768: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
        },
        autoplay: {
            delay: 0,
            disableOnInteraction: true,
        },
        speed: 2500, // Speed of the continuous slide (lower is faster)
        loop: true, // Enable continuous loop mode
        freeMode: true, 
        freeModeMomentum: false,
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const propertyTypeSelect = document.getElementById('property-type');
    const commercialOptionsContainer = document.getElementById('commercial-options');

    // Function to show or hide commercial options based on selected value
    function toggleCommercialOptions() {
        const selectedValue = propertyTypeSelect.value;
        if (selectedValue === 'Commercial') {
            commercialOptionsContainer.style.display = 'block';
        } else {
            commercialOptionsContainer.style.display = 'none';
        }
    }

    // Initial call to toggle options based on default selection
    toggleCommercialOptions();

    // Event listener for dropdown change
    propertyTypeSelect.addEventListener('change', toggleCommercialOptions);
});
// Hide loader once page is fully loaded
const loaderContainer = document.querySelector('.loader-container');
loaderContainer.style.display = 'none';

document.addEventListener('DOMContentLoaded', () => {
    const counts = document.querySelectorAll('.count');
    const speed = 97; // Adjust the speed for incrementing the count

    counts.forEach((counter) => {
        const target = parseInt(counter.getAttribute('data-target'));
        let count = 0;
        const inc = target / speed;

        function updateCount() {
            count += inc;
            if (count < target) {
                counter.innerText = Math.floor(count);
                setTimeout(updateCount, 100); // Adjust the timeout interval
            } else {
                counter.innerText = target;
            }
        }

        updateCount();
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.achievments-card');

    cards.forEach(card => {
        card.addEventListener('mouseover', () => {
            card.style.transform = 'translateY(-5px)';
        });

        card.addEventListener('mouseout', () => {
            card.style.transform = 'translateY(0)';
        });
    });
});

$(document).ready(function() {
    $('.showcase-card-img img').click(function() {
        var imgId = $(this).attr('data-id');
        $(`.showcase-card-img img[data-id='${imgId}']`).toggleClass('enlarged');
    });
});

$(document).ready(function() {
    var cards = $('.achievments-card');

    $(window).on('load resize', function() {
        if ($(window).width() < 750) {
            cards.each(function(index) {
                $(this).addClass('slide-in');
            });
        } else {
            cards.removeClass('slide-in slide-out').css({
                'transform': 'none',
                'opacity': '1',
                'pointer-events': 'auto'
            });
        }
    });
});

