document.addEventListener("DOMContentLoaded", function () {
    // Get all the nav links
    const navTabs = document.querySelectorAll(".nav-tab a");

    // Loop through each nav tab and check if the href matches the current location
    navTabs.forEach(function (tab) {
        // Check if the current URL matches the href of the tab
        if (tab.href === window.location.href) {
            // Add 'active' class to the parent <li> of the clicked tab
            tab.closest(".nav-tab").classList.add("active");
        }
    });
});
// ====== hotel js library of glightbox in javascript sliders for images in crasoual field and change the data according to that just  change the class only=====
const glightbox = GLightbox({
    selector: ".glightbox",
});
