
const generatebtn = document.querySelector("btn2");

const passs = document.querySelector("#inputtype");

const length = 12;

const UpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const LowerCase = "abcdefghijklmnopqrstuvwxyz";
const Number = "0123456789";
const Symbol = "~!@#$%^&*(";

const allchars = UpperCase + LowerCase + Number + Symbol;

function createPassword() {
  let password = "";
  password += UpperCase[Math.floor(Math.random() * UpperCase.length)];
  password += LowerCase[Math.floor(Math.random() * LowerCase.length)];
  password += Number[Math.floor(Math.random() * Number.length)];
  password += Symbol[Math.floor(Math.random() * Symbol.length)];

  while (length > password.length) {
    password += allchars[Math.floor(Math.random() * allchars.length)];
  }

  passs.value = password;
}
// generatebtn.addEventListener("click", createPassword(), false);
