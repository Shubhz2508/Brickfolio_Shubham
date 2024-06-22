

document.addEventListener('DOMContentLoaded', () => {
    var swiper = new Swiper('.mySwiper', {
        slidesPerView: 2,
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
            delay: 5000,
            disableOnInteraction: false,
        },
        loop: true,
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
