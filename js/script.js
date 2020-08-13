//Global Variables
//This is where you will define the variables you will be using in your project.
//#TODO: Create four variables to track each possible quiz outcome
var questionCount = 0;
var waterTribeScore = 0;
var earthKingdomScore = 0;
var fireNationScore = 0;
var airNationScore = 0;

//#TODO: Use the DOM to create variables for the first quiz question.
var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q1a3 = document.getElementById("q1a3");
var q1a4 = document.getElementById("q1a4");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q2a3 = document.getElementById("q2a3");
var q2a4 = document.getElementById("q2a4");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");
var q3a3 = document.getElementById("q3a3");
var q3a4 = document.getElementById("q3a4");

var result = document.getElementById("result");
var resultImg = document.getElementById("result-img");

//#TODO: Add Event Listeners to your answer choice variables.
q1a1.addEventListener("click", waterTribe);
q1a2.addEventListener("click", earthKingdom);
q1a3.addEventListener("click", fireNation);
q1a4.addEventListener("click", airNation);

q2a1.addEventListener("click", waterTribe);
q2a2.addEventListener("click", earthKingdom);
q2a3.addEventListener("click", fireNation);
q2a4.addEventListener("click", airNation);

q3a1.addEventListener("click", waterTribe);
q3a2.addEventListener("click", fireNation);
q3a3.addEventListener("click", earthKingdom);
q3a4.addEventListener("click", airNation);

//#TODO: Define quiz functions here
function waterTribe() {
  waterTribeScore += 1;
  questionCount += 1;
  if (questionCount >= 3) {
    updateResult();
  }
  // alert(waterTribeScore);
}

function earthKingdom() {
  earthKingdomScore += 1;
  questionCount += 1;
  if (questionCount >= 3) {
    updateResult();
  }
  // alert(earthKingdomScore);
}

function fireNation() {
  fireNationScore += 1;
  questionCount += 1;
  if (questionCount >= 3) {
    updateResult();
  }
  // alert(fireNationScore);
}

function airNation() {
  airNationScore += 1;
  questionCount += 1;
  if (questionCount >= 3) {
    updateResult();
  }
  // alert(airNationScore);
}

function updateResult() {
  if (waterTribeScore >= 2) {
    result.innerHTML = "Water Tribe!";
    resultImg.src =
      "https://media.giphy.com/media/J5deqXb35R6hDQHJJV/giphy.gif";
  } else if (earthKingdomScore >= 2) {
    result.innerHTML = "Earth Kingdom!";
    resultImg.src = "https://media.giphy.com/media/OoaTf8fEuesP6/giphy.gif";
  } else if (fireNationScore >= 2) {
    result.innerHTML = "Fire Nation!";
    resultImg.src =
      "https://media.giphy.com/media/SXgRJ164w2GYWqFXx4/giphy.gif";
  } else if (airNationScore >= 2) {
    result.innerHTML = "Air Nation!";
    resultImg.src = "https://media.giphy.com/media/10fS0TJxfFRDLW/giphy.gif";
  } else {
    result.innerHTML = "No result!";
    resultImg.src =
      "https://media.giphy.com/media/S92wTYF3Nwh5k50tXR/giphy.gif";
  }
}

//Restart quiz
var restart = document.getElementById("restart");
restart.addEventListener("click", restartQuiz);

function restartQuiz() {
  questionCount = 0;
  waterTribeScore = 0;
  earthKingdomScore = 0;
  fireNationScore = 0;
  airNationScore = 0;
  result.innerHTML = "Your result is..."; //display text when restart
  resultImg.src="https://www.w3.org/TR/SVGTiny12/examples/solidcolor.svg"; //display white img when restart
  enableQuestions(); //enable the questions again
}

//Disable Buttons
function disableQ1(){
  q1a1.disabled = true;
  q1a2.disabled = true;
  q1a3.disabled = true;
  q1a4.disabled = true;
}

q1a1.addEventListener("click", disableQ1);
q1a2.addEventListener("click", disableQ1);
q1a3.addEventListener("click", disableQ1);
q1a4.addEventListener("click", disableQ1);

function disableQ2() {
  q2a1.disabled = true;
  q2a2.disabled = true;
  q2a3.disabled = true;
  q2a4.disabled = true;
}

q2a1.addEventListener("click", disableQ2);
q2a2.addEventListener("click", disableQ2);
q2a3.addEventListener("click", disableQ2);
q2a4.addEventListener("click", disableQ2);

function disableQ3() {
  q3a1.disabled = true;
  q3a2.disabled = true;
  q3a3.disabled = true;
  q3a4.disabled = true;
}

q3a1.addEventListener("click", disableQ3);
q3a2.addEventListener("click", disableQ3);
q3a3.addEventListener("click", disableQ3);
q3a4.addEventListener("click", disableQ3);

function enableQuestions() {
  q1a1.disabled = false;
  q1a2.disabled = false;
  q1a3.disabled = false;
  q1a4.disabled = false;
  q2a1.disabled = false;
  q2a2.disabled = false;
  q2a3.disabled = false;
  q2a4.disabled = false;
  q3a1.disabled = false;
  q3a2.disabled = false;
  q3a3.disabled = false;
  q3a4.disabled = false;
}
