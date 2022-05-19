"use strict";

const diceBtn = document.querySelector(".button-section");
const adviceNumber = document.querySelector(".advice-number");
const adviceText = document.querySelector(".quote");
const apiUrl = "https://api.adviceslip.com/advice"

// Button Click Event

diceBtn.addEventListener("click", () => {

    // Request data
    fetch(apiUrl, {cache: "no-cache"})
    .then((response) => response.json())
    .then((response) => {
        let data = response.slip;
        let dataId = data.id;
        let dataAdvice = data.advice;

        // Inject to DOM
        adviceNumber.innerHTML = `advice # ${dataId}`;
        adviceText.innerHTML = dataAdvice;
    });
});