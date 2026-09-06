// =====================================
// GET ELEMENTS
// =====================================

const overlay = document.getElementById("letterOverlay");
const cover = document.getElementById("cover");
const pages = document.querySelectorAll(".page");


// =====================================
// OPEN LETTER
// =====================================

function openLetter() {

    overlay.classList.add("show");

    // Reset cover
    cover.classList.remove("open");

    // Reset all pages
    pages.forEach(function(page) {
        page.classList.remove("active");
    });

}


// =====================================
// CLICK COVER
// =====================================

function openCover() {

    // Open cover
    cover.classList.add("open");

    // Show page 1 after cover animation
    setTimeout(function() {

        const page1 = document.getElementById("page1");

        if (page1) {
            page1.classList.add("active");
        }

    }, 700);

}


// =====================================
// NEXT PAGE
// =====================================

function nextPage() {

    // Find current active page
    const current =
        document.querySelector(".page.active");

    // If there is no current page
    if (!current) {
        return;
    }

    // Find next page
    const next =
        current.nextElementSibling;

    // Remove current page
    current.classList.remove("active");

    // Show next page
    if (
        next &&
        next.classList.contains("page")
    ) {

        setTimeout(function() {

            next.classList.add("active");

        }, 250);

    }

}


// =====================================
// CLOSE LETTER
// =====================================

function closeLetter() {

    overlay.classList.remove("show");

    // Stop video when closing
    const video =
        document.querySelector(".video-box video");

    if (video) {
        video.pause();
        video.currentTime = 0;
    }

}