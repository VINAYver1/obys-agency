var tl = gsap.timeline();
tl.from(".line h1",{
    y:150,
    stagger:.3,
    duration:.7,
    delay:.5
 })

 tl.from("#line1-part1",{
    opacity:0,
    onStart:function(){
        var timer = document.querySelector("#line1-part1 h5")
var grow = 0;

setInterval(() => {
    if(grow < 100){
        timer.innerHTML = grow++
    }
    else{
        timer.innerHTML = grow;
    }
}, 35);
    }
 })

tl.to(".line h2",{
    AnimationName: "anime",
    opacity:0
})

tl.to("#loader",{
    opacity:0,
    delay:4,
    duration:.4
})

tl.from("#page1",{
    delay:.2,
    y:1600,
    duration:.5,
    ease:power4
})

tl.to("#loader",{
    display:"none"
})