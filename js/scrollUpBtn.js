const mybutton = document.querySelector(".scroll-up-btn");

window.onscroll = function () {
  scrollfunction();
};

function scrollfunction() {
  if (
    document.body.scrollTop > 300 ||
    document.documentElement.scrollTop > 300
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

mybutton.addEventListener("click", function () {
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth",
  });
});

document.addEventListener("DOMContentLoaded", (event) => {
  mybutton.style.display = "none";
});
