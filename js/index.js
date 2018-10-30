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
});

const body = document.querySelector("body");

let form = document.querySelector("#dataForm");
let paymentForm = document.querySelector("#pay");

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

const securePayment = document.querySelector("#secure");
let progress = document.querySelector(".progress-bar");

function checkPayment() {
  // if (paymentForm.checked == true) {
  //   console.log("checkPayment called");
  // }
  let paymentValid = paymentForm.checkValidity();
  console.log("paymentValid", paymentValid);

  if (paymentValid) {
    securePayment.classList.remove("hidden");
    progress.style.display = "block";
    infosButton.classList.add("hidden");
    paymentButton.classList.add("hidden");
    body.style.backgroundColor = "lightgreen";
  }
}
