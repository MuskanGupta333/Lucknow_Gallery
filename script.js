gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".image").forEach((img) => {
  let caption = img.querySelector(".caption");

  gsap.fromTo(img, 
    { opacity: 0, y: 100 }, 
    { 
      opacity: 1, 
      y: 0, 
      duration: 1.5, 
      scrollTrigger: {
        trigger: img,
        start: "top 80%",
        end: "top 50%",
        scrub: true,
        // markers: true
      }
    }
  );

  gsap.fromTo(caption, 
    { opacity: 0, y: 50 }, 
    { 
      opacity: 1, 
      y: 0, 
      duration: 1, 
      scrollTrigger: {
        trigger: img,
        start: "top 70%",
        end: "top 50%",
        scrub: true
      }
    }
  );
});
