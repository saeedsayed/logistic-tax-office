
AOS.init({
    offset: 120,
    duration: 1000,
    once: false,
});

window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
        header.classList.add("active");
    } else {
        header.classList.remove("active");
    }
});

const subsOdometer = document.querySelectorAll('.rs-count')
if (subsOdometer.length > 0 && typeof Odometer !== 'undefined') {
    subsOdometer.forEach((el) => {
        const odometer = new Odometer({
            el: el,
            // value: el.dataset.count,
            // format: '(,ddd)',
            // theme: 'default',
            duration: 2000,
        });
        // odometer.render();
        // odometer.update(el.dataset.count);
        el.innerHTML = el.dataset.count;
    });
}

// add background  header
let header = document.getElementById("header");
window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
});

// add class list active to header | responsive And select to elements

let dropdownMenu = document.getElementById("dropdown-menu");
let dropdownBtn = document.getElementById("dropdown-btn");
let sidebar = document.getElementById("sidebar");
let closeSidebarBtn = document.getElementById("closeSidebar");
let openSidebarBtn = document.getElementById("openSidebar");


dropdownBtn.addEventListener("click", () => {
    dropdownMenu.classList.toggle("active");
});

// Open And Close Header

closeSidebarBtn.addEventListener("click", () => {
    sidebar.classList.remove("active");
});

openSidebarBtn.addEventListener("click", () => {
    sidebar.classList.add("active");
});