var h5timer = document.querySelector("#line-box-part1 h5");

var tl = gsap.timeline();

tl.from(".line-box h1", {
  y: 150,
  stagger: 0.25,
  duration: 0.5,
  opacity: 0,
  onStart: function () {
    var grow = 0;
    setInterval(() => {
      if (grow < 100) {
        h5timer.innerHTML = grow++;
      } else {
        h5timer.innerHTML = grow;
      }
    }, 33);
  },
});

// from
tl.from("#line-box-part1, .line-box h2", {
  opacity: 0,
});

tl.to(".line-box h2", {
  animationName: "anime",
  opacity: 1,
});

// removing the loader
tl.to("#loader", {
  //step1 remove the
  opacity: 0,
  duration: "0.8",
  delay: 3,
  ease: Power4,
});
tl.from("#page1", {
  //step2 bring page 2 as animation
  y: 1200,
  opacity: 1,
  duration: "0.5",
});

tl.to("#loader", {
  //step2 display none of loader to get hold on page
  display: "none",
});
