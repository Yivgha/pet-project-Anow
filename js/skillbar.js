let i = 0;
    function move() {
        if (i === 0) {
            i = 1;
            const elem = document.getElementById("progressbar");
            const width = 10;
            const id = setInterval(frame, 10);
            function frame() {
                if (width >= 100) {
                    clearInterval(id);
                    i = 0;
                } else {
                    width++;
                    elem.style.width = width + "%";
                    elem.innerHTML = width + "%";
                }
            }
        }
    }