var dropdownContentOne = document.getElementById('dropdown-content-1');
var dropdownContentTwo = document.getElementById('dropdown-content-2');
var icon_2 = document.getElementById('icon_2');

var dropdownOne = document.querySelector('.dropdown1');
var dropdownTwo = document.querySelector('.dropdown2');

var footerTextOne = document.getElementById('footer-text-1');
var footerTextTwo = document.getElementById('footer-text-2');

function resizeOpacity(){
    if (!dropdownContentOne || !dropdownContentTwo || !footerTextOne || !footerTextTwo) {
        return;
    }

    if (window.innerWidth > 767) {
        dropdownContentOne.style.opacity = 1;
        dropdownContentTwo.style.opacity = 1;
        footerTextOne.style.pointerEvents = "none";
        footerTextTwo.style.pointerEvents = "none";
    } else {
        footerTextOne.style.pointerEvents = "auto";
        footerTextTwo.style.pointerEvents = "auto";
    }
}

resizeOpacity();

window.addEventListener("resize", resizeOpacity);

imgElem = document.getElementById('img_musa');
function changeImage() {
    imgElem.src = "img/musa_2.jpg";
}
function playSound() {
    var audio = document.getElementById('musa_sound');
    audio.play();
}
function change_1() {
    var dropdownContent = document.getElementById('dropdown-content-1');
    var icon = document.getElementById('icon_1');
    if(dropdownContent.clientHeight == 0) {
        dropdownContent.style.height = '70px';
        dropdownContent.style.opacity = 1;
        icon.style.transform = 'rotate(45deg)';
    }
    else{
        dropdownContent.style.height = '0';
        dropdownContent.style.opacity = 0;
        icon.style.transform = 'rotate(0deg)';
    }
}
function change_2() {
    var dropdownContent = document.getElementById('dropdown-content-2');
    var icon = document.getElementById('icon_2');
    if(dropdownContent.clientHeight == 0) {
        dropdownContent.style.height = '200px';
        dropdownContent.style.opacity = 1;
        icon.style.transform = 'rotate(45deg)';
    }
    else{
        dropdownContent.style.height = '0';
        dropdownContent.style.opacity = 0;
        icon.style.transform = 'rotate(0deg)';
    }
}
