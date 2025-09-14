let menuOpen = false;
const sidebar = document.getElementById('side-menu');
const items = sidebar.querySelectorAll('.menu-item');

function toggleMenu() {
  if (!menuOpen) {
    // Open sidebar with animation
    let tl = gsap.timeline();
    tl.to(sidebar, { x: 250, duration: 0.5, ease: "power3.out" }); // move sidebar in
    tl.fromTo(
      items,
      { x: -50, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.3, stagger: 0.1 , delay: 0.5},
      "-=0.3"
    ); // staggered items
  } else {
    // Close sidebar with reverse animation
    let tl = gsap.timeline();
    tl.to(items, { x: -50, opacity: 0, duration: 0.2, stagger: 0.1 }); // animate items out
    tl.to(sidebar, { x: 0, duration: 0.5, ease: "power3.in" }, "-=0.1"); // move sidebar back
  }
  menuOpen = !menuOpen;
}



// --------------------------------------

let tl2 = gsap.timeline();
tl2.from(".logo", { y: -50, opacity: 0, duration: 0.4, ease: "power3.out", delay: 0.2 });
tl2.from(".nav-items", { y: -50, opacity: 0, duration: 0.5, ease: "power3.out" });
tl2.from(".nav-items ul li ", { y: -30, opacity: 0, duration: 0.5, ease: "power3.out", stagger: 0.3} );
tl2.from(".resume", { x: 50, opacity: 0, duration: 0.4, ease: "power3.out" },);
tl2.from(".left > *", {
  y: -50,
  opacity: 0,
  duration: 0.9,
  ease: "power3.out",
  stagger: 0.3
});             
tl2.from(".right", { x: 50, opacity: 0, duration: 0.6, ease: "power3.out" });
// --------------------------------------




gsap.from(".about-section .about-left", {
  x: -200,
  opacity: 0,
  duration: 1,
scrollTrigger: {
  trigger: ".about-section",
  scroller: "body",
  start: "top 50%",
  end: "top 20%",
  scrub: 3,
  // markers: true,
}});

gsap.from(".about-section .about-right h1", {
  x: 200,
  opacity: 0,
  duration: 1,
  // stagger: 0.3,
scrollTrigger: {
  trigger: ".about-section",
  scroller: "body",
  start: "top 60%",
  end: "top 20%",
  scrub: 3,
  // markers: true,
}});
gsap.from(".about-section .about-right p", {
  x: 200,
  opacity: 0,
  duration: 1,
  // stagger: 0.3,
scrollTrigger: {
  trigger: ".about-section",
  scroller: "body",
  start: "top 40%",
  end: "top 20%",
  scrub: 3,
  // markers: true,
}});  

gsap.from(".skill-container  h1", {
x: 50,
opacity: 0,
duration: 1,
scrollTrigger: {
  trigger: ".skill-container",
  scroller: "body",
  start: "top 70%",
  end: "top 30%",
  scrub: 3,
}

});

gsap.from(".skill-container .skill-left", {
  x: -100,
  opacity: 0,
  duration: 1,
  // stagger: 0.3,
scrollTrigger: {
  trigger: ".skill-container",
  scroller: "body",
  start: "top 47%",
  end: "top 10%",
  scrub: 3,
  // markers: true,
}});

gsap.from(".skill-container .skill-right", {
  x: 100,
  opacity: 0,
  duration: 1,
  stagger: 0.6,
scrollTrigger: {
  trigger: ".skill-container",
  scroller: "body",
  start: "top 80%",
  end: "top 10%",
  scrub: 2,
  // markers: true,
}});

gsap.from(".skill-container .skill-left2", {
  x: -100,
  opacity: 0,
  duration: 1,
  stagger: 0.5,
scrollTrigger: {
  trigger: ".skill-container",
  scroller: "body",
  start: "top 87%",
  end: "top 10%",
  scrub: 2,
  // markers: true,
}});

gsap.from(".skill-container .skill-right2", {
  x: 150,
  opacity: 0,
  duration: 1,
  stagger: 0.3,
scrollTrigger: {
  trigger: ".skill-container",
  scroller: "body",
  start: "top 35%",
  end: "top 10%",
  scrub: 2,
  // markers: true,
}});
// --------------------------------------

gsap.from(".project-heading", {
  y: 50,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".project-heading",
    scroller: "body",
    start: "top 80%",
    end: "top 40%",
    scrub: 3,
  }
})

gsap.from(".card-group .card", {
  y: 100,
  opacity: 0,
  duration: 1,
  stagger: 0.6,
  scrollTrigger: {
    trigger: ".card-group",
    scroller: "body",
    start: "top 65%",
    end: "top 20%",
    scrub: 3,
  }
  });

  gsap.from(".contact h1", {
    y: 50,
    opacity: 0,
    duration: 1,
    color: "white",
    scrollTrigger: {
      trigger: ".contact",
      scroller: "body",
      start: "top 70%",
      end: "top 30%",
      scrub: 3,
    }
  });

  gsap.from(".contact .contact-left", {
    x: -150,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: ".contact",
      scroller: "body",
      start: "top 50%",
      end: "top 20%",
      scrub: 3,
    }
  });
    gsap.from(".contact .contact-right", {
    x: 150,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: ".contact",
      scroller: "body",
      start: "top 50%",
      end: "top 20%",
      scrub: 3,
    }
    });