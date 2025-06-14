var drop_add = document.getElementById("drop_add");
var text_none = document.querySelector(".text_none");
var plus = document.getElementById("plus");
var minus = document.getElementById("minus");
var drobdwon = document.getElementById("drobdwon");

drop_add.addEventListener("click", () => {
  text_none.classList.toggle("active");
  plus.classList.toggle("active");
  minus.classList.toggle("active");
  drobdwon.classList.toggle("active");
  // remove actiev
  text_noneM.classList.remove("active");
  plusM.classList.remove("active");
  minusM.classList.remove("active");
});

// MISSION
var plusM = document.getElementById("plusM");
var minusM = document.getElementById("minusM");
var drop_mission = document.getElementById("drop_mission");
var text_noneM = document.querySelector(".text_noneM");

drop_mission.addEventListener("click", () => {
  text_noneM.classList.toggle("active");
  plusM.classList.toggle("active");
  minusM.classList.toggle("active");
  // remove actiev
  text_none.classList.add("active");
  plus.classList.add("active");
  minus.classList.add("active");
});

// add background  header
var header = document.getElementById("header");
window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    header.classList.add("active");
    console.log("scroll");
  } else {
    header.classList.remove("active");
  }
});

// add class list active to header | responsive And select to elements

var dropList_header = document.getElementById("dropList_header");
var services_plus = document.getElementById("services_plus");
var service_minus = document.getElementById("service_minus");
var add_to_active = document.getElementById("add_to_active");
var close_header = document.getElementById("close_header");
var header_responsive = document.getElementById("header_responsive");
var open_header = document.getElementById("open_header");

function headerResponsive() {
  dropList_header.classList.toggle("active");
  services_plus.classList.toggle("active");
  service_minus.classList.toggle("active");
}

add_to_active.addEventListener("click", () => {
  headerResponsive();
});

// Open And Close Header

function closeHeader() {
  header_responsive.classList.remove("active");
}
function openHeader() {
  header_responsive.classList.add("active");
}

close_header.addEventListener("click", () => {
  closeHeader();
});

open_header.addEventListener("click", () => {
  openHeader();
});
