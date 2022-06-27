gsap.from('#hero', {
    duration: .5,
    x: 500,
})
gsap.from('aside', {
    duration: .6,
    x: 800,
},
    "-=.1")


gsap.from('nav', {
    duration: .9,
    x: -300,
    opoacity: 0,
})
gsap.from('.h1', {
    y: -400,
    duration: .6,

},
    "+=0")

gsap.from('h3', {
    y: -400,
    duration: .3
},
    "+=0")


// scroll trigger 

