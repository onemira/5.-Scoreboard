let counter = 0

const main = () => {
  document.querySelector('p.team1score').textContent = 0
  document.querySelector('p.team2score').textContent = 0
}

const addMyNameTeam1 = () => {
  console.log('button clicked')
  document.querySelector('h2.myteamname1').textContent = document.querySelector('.myNameTeam1Txt').value
}

const addMyNameTeam2 = () => {
  console.log('button clicked')
  document.querySelector('h2.myteamname2').textContent = document.querySelector('.myNameTeam2Txt').value
}

const addMyScoreTeam1 = () => {
  console.log('button clicked')
  counter = counter + 1
  console.log(counter)
  document.querySelector('p.team1score').textContent = counter
}
const addMyScoreTeam2 = () => {
  console.log('button clicked')
  counter = counter + 1
  console.log(counter)
  document.querySelector('p.team1score').textContent = counter
}

const subtractMyScoreTeam1 = () => {
  console.log('resetting counter')
  counter = counter - 1
  console.log('reset count to' + counter)
  document.querySelector('p.team1score').textContent = counter
}

const subtractMyScoreTeam2 = () => {
  console.log('resetting counter')
  counter = counter - 1
  console.log('reset count to' + counter)
  document.querySelector('p.team2score').textContent = counter
}

document.addEventListener('DOMContentLoaded', main)

document
  .querySelector('.update-team-name1')
  .addEventListener('click', addMyNameTeam1)

document
  .querySelector('.update-team-name2')
  .addEventListener('click', addMyNameTeam2)

document
  .querySelector('.team-1-add-1-button')
  .addEventListener('click', addMyScoreTeam1)

document
  .querySelector('.team-2-add-2-button')
  .addEventListener('click', addMyScoreTeam2)

document
  .querySelector('.update-team-name2')
  .addEventListener('click', addMyScoreTeam2)

document
  .querySelector('.team-1-subtract-1-button')
  .addEventListener('click', subtractMyScoreTeam1)

document
  .querySelector('.team-2-subtract-2-button')
  .addEventListener('click', subtractMyScoreTeam2)
// -------------------------------------------------
// let counter = 0

// const main = () => {
//   document.querySelector('p').textContent = 0
// }

// // when a user clicks a button
// const increaseCounter = () => {
//   // i will do the things
//   console.log('button clicked')
//   // increase the varible 'counter' by 1
//   counter = counter + 1
//   // shortcut : counter++
//   console.log(counter)
//   // update the HTML with the new value
//   // hey DOM, find the <p> and set your textContent = counter
//   document.querySelector('p').textContent = counter
// }

// const resetCounter = () => {
//   console.log('reseting counter')
//   // set counter = 0
//   counter = 0
//   // update the html
//   console.log('reset counter to ' + counter)
//   document.querySelector('p').textContent = counter
// }

// document.addEventListener('DOMContentLoaded', main)
// // go the HTML (DOM)
// // find the button
// // add event listener
// // listen for the 'click' event
// // when the 'click' event happens, run the function increaseCounter
// document
//   .querySelector('.add-one-button')
//   .addEventListener('click', increaseCounter)
// document.querySelector('.reset-button').addEventListener('click', resetCounter)