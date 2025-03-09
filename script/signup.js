// eye control
const eye = document.querySelector("main .form form #password-box #eye");

eye.addEventListener("click", () => {
  if (eye.getAttribute("src") === "./assets/icons/eye.svg") {
    eye.setAttribute("src", "./assets/icons/iconmonstr-eye-off-thin.svg");
    inputPassword.setAttribute("type", "text");
  } else {
    eye.setAttribute("src", "./assets/icons/eye.svg");
    inputPassword.setAttribute("type", "password");
  }
});

// validation
const inputPassword = document.getElementById("password");
const inputEmail = document.getElementById("email");
const alertPassword = document.querySelector(".alert-password");
const alertEmail = document.querySelector(".alert-email");

const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWZYZ";
const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const characters = "!@#$%^&*()-+_=[],./{}|:;<>?";

// email
function emailValidation() {
  const email = inputEmail.value;
  if (
    !email.includes("@") ||
    email.indexOf("@") === 0 ||
    !email.includes(".") ||
    email.indexOf(".") <= email.indexOf("@") + 2 ||
    email.length <= email.indexOf(".") + 2
  ) {
    inputEmail.classList.add("wrong");
    inputEmail.classList.remove("valid");
    alertEmail.classList.remove("valid");
    alertEmail.textContent = "Format email salah";
    alertEmail.style.display = "block";
  } else {
    inputEmail.classList.remove("wrong");
    inputEmail.classList.add("valid");
    alertEmail.classList.add("valid");
    alertEmail.textContent = "Email sudah valid";
  }
  submitButtonCheck();
}

// password
function passwordValidation() {
  const password = inputPassword.value;
  const words = password.split("");
  const resultUpperCaseLetters = checkUpperCaseLetters(words);
  const resultLowerCaseLetters = checkLowerCaseLetters(words);
  const resultNumbers = checkNumbers(words);
  const resultCharacters = checkCharacters(words);
  if (
    resultUpperCaseLetters &&
    resultLowerCaseLetters &&
    resultCharacters &&
    resultNumbers
  ) {
    inputPassword.classList.remove("wrong");
    inputPassword.classList.add("valid");
    alertPassword.classList.add("valid");
    alertPassword.textContent = "Password sudah valid";
    alertPassword.style.display = "block";
  } else if (words.length <= 7) {
    inputPassword.classList.add("wrong");
    inputPassword.classList.remove("valid");
    alertPassword.classList.remove("valid");
    alertPassword.textContent =
      "Jumlah karakter password harus lebih dari 7 karakter";
    alertPassword.style.display = "block";
  } else {
    inputPassword.classList.add("wrong");
    inputPassword.classList.remove("valid");
    alertPassword.classList.remove("valid");
    alertPassword.textContent =
      "Karakter harus mengandung angka, huruf besar, huruf kecil, dan karakter khusus";
    alertPassword.style.display = "block";
  }
  submitButtonCheck();
}

function checkUpperCaseLetters(chars) {
  for (let char of chars) {
    if (upperCaseLetters.includes(char)) {
      return true;
    }
  }
  return false;
}

function checkLowerCaseLetters(chars) {
  for (let char of chars) {
    if (lowerCaseLetters.includes(char)) {
      return true;
    }
  }
  return false;
}

function checkNumbers(chars) {
  for (let char of chars) {
    if (numbers.includes(char)) {
      return true;
    }
  }
  return false;
}

function checkCharacters(chars) {
  for (let char of chars) {
    if (characters.includes(char)) {
      return true;
    }
  }
  return false;
}

// check the condition before submitting
const anchorSubmit = document.querySelector(".anchor-submit");
const buttonSubmit = document.querySelector(".button-submit");
const termsConditions = document.querySelector('input[type="checkbox"]');
const alert = document.querySelector(".alert");
const alertText = document.querySelector(".alert > p");

function submitButtonCheck() {
  if (
    inputEmail.classList.contains("valid") &&
    inputPassword.classList.contains("valid") &&
    termsConditions.checked
  ) {
    anchorSubmit.setAttribute("href", "./profile-page.html");
    buttonSubmit.classList.remove("not-allowed");
    // buttonSubmit.setAttribute("type", "submit");
  } else {
    anchorSubmit.setAttribute("href", "#");
    buttonSubmit.classList.add("not-allowed");
    // buttonSubmit.setAttribute("type", "button");
  }
}

buttonSubmit.addEventListener("click", () => {
  if (
    !inputEmail.classList.contains("valid") ||
    !inputPassword.classList.contains("valid")
  ) {
    alertText.textContent = "Email atau Password Salah";
    alert.style.display = "block";
    setTimeout(() => {
      alert.style.display = "none";
    }, 3000);
  } else if (!termsConditions.checked) {
    alertText.textContent =
      "Anda harus mencentang untuk menyetujui syarat dan ketentuan";
    alert.style.display = "block";
    setTimeout(() => {
      alert.style.display = "none";
    }, 3000);
  } else {
    false;
  }
});

document
  .getElementById("password")
  .addEventListener("keyup", passwordValidation);
document.getElementById("email").addEventListener("keyup", emailValidation);
document
  .querySelector('input[type="checkbox"]')
  .addEventListener("click", submitButtonCheck);
