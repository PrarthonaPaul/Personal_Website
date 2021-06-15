// Automatic Slideshow - change image every 2 seconds
var myIndex1 = 0;
carousel1();

function carousel1() {
    var i;
    var x = document.getElementsByClassName("boomerangSlides");

    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }

    myIndex1++;
    if (myIndex1 > x.length) { myIndex1 = 1 }
    x[myIndex1 - 1].style.display = "block";
    setTimeout(carousel1, 2000);
}