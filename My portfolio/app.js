// Hamburger Toggle
const hamburger = document.querySelector(".hamburger");
const navList = document.querySelector(".nav-list ul");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navList.classList.toggle("active");
});

// Close nav when link clicked
document.querySelectorAll(".nav-list ul li a").forEach(link=>{
    link.addEventListener("click",()=>{
        hamburger.classList.remove("active");
        navList.classList.remove("active");
    });
});

// Hero Typing Animation
// const heroSpans = document.querySelectorAll("#hero h1 span");
// const texts = ["Hello,", "My Name is", "Biplov Khanal"];
// let count = 0;
// let index = 0;
// function typeText() {
//     if(count===texts.length) count=0;
//     const current = texts[count];
//     heroSpans[count].textContent = current.slice(0, index++);
//     if(index>current.length){
//         index=0;
//         count++;
//         setTimeout(typeText,1000);
//     } else {
//         setTimeout(typeText,200);
//     }
// }
// typeText();
// Hero Typing Animation (Triggers Once on Scroll)
// Hero Typing Animation (Advanced + One-time Scroll Trigger)
const heroSection = document.querySelector("#hero");
const heroSpans = {
    hello: document.querySelector("#hero .hello"),
    intro: document.querySelector("#hero .intro"),
    name: document.querySelector("#hero .name")
};

const texts = {
    hello: "Hello 👋",
    intro: "My Name is",
    name: "Biplov Khanal 🚀"
};

let animationPlayed = false;

function typeText(span, text, delay = 0, speed = 100) {
    setTimeout(() => {
        let index = 0;
        function typing() {
            if (index <= text.length) {
                span.textContent = text.slice(0, index++);
                setTimeout(typing, speed);
            }
        }
        typing();
    }, delay);
}

// Intersection Observer to trigger animation once
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !animationPlayed) {
            animationPlayed = true;

            // Start animations in sequence with delays
            typeText(heroSpans.hello, texts.hello, 200, 120);  // Top
            typeText(heroSpans.intro, texts.intro, 1600, 120); // Bottom
            typeText(heroSpans.name, texts.name, 3000, 120);   // Right

            observer.unobserve(heroSection);
        }
    });
}, { threshold: 0.5 });

observer.observe(heroSection);





// Scroll Reveal
ScrollReveal().reveal('#services .service-item', {interval:200, origin:'bottom', distance:'30px', duration:1000});
ScrollReveal().reveal('#projects .project-item', {interval:200, origin:'bottom', distance:'30px', duration:1000});
ScrollReveal().reveal('#about .col-left, #about .col-right', {interval:200, origin:'bottom', distance:'30px', duration:1000});
ScrollReveal().reveal('#contact .contact-item', {interval:200, origin:'bottom', distance:'30px', duration:1000});
ScrollReveal().reveal('footer', {interval:200, origin:'bottom', distance:'30px', duration:1000});
