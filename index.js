gsap.registerPlugin(TextPlugin, ScrollTrigger);

const titles = [
  "GSAP Starter Template 01",
  "GSAP Starter Template 02",
  "GSAP Starter Template 03",
];
let master = gsap.timeline({ repeat: -1 });

titles.forEach((title) => {
  let tl = gsap.timeline();
  gsap.set(".title", { opacity: 0 });
  tl.to(
    ".title",
    {
      text: title,
      y: 300,
      duration: 0.1,
    },
    "-=3"
  )
    .to(".title", {
      y: 0,
      opacity: 1,
      ease: "power1.inOut",
      duration: 2,
    })
    .to(".title", {
      y: -300,
      opacity: 0,
      ease: "power1.inOut",
      duration: 2,
    });
  master.add(tl);
});
