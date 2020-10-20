//selecting all divs elements with class name square
const square = document.querySelectorAll('.square');
//selecting all divs elements with class name mole
const mole = document.querySelectorAll(".mole");
//use query selector to find the id of timeleft
const timeLeft = document.querySelector('#time-left');

//declare variable for score
let score = document.querySelector('#score');

//STARTING THE GAME
let result = 0;
let currentTime = timeLeft.textContent;
let timerId = "";

//declare function for randomly selecting a square in our grid
function randomSquare() {
  square.forEach(className => {
    className.classList.remove('mole')
  });
  //define a random position using math random
  let randomPosition = square[Math.floor(Math.random() * 9)];
  //add the mole to the randomPosition so it appears on the grid
  randomPosition.classList.add('mole');
  //assign the id of the randomPosition to hitPosition
  hitPosition = randomPosition.id;
};

//declare an arrow for eventlistener
square.forEach(id => {
  //mouseup for when we hit our mouse on an element
  id.addEventListener('mouseup', () => {
    if(id.id === hitPosition) {
      //we add one to our result, since we hit the mole
      result = result + 1;
      //use text to display result in the browser
      score.textContent = result;
      hitPosition = null;
    }
  });
});

//declare a function to move the mole
function moveMole() {
  let movingMole = null;
  movingMole = setInterval(randomSquare, 600);
  timerId = setInterval(countDown, 1000);
};

//declare function to count down by one
function countDown() {
  currentTime--;
  timeLeft.textContent = currentTime;
  //set if statement for when the time's over
  if (currentTime === 0) {
    //clear the time interval
    clearInterval(timerId);
    //set an alert to let the user know the time is over
    alert("GAME OVER! FINAL SCORE: " + result);
  };
};

//call moveMole function using an eventlistener
document.getElementById("start-button").addEventListener("click", moveMole);
