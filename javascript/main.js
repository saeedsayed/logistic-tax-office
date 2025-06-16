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

const subsOdometer = document.querySelectorAll(".rs-count");
if (subsOdometer.length > 0 && typeof Odometer !== "undefined") {
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

// function the form  || Reload
const form = document.getElementById("callback-form");
const result = document.getElementById("req_result");
// aba87fc8-0cbf-4640-becf-d4b682a19083
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const access_key = "aba87fc8-0cbf-4640-becf-d4b682a19083";
  const formData = new FormData(form);
  const requestObj = Object.fromEntries(formData);
  requestObj.access_key = access_key;
  requestObj.subject = "From Logistic Website";
  const json = JSON.stringify(requestObj);
  result.innerHTML = "Please wait...";

  fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: json,
  })
    .then(async (response) => {
      let json = await response.json();
      if (response.status == 200) {
        result.innerHTML = json.message;
      } else {
        console.log(response);
        result.innerHTML = json.message;
      }
    })
    .catch((error) => {
      console.log(error);
      result.innerHTML = "Something went wrong!";
    })
    .then(function () {
      form.reset();
      setTimeout(() => {
        result.style.display = "none";
      }, 5000);
    });
});
