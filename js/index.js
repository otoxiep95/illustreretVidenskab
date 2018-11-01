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

function checkValFirstName() {
  if (document.querySelector("#firstname").value === "") {
    document.querySelector("#firstname").nextElementSibling.style.color = "red";
  } else {
    if (document.querySelector("#firstname").checkValidity()) {
      document
        .querySelector("#firstname")
        .nextElementSibling.nextElementSibling.classList.remove("hidden");
    } else {
      document
        .querySelector("#firstname")
        .nextElementSibling.nextElementSibling.classList.add("hidden");
    }
  }
}

function checkValLastName() {
  if (document.querySelector("#lastname").value === "") {
    document.querySelector("#lastname").nextElementSibling.style.color = "red";
  } else {
    if (document.querySelector("#lastname").checkValidity()) {
      document
        .querySelector("#lastname")
        .nextElementSibling.nextElementSibling.classList.remove("hidden");
    } else {
      document
        .querySelector("#lastname")
        .nextElementSibling.nextElementSibling.classList.add("hidden");
    }
  }
}

function checkValPhoneNr() {
  if (
    document.querySelector("#phonenr").checkValidity() &&
    document.querySelector("#phonenr").value !== ""
  ) {
    document
      .querySelector("#phonenr")
      .nextElementSibling.nextElementSibling.classList.remove("hidden");
    document
      .querySelector("#phonenr")
      .nextElementSibling.nextElementSibling.nextElementSibling.classList.add(
        "hidden"
      );
  } else if (document.querySelector("#phonenr").value === "") {
    document
      .querySelector("#phonenr")
      .nextElementSibling.nextElementSibling.classList.add("hidden");
  } else {
    document
      .querySelector("#phonenr")
      .nextElementSibling.nextElementSibling.classList.add("hidden");
  }
}

function checkValAdress() {
  if (document.querySelector("#adress").value === "") {
    document.querySelector("#adress").nextElementSibling.style.color = "red";
  } else {
    if (document.querySelector("#adress").checkValidity()) {
      document
        .querySelector("#adress")
        .nextElementSibling.nextElementSibling.classList.remove("hidden");
    } else {
      document
        .querySelector("#adress")
        .nextElementSibling.nextElementSibling.classList.add("hidden");
    }
  }
}

function checkValPostNr() {
  if (document.querySelector("#postnr").checkValidity()) {
    document
      .querySelector("#postnr")
      .nextElementSibling.nextElementSibling.classList.remove("hidden");
    document
      .querySelector("#postnr")
      .nextElementSibling.nextElementSibling.nextElementSibling.classList.add(
        "hidden"
      );
    document.querySelector(".warning-messages-postnr").classList.add("hidden");
  } else if (
    document.querySelector("#postnr").value === "" &&
    !document.querySelector("#postnr").checkValidity()
  ) {
    document
      .querySelector("#postnr")
      .nextElementSibling.nextElementSibling.nextElementSibling.classList.add(
        "hidden"
      );
    document.querySelector("#postnr").nextElementSibling.style.color = "red";
    document.querySelector(".warning-messages-postnr").classList.add("hidden");
  } else if (
    document.querySelector("#postnr").value !== "" &&
    !document.querySelector("#postnr").checkValidity()
  ) {
    document
      .querySelector("#postnr")
      .nextElementSibling.nextElementSibling.classList.add("hidden");
    document
      .querySelector("#postnr")
      .nextElementSibling.nextElementSibling.nextElementSibling.classList.remove(
        "hidden"
      );
    document
      .querySelector(".warning-messages-postnr")
      .classList.remove("hidden");
  }
}

function checkValCity() {
  if (document.querySelector("#city").value === "") {
    document.querySelector("#city").nextElementSibling.style.color = "red";
  } else {
    if (document.querySelector("#city").checkValidity()) {
      document
        .querySelector("#city")
        .nextElementSibling.nextElementSibling.classList.remove("hidden");
    } else {
      document
        .querySelector("#city")
        .nextElementSibling.nextElementSibling.classList.add("hidden");
    }
  }
}
function checkValEmail() {
  if (document.querySelector("#email").value === "") {
    document
      .querySelector("#email")
      .nextElementSibling.nextElementSibling.classList.add("hidden");
    document
      .querySelector("#email")
      .nextElementSibling.nextElementSibling.nextElementSibling.classList.add(
        "hidden"
      );
    console.log("make" + document.querySelector("#email").nextElementSibling);
    document.querySelector("#email").nextElementSibling.style.color = "red";
  } else {
    if (document.querySelector("#email").checkValidity()) {
      document
        .querySelector("#email")
        .nextElementSibling.nextElementSibling.classList.remove("hidden");
      document
        .querySelector("#email")
        .nextElementSibling.nextElementSibling.nextElementSibling.classList.add(
          "hidden"
        );
    } else {
      document
        .querySelector("#email")
        .nextElementSibling.nextElementSibling.classList.add("hidden");
      document
        .querySelector("#email")
        .nextElementSibling.nextElementSibling.nextElementSibling.classList.remove(
          "hidden"
        );
    }
  }
}
function checkValConfirmEmail() {
  if (document.querySelector("#confirmemail").value === "") {
    document
      .querySelector("#confirmemail")
      .nextElementSibling.nextElementSibling.nextElementSibling.classList.add(
        "hidden"
      );
    document
      .querySelector("#confirmemail")
      .nextElementSibling.nextElementSibling.classList.add("hidden");
    document.querySelector("#confirmemail").nextElementSibling.style.color =
      "red";
    document
      .querySelector(".warning-messages-confirmemail")
      .classList.add("hidden");
  } else {
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
      document
        .querySelector("#confirmemail")
        .nextElementSibling.nextElementSibling.nextElementSibling.classList.remove(
          "hidden"
        );
      document
        .querySelector(".warning-messages-confirmemail")
        .classList.remove("hidden");
    } else {
      document
        .querySelector("#confirmemail")
        .nextElementSibling.nextElementSibling.classList.remove("hidden");
      document
        .querySelector("#confirmemail")
        .nextElementSibling.nextElementSibling.nextElementSibling.classList.add(
          "hidden"
        );
      document
        .querySelector(".warning-messages-confirmemail")
        .classList.add("hidden");
      document.querySelector("#confirmemail").setCustomValidity("");
    }
  }
}

function resetColor(input) {
  let label = input.nextElementSibling;
  console.log(label);
  label.style.color = "#1b1464";
}

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
