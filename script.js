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

    let prevActiveTabLink = document.querySelector(".tablink.active");
    prevActiveTabLink.classList.remove("active");
    this.classList.add("active");

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
    // const imgLoad = imagesLoaded(document.querySelectorAll(".isotope img"));
    // let iso;
    // const options = {
    //     itemSelector: ".isotope > *"
    // };
    // imgLoad.on("always", () => (iso = new Isotope(document.querySelector(".isotope"))));
    // const isotopeControlButtons = document.querySelectorAll(".isotope_controls button");
    // let prev = isotopeControlButtons[0];
    // isotopeControlButtons.forEach(
    //     el =>
    //         (el.onclick = () => {
    //             prev.classList.toggle("active");
    //             el.classList.toggle("active");
    //             prev = el;
    //             iso.arrange({ filter: el.dataset.filter === "all" ? "[data-category]" : `[data-category='${el.dataset.filter}']` });
    //         })
    // );
    const controls = document.querySelectorAll(".filter_controls button");
    let prevActiveControl = document.querySelector(".filter_controls button.active");
    const blocks = document.querySelectorAll(".filter_grid > *");

    controls.forEach(button =>
        button.addEventListener("click", () => {
            prevActiveControl.classList.remove("active");

            prevActiveControl = button;
            prevActiveControl.classList.add("active");

            let category = button.dataset.filter;
            blocks.forEach(block => {
                if (category === "all") {
                    block.classList.remove("hidden");
                    return;
                }
                if (block.dataset.category === category) {
                    block.classList.remove("hidden");
                } else {
                    block.classList.add("hidden");
                }
            });
        })
    );
}
