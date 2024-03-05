
document.getElementById("carousel-slide").addEventListener("mouseover", function() {
    document.getElementById("rightarrow").style.display = "block";
    document.getElementById("leftarrow").style.display = "block";
});

document.getElementById("carousel-slide").addEventListener("mouseleave", function() {
    document.getElementById("rightarrow").style.display = "none";
    document.getElementById("leftarrow").style.display = "none";
});


document.getElementById("rightarrow").addEventListener("click", function() {
    Scroll(document.getElementById("carousel-slide"), 'right', 20, 350, 25);
});

document.getElementById("leftarrow").addEventListener("click", function() {
    Scroll(document.getElementById("carousel-slide"), 'left', 20, 350, 25);
});





document.getElementById("carousel-slide2").addEventListener("mouseover", function() {
    document.getElementById("rightarrow1").style.display = "block";
    document.getElementById("leftarrow1").style.display = "block";
});

document.getElementById("carousel-slide2").addEventListener("mouseleave", function() {
    document.getElementById("rightarrow1").style.display = "none";
    document.getElementById("leftarrow1").style.display = "none";
});


document.getElementById("rightarrow1").addEventListener("click", function() {
    Scroll(document.getElementById("carousel-slide2"), 'right', 20, 350, 25);
});

document.getElementById("leftarrow1").addEventListener("click", function() {
    Scroll(document.getElementById("carousel-slide2"), 'left', 20, 350, 25);
});


function Scroll(element, direction, speed, distance, step) {
    var scrollAmount = 0;
    var slideTimer = setInterval(function() {
        if (direction == 'left') {
            element.scrollLeft -= step;
        } else {
            element.scrollLeft += step;
        }
        scrollAmount += step;
        if (scrollAmount >= distance) {
            clearInterval(slideTimer);
        }
    }, speed);
}
