// scroll to the top

const bottomToTopScroll = document.getElementById("bottomToTopScroll");

bottomToTopScroll.innerHTML = `
<div
    class="bottomToTop fadeIn w-10 cursor-pointer hidden h-10 fixed bottom-5 right-5 flex items-center justify-center rounded-full border-2 border-[#262626]"><i class="fa-solid fa-arrow-up"></i>
</div>`

document.addEventListener("DOMContentLoaded", function () {
    const scrollToTopBtn = document.querySelector(".bottomToTop");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 200) {
            scrollToTopBtn.style.display = "flex";
        } else {
            scrollToTopBtn.style.display = "none";
        }
    });

    scrollToTopBtn.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});

let index2 = 1;
const totalItems2 = 3;
const intervalTime2 = 3000;

function autoPlay2() {
    index2++;
    if (index2 > totalItems2) {
        index2 = 1;
    }
    document.getElementById(`slider2-item-${index2}`).checked = true;
}

setInterval(autoPlay2, intervalTime2);

let index1 = 1;
const totalItems1 = 3;
const intervalTime1 = 3000;

function autoPlay() {
    index1++;
    if (index1 > totalItems1) {
        index1 = 1;
    }
    document.getElementById(`item-${index1}`).checked = true;
}

setInterval(autoPlay, intervalTime1);


var swiper = new Swiper(".mySwiper", {
    grabCursor: true,
    effect: "creative",
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    loop: true,
    creativeEffect: {
        prev: {
            shadow: true,
            translate: [0, 0, -400],
        },
        next: {
            translate: ["100%", 0, 0],
        },
    },
});

const overlayContact = document.querySelector(".overlayContact")
const overlayPrivacy = document.querySelector(".overlayPrivacy")
const contactUs = document.querySelector(".contactUs")
const privacyPolicy = document.querySelector(".privacyPolicy")
const openContactFormBtn = document.querySelectorAll(".openContactFormBtn")
const openPrivacuPolicyBtn = document.querySelectorAll(".openPrivacuPolicyBtn")

openContactFormBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        contactUs.classList.remove("hidden")
        overlayContact.classList.remove("hidden")
    })
})

openPrivacuPolicyBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        privacyPolicy.classList.remove("hidden")
        overlayContact.classList.add("hidden")
        overlayPrivacy.classList.remove("hidden")
        contactUs.classList.add("hidden")

    })
})

overlayContact.addEventListener('click', () => {
    contactUs.classList.add("hidden")
    overlayContact.classList.add("hidden")
    privacyPolicy.classList.add("hidden")
})

overlayPrivacy.addEventListener('click', () => {
    overlayPrivacy.classList.add("hidden")
    privacyPolicy.classList.add("hidden")
})

// validation for contact us form

document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".contact-popup form"); // Ensure correct selector for your popup form

    form.addEventListener("submit", function (event) {
        let email = document.querySelector("input[name='Email']").value;
        let phone = document.querySelector("input[name='PhoneNumber']").value;
        let name = document.querySelector("input[name='name']").value;

        let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        let phonePattern = /^[0-9\+\-\s]+$/;

        if (!emailPattern.test(email) || !phonePattern.test(phone) || name.length < 2) {
            event.preventDefault();
            alert("Please enter valid information.");
            return;
        }

        const inputs = form.querySelectorAll("input, textarea");
        const urlPattern = /https?:\/\/[^\s]+/g; // Regex for detecting links
        let hasInvalidLink = false;

        inputs.forEach(input => {
            if (urlPattern.test(input.value)) { // Check if input contains a link
                hasInvalidLink = true;
                input.style.border = "2px solid red"; // Highlight field
            } else {
                input.style.border = ""; // Reset border if valid
            }
        });

        if (hasInvalidLink) {
            event.preventDefault(); // Stop form submission
            alert("Links are not allowed in the input fields."); // Show error message
        }
    });
});

