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
