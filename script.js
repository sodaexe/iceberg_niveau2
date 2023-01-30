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
    // markers: true
  }
})

gsap.to('.jellyfish', {
  scrollTrigger: {
    trigger: '.jellyfish',
    start: 'top 95%',
  },
  y: '-=850',
  duration: 5
})

gsap.to('.fishes', {
  duration: 10,
  delay: 5,
  repeat: -1,
  motionPath: {
    path: 'path',
    align: 'path',
    alignOrigin: [0.5, 0.5],
    autoRotate: true
  }
})

gsap.to("#rocher1", {
  scrollTrigger: {
    trigger: "#rocher1",
    pin: true,
    end: 'bottom 90vh',
    markers: true
  }
})

gsap.to("#rocher2", {
  scrollTrigger: {
    trigger: "#rocher2",
    end: 'bottom 90vh',
    pin: true
  }
})