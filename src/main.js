import "./style.css";

const accepterCookie = document.querySelector("#accepter");
const afvisCookie = document.querySelector("#afvis");
const boks = document.querySelector("#cookieboks");

accepterCookie.addEventListener("click", fjernBoks);
afvisCookie.addEventListener("click", fjernBoks);

function fjernBoks() {
  boks.classList.add("hidden");
  sessionStorage.setItem("fjernboks", true);
}

if (sessionStorage.getItem("fjernboks")) {
  boks.classList.add("hidden");
}
