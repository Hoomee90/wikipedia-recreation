// User Interface Logic

window.onload = function() {
  const body = document.querySelector("body");

  const darkButton = document.getElementById("option2");
  const darkContainer = darkButton.parentElement;
  const lightButton = document.getElementById("option1");
  const lightContainer = lightButton.parentElement;

  classExchange = function (receiver, giver, toGive, toReceive) {
    giver.classList.remove(toGive);
    receiver.classList.add(toReceive);
    console.log("exchange completed!");
  };

  darkButton.onclick = function() {
    let lightCards = document.querySelectorAll(".bg-light");
    let yellowCard = document.querySelector(".bg-warning");
   
    classExchange(body, body, "bg-light", "bg-dark");
    classExchange(darkContainer, lightContainer, "active", "active");
    classExchange(yellowCard, yellowCard, "bg-warning", "bg-danger");

    lightCards.forEach(card => {
      classExchange(card, card, "bg-light", "bg-dark");
      classExchange(card, card, "text-dark", "text-light");
    });
  };

  lightButton.onclick = function() {
    let darkCards = document.querySelectorAll(".bg-dark");
    let redCard = document.querySelector(".bg-danger");
   
    classExchange(body, body, "bg-dark", "bg-light");
    classExchange(lightContainer, darkContainer, "active", "active");
    classExchange(redCard, redCard, "bg-danger", "bg-warning");

    darkCards.forEach(card => {
      classExchange(card, card, "bg-dark", "bg-light");
      classExchange(card, card, "text-light", "text-dark");
    });
  };
};