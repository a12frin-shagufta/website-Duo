


function init(){
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
    
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);
    
    // tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
      }, // we don't have to define a scrollLeft because we're only scrolling vertically.
      getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
      },
      // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
      pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });
    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();
}

init();



var tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".page1 h1",
    scroller: "#main",
    // markers:true,
    start: "top 27%",
    end: "top 0",
    scrub: 3
      }
})
tl.to(".page1 h1",{
    x: -100,
    
    
},"anem")
tl.to(".page1 h2",{
   x:100
},"anem")
// mai chahti hu do h1 or h2 ek sath move ho isliy mai dono ko same varaible dungi anem name se 

tl.to(".page1 video",{
   width: "80%",
},"anem")


var tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".page1 h1",
    scroller: "#main",
    // markers:true,
    start: "top -126%",
    end: "top -130",
    scrub: 3
      }
})


tl2.to("#main",{
  backgroundColor: "#fff"
})

var tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".page1 h1",
    scroller: "#main",
    // markers:true,
    start: "top -290%",
    end: "top -350%",
    scrub: 3
      }
})
tl3.to("#main",{
  backgroundColor: "#0F0D0D"
})




var circle = document.querySelector(".circle2")


circle.addEventListener("mousemove",function(){
  circle.style.backgroundColor =  "#EDBFFF";
})
circle.addEventListener("mouseleave",function(){
  circle.style.backgroundColor =  "#000";
 

})

var crsr = document.querySelector(".cursor")
var main = document.querySelector("#main")
main.addEventListener("mousemove",function(dets){
   crsr.style.left = dets.x+ 20 +"px"
   crsr.style.top  = dets.y+20+ "px"
})


 var boxes = document.querySelectorAll(".box")
 boxes.forEach(function(elem){
     elem.addEventListener("mouseenter",function(){
      var att = elem.getAttribute("data-image")
      crsr.style.width = "250px"
      crsr.style.height = "150px"
      crsr.style.borderRadius = "0"
      crsr.style.backgroundImage = `url(${att})`

     })

     elem.addEventListener("mouseleave",function(){
      elem.style.backgroundColor = "transparent"
      crsr.style.width = "20px"
      crsr.style.height = "20px"
      crsr.style.borderRadius = "50%"
      crsr.style.backgroundImage = `none`
  })
 })