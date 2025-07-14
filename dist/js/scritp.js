const scroolup = document.querySelector(".scroolup");

window.onscroll = () => {
  if (window.scrollY > 500) {
    scroolup.classList.add("scroll-active");
  } else {
    scroolup.classList.remove("scroll-active");
  }
};
