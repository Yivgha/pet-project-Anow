let i = 0;
const skillbox = document.getElementById("skillbox");

function move() {
  if (i == 0) {
    i = 1;
    let elem = document.getElementById("myBar");
    let elem2 = document.getElementById("myBar2");
    let elem3 = document.getElementById("myBar3");
    let width = 1;
    let id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
        elem2.style.width = width + "%";
        elem3.style.width = width + "%";
      }
    }
  }
}

skillbox.addEventListener("mouseover", move, { once: true });
