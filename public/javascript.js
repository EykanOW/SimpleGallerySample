const mainImg = document.getElementById("main");
const thumbnails = document.querySelectorAll(".thumbnail");

for (let i = 0; i < thumbnails.length; i++) {
    thumbnails[i].addEventListener('click',(e) => {
        const oldimg = mainImg.style.backgroundImage;
        mainImg.style.backgroundImage = e.target.style.backgroundImage;
        e.target.style.backgroundImage = oldimg;
    });

    thumbnails[i].addEventListener("mouseenter", (e) => {
        e.target.style.transform = "scale(1.1)";
        e.target.style.outline = "4px solid rgb(69, 173, 176)";
    });
    thumbnails[i].addEventListener("mouseout", (e) => {
        e.target.style.transform = "scale(1.0)";
        e.target.style.outline = "0px";
    });
}
