document.getElementById("burger").addEventListener("click", () => {
  document.getElementById("nav-links").classList.toggle("sm:left-full");
  document.getElementById("nav-links").classList.toggle("sm:hidden");

  document.getElementById("2ndline").classList.toggle("hidden");
  // document.getElementById("1stline").classList.toggle("rotate-0");
  // document.getElementById("3rdline").classList.toggle("rotate-0");

  document.getElementById("2ndline").classList.toggle("flex");
  // document.getElementById("1stline").classList.toggle("rotate-59");
  // document.getElementById("3rdline").classList.toggle("rotate-125");

  document.getElementById("nav-links").classList.toggle("sm:left-0");
  document.getElementById("nav-links").classList.toggle("flex");
});

// const array = ["react", "angualr", "vue"];

// const iterator = array.values();
// iterator.next();
// console.log(iterator.next());

window.onscroll = function () {
  check();
};
function check() {
  if (document.documentElement.scrollTop > 100) {
    document.getElementById("navbar").classList.add("bg-white");
    document.getElementById("navbar").classList.remove("bg-background");
    document.getElementById("nav-links").classList.add("bg-white");
    document.getElementById("nav-links").classList.remove("bg-background");
  } else {
    document.getElementById("navbar").classList.add("bg-background");
    document.getElementById("navbar").classList.remove("bg-white");
    document.getElementById("nav-links").classList.add("bg-background");
    document.getElementById("nav-links").classList.remove("bg-white");
  }
}
