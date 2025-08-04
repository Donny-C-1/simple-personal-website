window.addEventListener("DOMContentLoaded", init);

function init() {
    initTabs();
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
