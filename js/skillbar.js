var i = 0;

function move() {
    if (i == 0) {
        i = 1;
        var elem = document.getElementById("myBar");
        var elem2 = document.getElementById("myBar2");
        var elem3 = document.getElementById("myBar3");
        var width = 1;
        var id = setInterval(frame, 10);
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