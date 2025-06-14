
var header = document.getElementById("header");

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
AOS.init({
    offset: 120,
    duration: 1000,
    once: false,
});
