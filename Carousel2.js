// Automatic Slideshow - change image every 2 seconds
var myIndex2 = 0;
carousel2();

function carousel2() {
    var j;
    var y = document.getElementsByClassName("dualSlides");
    
    for (j = 0; j < y.length; j++) {
        y[j].style.display = "none";
    }

    myIndex2++;
    
    if (myIndex2 > y.length) { myIndex2 = 1 }
    y[myIndex2 - 1].style.display = "block";
    setTimeout(carousel2, 2000);
}