$(document).ready(function() {
    $(window).on("scroll", function() {
        
        if ($(window).scrollTop() > 100) {
            $("header").css("background-color", "rgba(255, 255, 255, .5)");
            $("header").css("backdrop-filter", "blur(5px)");
            $("nav").css("padding-top", "15px");
            $(".logo-title p").css("color", "#26124F");
            $(".header-nav a").css("color", "#26124F");
            $(".header-socials a").css("color", "#26124F");
            $(".header-responsive i").css("color", "#26124F");
        } else {
            $("header").css("background-color", "transparent");
            $("header").css("backdrop-filter", "none");
            $("nav").css("padding-top", "25px");
            $(".logo-title p").css("color", "white");
            $(".header-nav a").css("color", "white");
            $(".header-socials a").css("color", "white");
            $(".header-responsive i").css("color", "white");
        }
       
    })
})



gsap.registerPlugin(ScrollTrigger);

gsap.to(".intro-circle", {
    duration: 7,
    "clip-path": "polygon(0 0, 75% 0, 100% 100%, 25% 100%)",
    y: -100,
    ease: Power4.easeOut,
    scrollTrigger: {
        trigger: ".intro-circle",
        start: "top 30%",
        scrub: true
    }
});

gsap.to(".about-heading, .about-paragraph", {
    duration: 1.2,
    opacity: 1,
    stagger: 1,
    ease: Power4.easeOut,
    scrollTrigger: {
        trigger: ".about-description",
        start: "top 70%",
    }
});

gsap.to(".about-services", {
    duration: 1.2,
    opacity: 1,
    ease: Power4.easeOut,
    scrollTrigger: {
        trigger: ".about-services",
        start: "top 70%",
    }
});

gsap.to(".project-intro", {
    duration: 1.2,
    opacity: 1,
    ease: Power4.easeOut,
    scrollTrigger: {
        trigger: ".project-intro",
        start: "top 70%",
    }
});

gsap.to(".team-intro", {
    duration: 1.2,
    opacity: 1,
    ease: Power4.easeOut,
    scrollTrigger: {
        trigger: ".team-intro",
        start: "top 70%",
    }
});

gsap.to(".service1", {
    duration: 13,
    y: -30,
    ease: Power4.easeOut,
    scrollTrigger: {
        trigger: ".about-services",
        start: "top 70%",
        end: "top 0%",
        scrub: true
    }
});
gsap.to(".service2", {
    duration: 12,
    y: 40,
    ease: Power4.easeOut,
    scrollTrigger: {
        trigger: ".about-services",
        start: "top 65%",
        end: "top 0%",
        scrub: true
    }
});
gsap.to(".service3", {
    duration: 15,
    y: -20,
    ease: Power4.easeOut,
    scrollTrigger: {
        trigger: ".about-services",
        start: "top 75%",
        end: "top 0%",
        scrub: true
    }
});
gsap.to(".service4", {
    duration: 1.2,
    opacity: 1,
    ease: Power4.easeOut,
    scrollTrigger: {
        trigger: ".service4",
        start: "top 70%",
    }
});
gsap.to(".service5", {
    duration: 1.2,
    opacity: 1,
    ease: Power4.easeOut,
    scrollTrigger: {
        trigger: ".service5",
        start: "top 70%",
    }
});
gsap.to(".service6", {
    duration: 1.2,
    opacity: 1,
    ease: Power4.easeOut,
    scrollTrigger: {
        trigger: ".service6",
        start: "top 70%",
    }
});



gsap.to(".baud-projects h2", {
    duration: 1.2,
    opacity: 1,
    ease: Power4.easeOut,
    scrollTrigger: {
        trigger: ".baud-projects",
        start: "top 60%",
    }
});

gsap.to(".project1", {
    duration: 1.2,
    opacity: 1,
    ease: Power4.easeOut,
    scrollTrigger: {
        trigger: ".project1",
        start: "top 70%",
    }
});
gsap.to(".project2", {
    duration: 1.2,
    opacity: 1,
    ease: Power4.easeOut,
    scrollTrigger: {
        trigger: ".project2",
        start: "top 70%",
    }
});
gsap.to(".project3", {
    duration: 1.2,
    opacity: 1,
    ease: Power4.easeOut,
    scrollTrigger: {
        trigger: ".project3",
        start: "top 70%",
    }
});

gsap.to(".roadmap-content", {
    duration: 2,
    opacity: 1,
    ease: Power4.easeOut,
    scrollTrigger: {
        trigger: ".baud-roadmap",
        start: "top 70%",
    }
});

gsap.to(".top-companies, .bottom-companies", {
    duration: 2,
    stagger: .7,
    opacity: 1,
    ease: Power4.easeOut,
    scrollTrigger: {
        trigger: ".baud-companies",
        start: "top 80%",
    }
});

gsap.to(".project-image img", {
    duration: 10,
    "transform": "rotateZ(-15deg)",
    ease: Power4.easeOut,
    scrollTrigger: {
        trigger: ".project-main",
        start: "top 70%",
        scrub: true
    }
});

gsap.to(".team-intro-image img", {
    duration: 10,
    "transform": "translateY(20px) rotateZ(15deg)",
    ease: Power4.easeOut,
    scrollTrigger: {
        trigger: ".team-main",
        start: "top 70%",
        scrub: true
    }
});

gsap.to(".roadmap-transition h2", {
    duration: 2,
    stagger: 1,
    opacity: 1,
    ease: Power4.easeOut,
    scrollTrigger: {
        trigger: ".roadmap-transition",
        start: "top 70%",
    }
});

gsap.to(".project-image .screen", {
    duration: 10,
    "width": "50px",
    "height": "250px",
    "transform": "translate(-50%, -50%) rotate(-86deg)",
    "background-color": "rgba(0, 0, 0, .3)",
    "box-shadow": "0 0 15px 25px rgba(0, 0, 0, .3)",
    ease: Power4.easeOut,
    scrollTrigger: {
        trigger: ".project-main",
        start: "top 70%",
        scrub: true
    }
});

gsap.to(".team-member", {
    duration: .7,
    opacity: 1,
    stagger: .7,
    ease: Power4.easeOut,
    scrollTrigger: {
        trigger: ".baud-team",
        start: "top 60%",
    }
});

gsap.to(".baud-footer", {
    duration: 1.5,
    opacity: 1,
    ease: Power4.easeOut,
    scrollTrigger: {
        trigger: ".footer-container",
        start: "top 70%",
    }
});

const slashButton = document.querySelector("#header-responsive");
const exit = document.querySelector(".exit-out i");
const header = document.querySelector("#header");
const menu = document.querySelector("#menu");
const menuNav = document.querySelectorAll(".menu-slide");

function menuClick() {
    header.classList.add("slide-up");
    header.classList.remove("slide-down");

    menu.classList.add("slide-left");
    menu.classList.remove("slide-right");
}

function closeClick() {
    menu.classList.add("slide-right");
    menu.classList.remove("slide-left");

    header.classList.add("slide-down");
    header.classList.remove("slide-up");
}


slashButton.addEventListener("click", menuClick);
exit.addEventListener("click", closeClick);
menuNav.forEach(nav => {
    nav.addEventListener("click", closeClick);
})







