'use strict';

const playerEl0 = document.querySelector(".player--0")
const playerEl1 = document.querySelector(".player--1")
const scoreEl0 = document.querySelector("#score--0")
const scoreEl1 = document.getElementById("score--1")
const diceEl = document.querySelector(".dice")

const btnNew = document.querySelector(".btn--new")
const btnRoll = document.querySelector(".btn--roll")
const btnHold = document.querySelector(".btn--hold")

let currentScore = 0
let playerActive = 0

scoreEl0.textContent = 0
scoreEl1.textContent = 0

diceEl.classList.add("hidden")

btnRoll.addEventListener("click", function (){
    const dice = Math.trunc(Math.random() * 6) + 1
    diceEl.classList.remove("hidden")
    diceEl.src = `dice-${dice}.png`

    if (dice !== 1) {
        currentScore += dice
        document.getElementById(`current--${playerActive}`).textContent = currentScore
    } else {
        document.getElementById(`current--${playerActive}`).textContent = 0
        currentScore = 0
        playerActive = playerActive === 0 ? 1 : 0
        playerEl0.classList.toggle("player--active")
        playerEl1.classList.toggle("player--active")
    }
})