document.addEventListener("DOMContentLoaded", function () {
    // Button actions
    document.querySelector("#teacherForm button").onclick = function (e) {
        e.preventDefault();
        window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLSfeLuAUNB1iF3V1LmVFy6l1woZGhVm7SvEALKSeSaTZcfqrNw/viewform";
    };

    document.querySelector("#jobForm button").onclick = function (e) {
        e.preventDefault();
        window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLSeDF-N7G-uq47AZakGkrWZ3D76xbMA-zENRhmKRupZhIXuHIw/viewform";
    };

    document.querySelector("#telegramJob button").onclick = function (e) {
        e.preventDefault();
        window.location.href = "https://t.me/topperjobplacement";
    };

    document.querySelector("#telegramTuition button").onclick = function (e) {
        e.preventDefault();
        window.location.href = "https://t.me/TopperHomeTuition";
    };

    // Image Slider
    let images = document.querySelectorAll(".kyashreegman");
    let index = 0;

    function changeImage() {
        images[index].classList.remove("active");
        index = (index + 1) % images.length;
        images[index].classList.add("active");
    }

    setInterval(changeImage, 3000);
});
