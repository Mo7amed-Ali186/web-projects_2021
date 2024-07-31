
// $(window).on('load',function(){
// 	setTimeout(function(){ // allowing 3 secs to fade out loader
// 	$('.page-loader').fadeOut('slow');
// 	},3500);
// });


// Scroll To Top
  let span = document.querySelector(".up");

window.onscroll = function () {
  console.log(this.scrollY);
  if (this.scrollY >= 1000) {
    span.classList.add("show");
  } else {
    span.classList.remove("show");
  }
  this.scrollY >= 1000 ? span.classList.add("show") : span.classList.remove("show");
};

span.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};



// $(document).ready(function() {

// $('.counter').each(function () {
// $(this).prop('Counter',0).animate({
// Counter: $(this).text()
// }, {
// duration: 4000,
// easing: 'swing',
// step: function (now) {
// $(this).text(Math.ceil(now));
// }
// });
// });

// });
// END
// let progressSpans = document.querySelectorAll(".the-progress span");
// let section = document.querySelector(".our-skills");

// let nums = document.querySelectorAll(".stats .number");
// let statsSection = document.querySelector(".stats");
// let started = false; // Function Started ? No

// window.onscroll = function () {
//   // Skills Animate Width
//   if (window.scrollY >= section.offsetTop - 250) {
//     progressSpans.forEach((span) => {
//       span.style.width = span.dataset.width;
//     });
//   }
//   // Stats Increase Number
//   if (window.scrollY >= statsSection.offsetTop) {
//     if (!started) {
//       nums.forEach((num) => startCount(num));
//     }
//     started = true;
//   }
// };

// function startCount(el) {
//   let goal = el.dataset.goal;
//   let count = setInterval(() => {
//     el.textContent++;
//     if (el.textContent == goal) {
//       clearInterval(count);
//     }
//   }, 2000 / goal);
// }

