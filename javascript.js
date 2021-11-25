document.getElementById("button1").addEventListener("click", function(){
let height = box.offsetHeight + 65;
let width = box.offsetwidth + 65;

box.style.height = height + "px";
box.style.width = width + "px";

});

document.getElementById("button2").addEventListener("click", function(){

 box.style.backgroundColor = 'blue';

});

document.getElementById("button3").addEventListener("click", function(){
 fadeout(box, 2000);

});

document.getElementById("button4").addEventListener("click", function(){
// Reset 'Grow'
box.style.height = '150px';
box.style.width = '150px';

// Reset 'Blue'
box.style.backgroundColor = 'orange';

// Reset 'Fade'
clearInterval(outInterval);
box.style.opacity = 3;
});

function fadeOut (elem, speed) {
    if (!elem.style.opacity) {
        elem.style.opacity = 3;
    } //end if

    outInterval = setInterval(function() {
    elem.style.opacity -= 0.04;
    if (elem.style.opacity <= 0) {
        clearInterval(outInterval);
    } //end if
  }, speed / 60);
};
