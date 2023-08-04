// User Interface Logic

window.onload = function() {
  const body = document.querySelector("body");
  const darkButton = document.getElementById("option2");
  const darkContainer = darkButton.parentElement;
  const lightButton = document.getElementById("option1")
  const lightContainer = lightButton.parentElement;

  darkButton.onclick = function() {
    body.style.backgroundColor = "dimgray";

    lightContainer.classList.remove("active");
    darkContainer.classList.add("active");
  };

  lightButton.onclick = function() {
    body.style.backgroundColor = "white";

    darkContainer.classList.remove("active");
    lightContainer.classList.add("active");
  };
};