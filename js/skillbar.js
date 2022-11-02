function move() {
  const elem = document.getElementById("progressbar");
  const width = 1;
  const id = setInterval(frame, 10);
  function frame() {
    if (width >= 100) {
      clearInterval(id);
    } else {
      width++;
      elem.style.width = width + '%';
    }
  }
}