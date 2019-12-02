let counter = 0

const main = () => {
  document.getElementsByClassName('team1-score').innerHTML = 'AH'
  document.getElementsByClassName('team2-score').innerHTML = 'WHAT'
}

const updateTeam1Name = () => {
  document.querySelector('.team1-name')
    .innerHTML = document.querySelector('.team1-name-txt').value;
}

const updateTeam2Name = () => {
  document.querySelector('.team2-name').innerHTML = document.querySelector('.team2-name-txt').value
}

const addTeam1Score = () => {
  counter++
  document.querySelector('.team1-score').innerHTML = counter
}

const addTeam2Score = () => {
  counter++
  document.querySelector('.team2-score').innerHTML = counter
}

const subtractTeam1Score = () => {
  counter--
  document.querySelector('.team1-score').innerHTML = counter

}

const subtractTeam2Score = () => {
  counter--
  document.querySelector('.team2-score').innerHTML = counter
}

document.addEventListener('DOMContentLoaded', main)

document
  .querySelector('.update-team1-name')
  .addEventListener('click', updateTeam1Name)

document
  .querySelector('.update-team2-name')
  .addEventListener('click', updateTeam2Name)

document
  .querySelector('.team1-plus-button')
  .addEventListener('click', addTeam1Score)

document
  .querySelector('.team2-plus-button')
  .addEventListener('click', addTeam2Score)

document
  .querySelector('.team1-minus-button')
  .addEventListener('click', subtractTeam1Score)

document
  .querySelector('.team2-minus-button')
  .addEventListener('click', subtractTeam2Score)