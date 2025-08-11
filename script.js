window.addEventListener("DOMContentLoaded", init);

function init() {
    initTabs();
    filterGrid();
}

function initTabs() {
    const tablinks = document.getElementsByClassName("tablink");

    for (let link of tablinks) {
        link.addEventListener("click", toggleTab);
    }
}

function toggleTab() {
    if (this instanceof HTMLAnchorElement === false) {
        console.warn("toggleTab function called outside event listener");
        return;
    }

    const tabName = this.dataset.target;
    const tabs = document.getElementsByClassName("tab");

    for (let tab of tabs) {
        if (tab.classList.contains(tabName)) {
            tab.classList.add("active");
        } else {
            tab.classList.remove("active");
        }
    }
}

function filterGrid() {
    const imgLoad = imagesLoaded(document.querySelectorAll(".isotope img"));
    let iso;
    const options = {
        itemSelector: ".isotope > *"
    };
    imgLoad.on("always", () => (iso = new Isotope(document.querySelector(".isotope"))));
    const isotopeControlButtons = document.querySelectorAll(".isotope_controls button");
    let prev = isotopeControlButtons[0];
    isotopeControlButtons.forEach(
        el =>
            (el.onclick = () => {
                prev.classList.toggle("active");
                el.classList.toggle("active");
                prev = el;
                iso.arrange({ filter: el.dataset.filter === "all" ? "[data-product]" : `[data-product='${el.dataset.filter}']` });
            })
    );
}
