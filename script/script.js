var swiper = new Swiper(".swiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    }
});

function showCardDetails(name, position, company, imgUrl, twitterUrl = "#", linkedinUrl = "#") {
    const cardDetails = document.getElementById('cardDetails');
    const cardDetailsContent = document.getElementById('cardDetailsContent');
    
    cardDetailsContent.innerHTML = `
        <div class="card-details-header">
            <img src="${imgUrl}" alt="${name}" class="card-details-img">
            <div class="card-info">
                <h2>${name}</h2>
                <h4>${position}</h4>
                <p>${company}</p>
                <div class="social-icons">
                    <a href="${twitterUrl}" target="_blank">
                       <i class="fa-brands fa-x-twitter"></i>
                    </a>
                    <a href="${linkedinUrl}" target="_blank">
                        <i class="ri-linkedin-fill"></i>
                    </a>
                </div>
            </div>
        </div>
        <p>More information about ${name} will be displayed here...</p>
    `;

    // Show the card details modal
    cardDetails.classList.remove('hidden');
}


function closeInfoContainer() {
    const cardDetails = document.getElementById('cardDetails');
    cardDetails.classList.add('hidden');
}
