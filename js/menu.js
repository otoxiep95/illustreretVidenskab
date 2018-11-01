let menuOpen = false;
let menuIcon = document.querySelector(".menuIcon");
let menu = document.querySelector(".menu");
let bars = menuIcon.querySelectorAll("rect");
menuIcon.addEventListener("click", toggleMenu);

function toggleMenu() {
  menuOpen = !menuOpen;
  bars[0].classList.toggle("rotateDown");
  bars[1].classList.toggle("fadeOut");
  bars[2].classList.toggle("rotateUp");
  menu.classList.toggle("hidden");
}

let radioBtns = document.getElementsByName("noMagazines");

let bestilBtn = document.querySelector("#bestilBtn");
console.log("bestilBtn", bestilBtn);

bestilBtn.addEventListener("click", function() {
  for (let i = 0; i < radioBtns.length; i++) {
    if (radioBtns[i].checked) {
      let btnValue = radioBtns[i].value;
      // let number = i;
      console.log("value", btnValue);
      // console.log("number", number);
      sessionStorage.setItem("value", btnValue);
      // sessionStorage.setItem("number", number);
      break;
    }

  }
  window.location = "form.html";
})