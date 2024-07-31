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

// END



let countDownDate = new Date("Dec 31, 2021 23:59:59").getTime();
// console.log(countDownDate);

let counter = setInterval(() => {
  // Get Date Now
  let dateNow = new Date().getTime();

  // Find The Date Difference Between Now And Countdown Date
  let dateDiff = countDownDate - dateNow;

  // Get Time Units
  // let days = Math.floor(dateDiff / 1000 / 60 / 60 / 24);
  let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);

  document.querySelector(".days").innerHTML = days < 10 ? `0${days}` : days;
  document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}` : hours;
  document.querySelector(".minutes").innerHTML = minutes < 10 ? `0${minutes}` : minutes;
  document.querySelector(".seconds").innerHTML = seconds < 10 ? `0${seconds}` : seconds;

  if (dateDiff < 0) {
    clearInterval(counter);
  }
}, 1000);
