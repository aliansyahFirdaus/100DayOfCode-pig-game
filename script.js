'use strict';

const playerEl0 = document.querySelector(".player--0")
const playerEl1 = document.querySelector('.player--1');
const diceEl = document.querySelector('.dice');
const scoreEl0 = document.getElementById(`score--0`);
const scoreEl1 = document.getElementById(`score--1`);

const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let scores, currentScore, playerActive, playing;

const reset = () => {
  scores = [0, 0];
  currentScore = 0;
  playerActive = 0;
  playing = true;

  document
    .querySelector(`.player--${playerActive}`)
    .classList.remove('player--winner');
  document
    .querySelector(`.player--${playerActive}`)
    .classList.add('player--active');
  document.getElementById(`current--${playerActive}`).textContent = 0;

  scoreEl0.textContent = 0;
  scoreEl1.textContent = 0;
};

reset();

const switchPlayer = () => {
  document.getElementById(`current--${playerActive}`).textContent = 0;
  currentScore = 0;
  playerActive = playerActive === 0 ? 1 : 0;
  playerEl0.classList.toggle('player--active');
  playerEl1.classList.toggle('player--active');
};

btnRoll.addEventListener('click', function () {
  if (playing) {
    diceEl.classList.remove('hidden');
    const dice = Math.trunc(Math.random() * 6) + 1;
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`current--${playerActive}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', () => {
  if (playing) {
    scores[playerActive] += currentScore;
    document.getElementById(`score--${playerActive}`).textContent =
      scores[playerActive];

    if (scores[playerActive] >= 20) {
      diceEl.classList.add('hidden');
      playing = false;
      document
        .querySelector(`.player--${playerActive}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${playerActive}`)
        .classList.remove('player--active');
    } else {
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', () => {
  reset();
});