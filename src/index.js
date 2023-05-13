import style from "./css/index.css";

const container = document.querySelector(".container");
const count = document.getElementById("count");
const total = document.getElementById("total");
const flySelect = document.getElementById("city");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");
const myButton = document.getElementById("myButton");

let ticketPrice = +flySelect.value;

function updateSelectedCount() {
  const selectedSeats = document.querySelectorAll(".row .seat.selected");

  const selectedSeatsCount = selectedSeats.length;

  count.innerText = selectedSeatsCount;
  total.innerText = selectedSeatsCount * ticketPrice;
}

flySelect.addEventListener("change", (e) => {
  ticketPrice = +e.target.value;
  updateSelectedCount();
});

container.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("seat") &&
    !e.target.classList.contains("occupied")
  ) {
    e.target.classList.toggle("selected");
  }

  updateSelectedCount();
});

function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
}

function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

function checkEmail(input) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, "adres E-mail jest nieprawidłowy");
  }
}

function checkRequired(inputArr) {
  inputArr.forEach(function (input) {
    if (input.value.trim() === "") {
      showError(input, `pole jest wymagane`);
    } else {
      showSuccess(input);
    }
  });
}

function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(input, `musi posiadać min. ${min} znaków`);
  } else if (input.value.length > max) {
    showError(input, `może posiadać max. ${max} znaków`);
  } else {
    showSuccess(input);
  }
}

function checkPasswordsMatch(input1, input2) {
  if (input1.value !== input2.value) {
    showError(input2, "hasła nie zgadzają się");
  }
}

myButton.addEventListener("click", function (e) {
  e.preventDefault();

  checkRequired([username, email, password, password2]);
  checkLength(username, 6, 15);
  checkLength(password, 6, 25);
  checkEmail(email);
  checkPasswordsMatch(password, password2);

  const usernameValue = username.value;
  const emailValue = email.value;
  const passwordValue = password.value;
  const password2Value = password2.value;

  if (
    usernameValue &&
    emailValue &&
    passwordValue &&
    password2Value &&
    !document.querySelector(".error")
  ) {
    const message =
      "Witaj, " +
      usernameValue +
      "! Twoje zgłoszenie zostało przesłane na adres: " +
      emailValue;
    alert(message);
  }
});
