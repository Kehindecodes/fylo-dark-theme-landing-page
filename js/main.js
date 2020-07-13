// Back to top button
$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 150) {
      $('.back-to-top').fadeIn();
    } else {
      $('.back-to-top').fadeOut();
    }
  });
  // scroll body to 0px on click
  $('.back-to-top').click(function () {
    $('body,html').animate(
      {
        scrollTop: 0,
      },
      400
    );
    return false;
  });
});

// ANIMATIONS USING GSAP.JS

gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.defaults({
  toggleActions: 'restart pause complete reverse',
});

//   FEATURES ON SCROLL
let tween = gsap.from('.feature1', { opacity: 0, x: -100, duration: 1 }),
  st = ScrollTrigger.create({
    trigger: '.feature1',

    start: 'top 75%',

    animation: tween,
  });
console.log(st.animation);

let tween2 = gsap.from('.feature2', {
    opacity: 0,
    x: 100,
    duration: 1,
    delay: 2,
  }),
  st2 = ScrollTrigger.create({
    trigger: '.feature2',

    start: 'top 75%',

    animation: tween2,
  });

let tween3 = gsap.from('.feature3', {
    opacity: 0,
    x: -100,
    duration: 1,
    delay: 2,
  }),
  st3 = ScrollTrigger.create({
    trigger: '.feature3',

    start: 'top 75%',

    animation: tween3,
  });

let tween4 = gsap.from('.feature4', {
    opacity: 0,
    x: 100,
    duration: 1,
    delay: 2,
  }),
  st4 = ScrollTrigger.create({
    trigger: '.feature4',

    start: 'top 75%',
    animation: tween4,
  });

// STAYPRODUCTIVE SECTION
let stay = gsap.from('.stay', {
    opacity: 0,
    x: 50,
    duration: 1,
    stagger: 0.6,
  }),
  st5 = ScrollTrigger.create({
    trigger: '.stay',

    start: 'top 75%',
    animation: stay,
  });
let stayProductiveContent = gsap.from('.stay-productive-content', {
    // delay: 2,
    opacity: 0,
    x: -50,
    duration: 1,
  }),
  st6 = ScrollTrigger.create({
    trigger: '.stay-productive-content',

    start: 'top 75%',
    animation: stayProductiveContent,
  });

// testimonial section
let testimonialWrapper = gsap.from('.testimonial-wrapper', {
    // delay: 2,
    opacity: 0,
    y: 50,
    duration: 1,
  }),
  st7 = ScrollTrigger.create({
    trigger: '.testimonial-wrapper',

    start: 'top 90%',
    animation: testimonialWrapper,
  });
