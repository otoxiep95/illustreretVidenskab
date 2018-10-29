const infosButton = document.querySelector(".infos-nav");
const paymentButton = document.querySelector(".payment-nav");
const infosScreen = document.querySelector(".personal-info");
const paymentScreen = document.querySelector(".payment-slide");
const paySlide = document.querySelector("#payh3");

infosButton.addEventListener("click", function() {
  infosScreen.classList.remove("hidden");
  paymentScreen.classList.add("hidden");
  infosButton.classList.add("selected");
  paymentButton.classList.remove("selected");
});

paymentButton.addEventListener("click", function() {
  infosScreen.classList.add("hidden");
  paymentScreen.classList.remove("hidden");
  infosButton.classList.remove("selected");
  paymentButton.classList.add("selected");
  body.style.backgroundColor = "lightblue";

});

const backArrow = document.querySelector(".arrow");

function GoBack() {
  window.history.back();
}

backArrow.addEventListener("click", function() {
  GoBack();
})

const body = document.querySelector("body");

let form = document.querySelector("#dataForm");

function checkForm() {
  console.log("checkForm called");
  let validity = form.checkValidity();
  console.log("Validity", validity);

  if (validity) {
    body.style.backgroundColor = "lightgreen";
    paySlide.style.color = "black";
  } else {
    body.style.backgroundColor = "lightblue";
    paySlide.style.color = "lightgrey";
  }
}