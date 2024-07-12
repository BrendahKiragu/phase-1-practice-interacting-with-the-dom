//targeting the nodes
const counter = document.getElementById("counter");
const minusButton = document.getElementById("minus");
const plusButton = document.getElementById("plus");
const heartButton = document.getElementById("heart");
const pauseButton = document.getElementById("pause");
const likes = document.querySelector(".likes");
const commentForm = document.getElementById("comment-form");
const commentInput = document.getElementById("comment-input");
const commentList = document.getElementById("list");
const allButtons = document.querySelectorAll('button')
let count = 0;
let paused = false;

//adding eventListeners
plusButton.addEventListener("click", incrementCounter);
minusButton.addEventListener("click", decrementCounter);
heartButton.addEventListener("click", addLike);
commentForm.addEventListener("submit", addComment);
pauseButton.addEventListener("click", togglePause)

//function to set the count state
function counterValue (){
  counter.innerText = count;
}

//runs incrementCounter function every second
function startCounter() {
   intervalID = setInterval(incrementCounter, 1000); 
}

// pauses the counter
function pauseCounter() { 
    clearInterval(intervalID);
    disableOtherButtons();
}

//resumes the counter
function resumeCounter(){
  startCounter();
  enableAllButtons()
}

// increments counter by 1 
function incrementCounter() {
    count++;
    counterValue();
}

//decrements counter by 1
function decrementCounter() {
    count--;
    counterValue();
}

// adds a like to the list
function addLike() {
    const li = document.createElement("li");
    li.innerText = `${count} has been liked`;
    likes.appendChild(li);
}

// appends a comment to p based on comment input
function addComment(e) {
    e.preventDefault();
    const p = document.createElement("p");
    p.innerText = commentInput.value;
    commentList.appendChild(p);
}

//toggles pause/resume
function togglePause (){
  paused = !paused;
  if (paused){
    pauseCounter();
    pauseButton.innerText = "Resume";
  } else {
    resumeCounter();
    pauseButton.innerText ="Pause"
  }
}

//Disables other buttons except pause button
function disableOtherButtons(){
 allButtons.forEach(button =>{
  if(button !== pause){
    button.disabled =true;
  }
 })
}

// Enables all buttons
function enableAllButtons() {
  allButtons.forEach(button => {
    button.disabled = false;
  });
}

//call the function startCounter to start the game
startCounter();

