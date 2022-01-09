const urlOne = "https://cdn.pixabay.com/photo/2013/07/24/21/38/brest-166708_1280.jpg" ;
const urlTwo = "https://cdn.pixabay.com/photo/2017/06/29/11/56/sailboat-2454043_1280.jpg";
const urlTree = "https://cdn.pixabay.com/photo/2019/11/17/09/20/brest-4631882_1280.jpg";
const urlFour = "https://cdn.pixabay.com/photo/2017/12/01/18/05/rade-2991444_1280.jpg";
const urlFive = "https://cdn.pixabay.com/photo/2020/08/16/18/46/paris-brest-5493546_1280.jpg";



let i = 0;

let images = [urlOne, urlTwo, urlTree, urlFour, urlFive];

let time = 3000;

function changeImage() {
    document.slide.src = images[i];
    if (i < images.length - 1) {
	i++;
    } else {
	i = 0;
    }

    setTimeout("changeImage()", time);
}

window.onload = changeImage;
