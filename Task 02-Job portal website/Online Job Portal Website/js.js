//IT CONNECT - Online Job Portal Web Site
// task01  
// Growintern 
// Dv by karim
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: '.button-next',
        prevEl: '.button-prev',
    },
    loop: true, autoplay: {
        delay: 2000,
        disableOnInteraction: false
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
    },
});

const mobile = document.querySelector(".menu-toggle");
const mobileLink = document.querySelector(".navbar-menu");
mobile.addEventListener("click", function(){
    mobile.classList.toggle("is-active");
    mobileLink.classList.toggle("active");
});

mobileLink.addEventListener("click", function(){
    const menuBars = document.querySelector("is-active");
    if(window.innerWidth<=768 &&menuBars){
        mobile.classList.toggle("is-active");
        mobileLink.classList.remove("active");
    }
});
var navbarHeight = $(".navbar").outerHeight();
$(".navbar-menu a").click(function(e) {
    var targetHref = $(this).attr("href");
    $("html,body").animate({
        scrollTop: $(targetHref).offset().top - navbarHeight
    }, 1000);
    e.preventDefault();
});
const menuItems = document.querySelectorAll('.navbar-menu a');
menuItems.forEach(item => {
    const dot = document.createElement('span');
    dot.classList.add('dot');
    item.appendChild(dot);

    item.addEventListener('mouseenter', () => {
        dot.style.opacity = '1';
    });

    item.addEventListener('mouseleave', () => {
        dot.style.opacity = '0';
    });
});
const selects = document.querySelectorAll('.filter-select');
const chosenCards = document.querySelectorAll('.chosen-card');
const selectedValues = [];
const selectOrder = ['job-level', 'job-fonction', 'employment', 'location', 'education', 'date'];


selectOrder.forEach((selectId, index) => {
    const select = document.getElementById(selectId);
    if (select) {
        select.addEventListener('change', (event) => {
            const selectedValue = event.target.value;
            selectedValues[index] = selectedValue;
            if (selectedValue !== 'Job Level' && selectedValue !== 'Job Function' && selectedValue !== 'Employment Type' && selectedValue !== 'Location' && selectedValue !== 'Education' && selectedValue !== 'Date') {
                chosenCards[index].textContent = `${selectedValue}`;
            } else {
                chosenCards[index].textContent = 'Please Select!';
            }
        });
    }
});

const textElement = document.getElementById('typing-text');
const words = ['.','Perfect job', 'Next Job', 'New Position', 'Dream Career', 'Ideal Role', 'Great Opportunity'];
let currentWordIndex = 0;

function typeWriter(text, i) {
    const word = words[currentWordIndex];
    if (i < word.length) {
        text.textContent += word.charAt(i);
        i++;
        setTimeout(() => {
            typeWriter(text, i);
        }, 100); 
    } else {
        setTimeout(() => {
            text.textContent = '';
            currentWordIndex = (currentWordIndex + 1) % words.length; 
            typeWriter(text, 0); 
        }, 1500); 
    }
}
typeWriter(textElement, 0);




//IT CONNECT - Online Job Portal Web Site
// task01  
// Growintern 
// Dv by karim