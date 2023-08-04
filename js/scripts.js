// User Interface Logic

window.onload = function() {
  const body = document.querySelector("body");

  const darkButton = document.getElementById("option2");
  const darkContainer = darkButton.parentElement;
  const lightButton = document.getElementById("option1")
  const lightContainer = lightButton.parentElement;

  classExchange = function (receiver, giver, toGive, toReceive) {
    giver.classList.remove(toGive)
    receiver.classList.add(toReceive)
    console.log("exchange completed!")
  };

  darkButton.onclick = function() {
    let lightCards = document.querySelectorAll(".bg-light");
   
    classExchange(body, body, "bg-light", "bg-dark")
    classExchange(darkContainer, lightContainer, "active", "active")

    lightCards.forEach(card => {
      classExchange(card, card, "bg-light", "bg-dark")
    });
  };

  lightButton.onclick = function() {
    let darkCards = document.querySelectorAll(".bg-dark");
   
    classExchange(body, body, "bg-dark", "bg-light")
    classExchange(lightContainer, darkContainer, "active", "active")

    darkCards.forEach(card => {
      classExchange(card, card, "bg-dark", "bg-light")
    });
  };
};