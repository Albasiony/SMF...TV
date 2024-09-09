


let clickIcon = document.querySelector("header .container nav .icon .fa-list");
let clickList = document.querySelector("header .container nav ul");
let videoIptv = document.querySelector(".video-iptv");

clickIcon.addEventListener("click", () => {
    clickList.classList.toggle("click")

});

let LandingPage = document.querySelector(".landing-page");
// LandingPage.style.backgroundImage = `url(image/photo.jpg)`
// console.log(LandingPage)

const images = [
    'image/sp.jpg',
    'image/sp9.jpg',
    'image/sp4.jpg',
    'image/sp2.jpg',
    'image/sp6.jpg',
    'image/sp5.jpg',
    'image/sp11.jpg',

];

let currentIndex = 0;

function changeBackground() {
    LandingPage.style.backgroundImage = `url('${images[currentIndex]}')`;
    currentIndex = (currentIndex + 1) % images.length;
}

setInterval(changeBackground, 2000); // Change image every 2 seconds
let spanClick = document.querySelector(".landing-page .container .text-content .watch-now span");
spanClick.onclick = function () {
    videoIptv.classList.add("block");
    let creatOverLay = document.createElement("div")
    creatOverLay.className = 'lay-out';
    document.body.appendChild(creatOverLay);

};



let iconX = document.querySelector(".icon .fa-circle-xmark ");

iconX.addEventListener("click", () => {
    videoIptv.classList.remove("block")
    document.querySelector(".lay-out").remove()
});

let getBtnWatch = document.querySelectorAll(".gallary-page .container .all-boxphoto .text-cont .btn button");
let getImage = document.querySelectorAll(".gallary-page .container .all-boxphoto .photo-box .box img");


getBtnWatch.forEach((e) => {
    e.addEventListener("click", () => {
        window.open('https://wa.me/966576263187', '_blank'); // فتح الرابط في نافذة جديدة

    });
});
getImage.forEach((e) => {
    e.addEventListener("click", () => {
        window.open('https://wa.me/966576263187', '_blank');
    })
})