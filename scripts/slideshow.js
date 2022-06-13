setInterval(slideShow, 3000);
var counter = 1;

function slideShow() {

    document.getElementById('radio-btn' + counter).checked = true;
    counter++;
    if (counter > 4) {
        counter = 1;
    }
}