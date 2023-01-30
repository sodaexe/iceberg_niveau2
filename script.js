gsap.to("#sun", {
  // duration: 5,
  x: "40vw",
  y: "100vh",
  scale: 2,
  backgroundColor: "#ff8e47",
  scrollTrigger: {
    trigger: "#sun",
    scrub: 1,
    start: "top 15%",
    end: "bottom 5%"
  }
})

gsap.to("#surface", {
  backgroundColor: "#29295d",
  scrollTrigger: {
    trigger: "#sun",
    scrub: 1,
    start: "top 15%",
    end: "bottom 5%",
    // markers: true
  }
})

gsap.to("#shadow", {
  x: "40vw",
  opacity: 0,
  scrollTrigger: {
    trigger: "#sun",
    scrub: 1,
    start: "top 17%", // top de la forme, 17% de l'ecran
    end: "bottom 10%", // bottom, 10% de l'ecran
    markers: true
  }
})