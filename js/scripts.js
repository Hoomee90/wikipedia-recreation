// User Interface Logic

window.onload = function() {
  const body = document.querySelector("body");
  const pageContainer = document.querySelector(".container")

  const welcomeText = document.querySelector("h2");
  const paraText = document.querySelectorAll("p");
  const titleText = document.querySelectorAll("h4");

  const darkButton = document.getElementById("option2");
  const darkContainer = darkButton.parentElement;

  const lightButton = document.getElementById("option1");
  const lightContainer = lightButton.parentElement;

  const smallButton = document.getElementById("option3");
  const smallContainer = smallButton.parentElement;

  const largeButton = document.getElementById("option4");
  const largeContainer = largeButton.parentElement;

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

  largeButton.onclick = function() {

    classExchange(largeContainer, smallContainer, "active", "active");
    classExchange(pageContainer, pageContainer, "container", "container-fluid");
    welcomeText.style.fontSize = "100px";

    paraText.forEach(text => {
      text.style.fontSize = "40px";
    });
    titleText.forEach(text => {
      text.style.fontSize = "70px";
    });
  };

  smallButton.onclick = function() {

    classExchange(smallContainer, largeContainer, "active", "active");
    classExchange(pageContainer, pageContainer, "container-fluid", "container");
    welcomeText.style.fontSize = "2rem";

    paraText.forEach(text => {
      text.style.fontSize = "1rem";
    });
    titleText.forEach(text => {
      text.style.fontSize = "1.5rem";
    });
  };
};

