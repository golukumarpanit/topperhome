document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("jobButton").onclick = function() {
        window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLSeDF-N7G-uq47AZakGkrWZ3D76xbMA-zENRhmKRupZhIXuHIw/viewform";
    };
});
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("naredramodi").onclick = function() {
        window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLSfeLuAUNB1iF3V1LmVFy6l1woZGhVm7SvEALKSeSaTZcfqrNw/viewform";
    };
});
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("Teligram").onclick = function() {
        window.location.href = "https://t.me/TopperHomeTuition";
    };
});
// yaha se slider kam kr rhe hai
document.addEventListener("DOMContentLoaded", function () {
    let slider = document.getElementById("slider");
    let scrollAmount = 0;
    let slideWidth = 110; // Width of each slide + margin
    let maxScroll = slider.scrollWidth - slider.clientWidth;

    function autoSlide() {
        setInterval(() => {
            if (window.innerWidth <= 768) { // केवल मोबाइल पर काम करेगा
                if (scrollAmount >= maxScroll) {
                    scrollAmount = 0; // वापस शुरुआत पर ले जाएं
                } else {
                    scrollAmount += slideWidth;
                }
                slider.scrollTo({ left: scrollAmount, behavior: "smooth" });
            }
        }, 2000); // 2 सेकंड के बाद स्लाइड करें
    }

    // जब पेज लोड हो और मोबाइल हो तो ऑटो-स्लाइड चालू हो
    if (window.innerWidth <= 768) {
        autoSlide();
    }
});
// yaha se slidr hai imag 
document.addEventListener("DOMContentLoaded", function() {
    let images = document.querySelectorAll(".kyashreegman");
    let index = 0;

    function changeImage() {
        images[index].classList.remove("active");
        index = (index + 1) % images.length;
        images[index].classList.add("active");
    }

    setInterval(changeImage, 3000);
});