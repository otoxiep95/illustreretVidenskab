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

function checkForm() {
  console.log("checkForm called");
  let validity = form.checkValidity();
  console.log("Validity", validity);

  console.log(document.querySelector("#phonenr").checkValidity());
  if (
    document.querySelector("#phonenr").checkValidity() &&
    document.querySelector("#phonenr").value !== ""
  ) {
    document
      .querySelector("#phonenr")
      .nextElementSibling.nextElementSibling.classList.remove("hidden");
  } else if (document.querySelector("#phonenr").value === "") {
    document
      .querySelector("#phonenr")
      .nextElementSibling.nextElementSibling.classList.add("hidden");
  } else {
    document
      .querySelector("#phonenr")
      .nextElementSibling.nextElementSibling.classList.add("hidden");
  }

  if (
    document.querySelector("#confirmemail").value !=
    document.querySelector("#email").value
  ) {
    //console.log(document.querySelector("#confirmemail + .validated"));
    document
      .querySelector("#confirmemail")
      .nextElementSibling.nextElementSibling.classList.add("hidden");
    document
      .querySelector("#confirmemail")
      .setCustomValidity("email Must be Matching.");
  } else {
    // input is valid -- reset the error message
    document
      .querySelector("#confirmemail")
      .nextElementSibling.nextElementSibling.classList.remove("hidden");
    document.querySelector("#confirmemail").setCustomValidity("");
  }

  if (validity) {
    body.style.backgroundColor = "lightgreen";
    paySlide.style.color = "black";
  } else {
    body.style.backgroundColor = "lightblue";
    paySlide.style.color = "lightgrey";
  }
}
