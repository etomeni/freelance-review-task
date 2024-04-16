const readMoreReviewModal = document.getElementById('readMoreReviewModal');
const writeNewReviewModal = document.getElementById('writeNewReviewModal');
const successReviewModal = document.getElementById('successReviewModal');
const readMoreReviewModalBtn = document.getElementById('readMoreReviewModalBtn');
const closeBtn = document.getElementById('closeBtn');

const swiper = new Swiper('.swiper', {
    // Optional parameters
    // direction: 'vertical',
    direction: 'horizontal',
    loop: true,
    // grabCursor: true,
    keyboard: {
        enabled: true,
    },
    autoplay: {
        delay: 5000,
    },

    spaceBetween: 5,
    slidesPerView: 1,
   
    breakpoints: {
        // when window width is >= 350px
        350: {
          slidesPerView: 1.1,
          spaceBetween: 5
        },
        // when window width is >= 480px
        480: {
          slidesPerView: 1.5,
          spaceBetween: 5
        },
        // when window width is >= 550px
        640: {
          slidesPerView: 2.1,
          spaceBetween: 5
        },
        // when window width is >= 700px
        720: {
          slidesPerView: 2.5,
          spaceBetween: 5
        },
        // // when window width is >= 960px
        // 960: {
        //     slidesPerView: 3.1,
        //     spaceBetween: 5
        // },
        // // when window width is >= 1080px
        // 1080: {
        //   slidesPerView: 3.2,
        //   spaceBetween: 5
        // }
    }
});

window.addEventListener('click', clickOutsideReviewModal);

function openReviewModal() {
    readMoreReviewModal.style.display = 'block';
}

function closeReviewModal() {
    readMoreReviewModal.style.display = 'none';
}

function clickOutsideReviewModal(e) {
    if (e.target == readMoreReviewModal) {
        readMoreReviewModal.style.display = 'none';
    }
    if (e.target == writeNewReviewModal) {
        writeNewReviewModal.style.display = 'none';
    }
    if (e.target == successReviewModal) {
        successReviewModal.style.display = 'none';
    }
}

function openWriteNewReviewModal() {
    writeNewReviewModal.style.display = 'block';
}

function closeWriteNewReviewModal() {
    writeNewReviewModal.style.display = 'none';
}

function openSuccessReviewModal() {
    successReviewModal.style.display = 'block';
}

function closeSuccessReviewModal() {
    successReviewModal.style.display = 'none';
}

function onSubmitNewReview() {
    console.log("form submitted");

    closeWriteNewReviewModal();
    openSuccessReviewModal();

}


const stars = document.querySelectorAll('.star');
stars.forEach(function (star, index) {
    star.addEventListener('mouseover', function () {
        const value = index + 1;

        // Add the 'active' class to stars up to the hovered star
        for (let i = 0; i <= index; i++) {
            stars[i].classList.add('active');
        }

        // Remove the 'active' class from stars after the hovered star
        for (let i = index + 1; i < stars.length; i++) {
            stars[i].classList.remove('active');
        }
    });

    star.addEventListener('mouseout', function () {
        // Remove the 'active' class from all stars when the mouse leaves the rating container
        stars.forEach(function (s) {
            s.classList.remove('active');
        });
    });

    star.addEventListener('click', function () {
        const value = parseInt(star.getAttribute('data-value'));

        // Remove the 'active' class from all stars
        stars.forEach(function (s) {
            s.classList.remove('active');
            s.classList.remove('selected');
            s.innerHTML = '&#9734;';
        });

        // Add the 'active' class to clicked star and previous stars
        for (let i = 0; i < value; i++) {
            stars[i].classList.add('active');
            stars[i].classList.add('selected');
            stars[i].innerHTML = '&#9733;';
        }
    });
});



const reviewInputMessage = document.getElementById('reviewInputMessage');
function autoGrowTextarea(textarea) {
    textarea.style.height = 'auto'; // Reset the height to auto
    const newHeight = textarea.scrollHeight;

    // Limit the height to a maximum value (e.g., 200px)
    if (newHeight <= 200) {
        textarea.style.height = newHeight + 'px'; // Set the new height
    } else {
        textarea.style.height = '200px'; // Set the height to the maximum allowed
    }
}