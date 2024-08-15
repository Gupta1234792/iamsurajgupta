function master() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true,
  });

  // Each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // Tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    pinType: document.querySelector(".main").style.transform
      ? "transform"
      : "fixed",
  });

  // Each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // After everything is set up, refresh() ScrollTrigger and update LocomotiveScroll
  ScrollTrigger.refresh();
}

master();

/* cursor animation */
var crsr = document.querySelector(".cursor");
var main = document.querySelector(".main");
document.addEventListener("mousemove", function (dets) {
  crsr.style.left = dets.x + 20+ "px";
  crsr.style.top = dets.y + 20+ "px";
});

gsap.from(".page1 h1,.page1 h2", {
  y: 10,
  rotate: 10,
  opacity: 0,
  delay: 0.3,
  duration: 0.7,
});

// GSAP animation
var tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".page1 h1",
    scroller: ".main",
   /*  markers: true, */
    start: "top 27%",
    end: "top 0",
    scrub: 3,
  },
});
tl.to(
  ".page1 h1",
  {
    x: -100,
    duration: 1,
  },
  "anim"
);
tl.to(
  ".page1 h2",
  {
    x: 100,
  },
  "anim"
);
tl.to(
  ".page1 video",
  {
    width: "90%",
  },
  "anim"
);
var tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".page1 h1",
    scroller: ".main",
    /*  markers: true , */
    start: "top -115%",
    end: "top -130%",
    scrub: 3,
  },
});
tl2.to(".main", {
  backgroundColor: "#fff",
});
var tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".page3 h1",
    scroller: ".main",
  /*    markers: true,  */
    start: "top -300%",
    end: "top -280%",
    scrub: 3,
  },
});

tl3.to(".main", {
  backgroundColor: "#0f0d0d",
});

var boxes = document.querySelectorAll(".box");
boxes.forEach(function (elem) {
  elem.addEventListener("mouseenter", function(){
    var att = elem.getAttribute("data-image");
  crsr.style.width = "480px"
  crsr.style.height = "370px"

 crsr.style.borderRadius = "10px"
  crsr.style.backgroundImage = `url(${att})`
 
  });

  elem.addEventListener("mouseleave", function () {
    elem.style.backgroundColor = "transparent";
    crsr.style.width = "20px"
    crsr.style.height = "20px"
 crsr.style.borderRadius = "50%"
    crsr.style.backgroundImage = `none`
  });
});

/* document.querySelectorAll("#nav h4")
 var purple = document.querySelector(".purple")
h4.forEach(function(elem){
  elem.addEventListener("mousemove", function(){
      purple.style.display = "block"
      purple.style.opacity = "1"
  })
}) */

  // Correctly select all h4 elements within #nav
var h4 = document.querySelectorAll("#nav h4");

// Select the purple element
var purple = document.querySelector(".purple");

// Add event listeners to each h4 element
h4.forEach(function(elem){
  elem.addEventListener("mouseenter", function(){
      purple.style.display = "block";
      purple.style.opacity = "1";
  });
  

  elem.addEventListener("mouseleave", function(){
    purple.style.display = "none";
    purple.style.opacity = "0";
});
});

/* preloader */
var loader = document.getElementById("preloader")
window.addEventListener("load", function(){
  loader.style.display = "none";
  
})