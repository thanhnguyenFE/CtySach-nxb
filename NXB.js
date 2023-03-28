const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const tabs = $$(".tab-item");
const panes = $$(".tab-pane");
const isLine = true;

const tabActive = $(".tab-item.active");
const line = $(".tabs .moving_line")

line.style.left =    tabActive.offsetWidth/2 - line.offsetWidth/2 + 'px';


tabs.forEach((tab, index) => {
    const pane = panes[index];

    tab.onclick = function () {
        $(".tab-item.active").classList.remove("active");
        $(".tab-pane.active").classList.remove("active");
        line.style.left = this.offsetLeft - line.offsetWidth / 2 + this.offsetWidth / 2 + 'px';
        this.classList.add("active");
        pane.classList.add("active");
    }
});