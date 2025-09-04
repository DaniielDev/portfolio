const square1 = document.querySelector('.square-1');
const square2 = document.querySelector('.square-2');


gsap.registerPlugin(ScrollTrigger);

// Desktop animation
gsap.to(square1, {
  x: '80vw',
  duration: 5,
  scrollTrigger: {
    start: '270% 30%',
    end: '270% -10%',
    scrub: 3,   
  }
})

gsap.to(square2, {
  x: '-80vw',
  duration: 5,
  scrollTrigger: {
    start: '270% 30%',
    end: '270% -10%',
   scrub: 3,
  }
})


// Mobile animation
ScrollTrigger.matchMedia({
  

  "(max-width: 720px)": function() {
    gsap.to(square1, {
      x: "70vw", // menos movimento no mobile
      duration: 5,
      scrollTrigger: {
        trigger: square1,
        start: "80% 95%",   // só dispara quando estiver quase visível
        end: "80% 5%",
        scrub: 3,
      }
    });

    gsap.to(square2, {
      x: "-70vw",
      duration: 5,
      scrollTrigger: {
        trigger: square2,
        start: "top 95%",
        end: "bottom 5%",
        scrub: 3,
      }
    });
  }
});


