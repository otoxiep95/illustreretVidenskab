const infosButton = document.querySelector(".infos-nav");
const paymentButton = document.querySelector(".payment-nav");
const infosScreen = document.querySelector(".personal-info");
const paymentScreen = document.querySelector(".payment-slide");
const paySlide = document.querySelector("#payh3");

let valueMag = sessionStorage.getItem("value");
// let numberMag = sessionStorage.getItem("number");
console.log("valueMag", valueMag);
// console.log("number", number);

let spar = document.getElementById("spar2");
let price = document.getElementById("price");
let numbersMag = document.getElementById("numbersMag");

function insertData() {
  if (valueMag == "6 nr. 199kr.") {
    console.log("it's 6!");
    spar.innerHTML = "1200" + "" + "kr." + "!";
    price.innerHTML = "199" + "" + "kr.";
    numbersMag.innerHTML = "6" + " " + "nr.";
  } else {
    spar.innerHTML = "987" + "" + "kr." + "!";
    price.innerHTML = "99" + "" + "kr.";
    numbersMag.innerHTML = "2" + " " + "nr.";
  }
}

insertData();

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
  body.style.backgroundColor = "#0816611f";
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

let phoneField = document.querySelector("#phonenr");

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

let phoneValidity = phoneField.checkValidity();

console.log("check phone validity", phoneValidity);

// if (phoneValidity) {
//   document
//     .querySelector("#phonenr")
//     .nextElementSibling.nextElementSibling.classList.remove("hidden");
// } else if (phoneValidity && phoneField.value == null) {
//   document
//     .querySelector("#phonenr")
//     .nextElementSibling.nextElementSibling.classList.add("hidden");
// } else {
//   document
//     .querySelector("#phonenr")
//     .nextElementSibling.nextElementSibling.classList.add("hidden");
// }
// if (
//   document.querySelector("#phonenr").checkValidity() &&
//   document.querySelector("#phonenr").value !== ""
// ) {
//   document
//     .querySelector("#phonenr")
//     .nextElementSibling.nextElementSibling.classList.remove("hidden");
//   document.querySelector("#phonenr").setCustomValidity("");
// } else if (document.querySelector("#phonenr").value === "") {
//   document
//     .querySelector("#phonenr")
//     .nextElementSibling.nextElementSibling.classList.add("hidden");
// } else {
//   document
//     .querySelector("#phonenr")
//     .nextElementSibling.nextElementSibling.classList.add("hidden");
// }
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
    //form is valid and phonefield number is empty and form is valid and phonefield is not empty and valid //
    phoneField.nextElementSibling.nextElementSibling.classList.add("hidden");
    body.style.backgroundColor = "lightgreen";
    paySlide.style.color = "black";
  } else if (validity && phoneValidity) {
    //form is valid and phonefield is valid //
    body.style.backgroundColor = "lightgreen";
    paySlide.style.color = "black";
    // } else if () {
    //   //form is valid and phonefield is valid and empty//
    //   phoneField.nextElementSibling.nextElementSibling.classList.add("hidden");
    // }
  } else if (phoneValidity && phoneField.value) {
    //phonefield is valid and not empty//
    phoneField.nextElementSibling.nextElementSibling.classList.remove("hidden");
  } else {
    body.style.backgroundColor = "#0816611f";
    paySlide.style.color = "lightgrey";
    phoneField.nextElementSibling.nextElementSibling.classList.add("hidden");
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
  // let termsForm = document.querySelector(".terms");
  let terms = document.querySelector("#terms-condition");
  // let termsValid = termsForm.checkValidity();
  // console.log("termsValid", termsValid);
  if (paymentValid && document.getElementById("terms-condition").checked) {
    securePayment.classList.remove("hidden");

    body.style.backgroundColor = "lightgreen";
  } else {
    securePayment.classList.add("hidden");
    body.style.backgroundColor = "#0816611f";
  }
}

// function validate() {
//   if (document.getElementById("terms-condition").checked) {
//     console.log("checked");
//   } else {
//     console.log("unchecked");
//   }
// }
