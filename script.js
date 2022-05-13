
var slideText = document.querySelector("#slide-1-text");

console.log(" slideText ",slideText);

// gsap.to('#slide-1-text',1,{y:-100})
gsap.set("#slide-1-text", { attr: { x1: -1000, x2: 0 } });
gsap.to("#slide-1-text", {
  duration: 3, 
  attr: { x1: 1000, x2: 2000 },
  repeat: -1,
  yoyo: true,
  repeatDelay: 0.5,
  ease: "none"
});

var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const boxes = gsap.utils.toArray('.box');
boxes.forEach(box => {
  gsap.from(box, 2 ,{ 
    z: -300,
      
    scrollTrigger: {
      trigger: box,
      scrub: true
    }
  })
});
