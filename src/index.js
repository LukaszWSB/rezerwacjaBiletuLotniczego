import style from "./css/index.css";

const container = document.querySelector(".container");
const count = document.getElementById("count");
const total = document.getElementById("total");
const flySelect = document.getElementById("city");
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const myButton = document.getElementById("myButton");

// populateUI();
let ticketPrice = +flySelect.value;

// function setFlyData(flyIndex, flyPrice) {
//   localStorage.setItem("selectedFlyIndex", flyIndex);
//   localStorage.setItem("selectedFlyPrice", flyPrice);
// }

function updateSelectedCount() {
  const selectedSeats = document.querySelectorAll(".row .seat.selected");

  // const seatsIndex = [...selectedSeats].map((seat) => [...seats].indexOf(seat));

  // localStorage.setItem("selectedSeats", JSON.stringify(seatsIndex));

  const selectedSeatsCount = selectedSeats.length;

  count.innerText = selectedSeatsCount;
  total.innerText = selectedSeatsCount * ticketPrice;
}

// function populateUI() {
//   const selectedSeats = JSON.parse(localStorage.getItem("selectedSeats"));

//   if (selectedSeats !== null && selectedSeats.length > 0) {
//     seats.forEach((seat, index) => {
//       if (selectedSeats.indexOf(index) > -1) {
//         seat.classList.add("selected");
//       }
//     });
//   }

//   const selectedFlyIndex = localStorage.getItem("selectedFlyIndex");

//   if (selectedFlyIndex != null) {
//     flySelect.selectedIndex = selectedFlyIndex;
//   }
// }

flySelect.addEventListener("change", (e) => {
  ticketPrice = +e.target.value;
  // setFlyData(e.target.selectedIndex, e.target.value);
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

// updateSelectedCount();

function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = 'form-control error';
  const small = formControl.querySelector('small');
  small.innerText = message;
}

function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}

function checkEmail(input) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, 'adres E-mail jest nieprawidłowy');
  }
}

function checkRequired(inputArr) {
  inputArr.forEach(function (input) {
    if (input.value.trim() === '') {
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
    showError(input2, 'hasła nie zgadzają się');
  }
}


form.addEventListener('submit', function (e) {
  e.preventDefault();

  checkRequired([username, email, password, password2]);
  checkLength(username, 6, 15);
  checkLength(password, 6, 25);
  checkEmail(email);
  checkPasswordsMatch(password, password2);
});



// myButton.addEventListener("click", function() {
//   alert("Wyskakujące okienko!");
// }); okienko wyskakuje od razu, bez sprawdzania poprawności formularza, a powinno potem
