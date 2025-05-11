// marksheet
let markInput = document.querySelector(".mark_input");
let findGradeBtn = document.querySelector(".find_grade_btn");
let gradeOutput = document.querySelector(".grade_output");

findGradeBtn.addEventListener("click", () => {
  if (markInput.value) {
    if (markInput.value - 20) {
      if (markInput.value >= 80 && markInput.value <= 100) {
        gradeOutput.innerHTML = "A+";
      } else if (markInput.value >= 70 && markInput.value <= 79) {
        gradeOutput.innerHTML = "A";
      } else if (markInput.value >= 60 && markInput.value <= 69) {
        gradeOutput.innerHTML = "A-";
      } else if (markInput.value >= 50 && markInput.value <= 59) {
        gradeOutput.innerHTML = "B";
      } else if (markInput.value >= 40 && markInput.value <= 49) {
        gradeOutput.innerHTML = "C";
      } else if (markInput.value >= 33 && markInput.value <= 39) {
        gradeOutput.innerHTML = "D";
      } else if (markInput.value >= 0 && markInput.value <= 32) {
        gradeOutput.innerHTML = "F";
      } else {
        gradeOutput.innerHTML = "Enter valid number ";
      }
    } else {
      gradeOutput.innerHTML = "Enter number only";
    }
  } else {
    gradeOutput.innerHTML = "Error! Enter your mark";
  }
});
// marksheet

//multiplication table
let multiInput = document.querySelector(".multi_input");
let multiBtn = document.querySelector(".multiBtn");
let multiOutput = document.querySelector(".multi_output");

multiBtn.addEventListener("click", () => {
  let input = multiInput.value;
  let number = Number(input);

  if (input) {
    if (isNaN(number)) {
      multiInput.value = "";
      multiOutput.value = "Please enter only number";
    } else {
      let result = "";
      multiInput.value = "";
      for (i = 1; i <= 10; i++) {
        result += `${number} X ${i} = ${number * i}\n`;
      }
      multiOutput.value = result;
    }
  } else {
    multiOutput.value = "Please enter a number";
  }
});

//multiplication table

// number guessing
let playerOne = document.querySelector(".playerOne");
let playerOneInput = document.querySelector(".playerOneInput");
let playerOneBtn = document.querySelector(".playerOneBtn");
let playerOneOutput = document.querySelector(".playerOneOutput");

let playerTwo = document.querySelector(".playerTwo");
let playerTwoInput = document.querySelector(".playerTwoInput");
let playerTwoBtn = document.querySelector(".playerTwoBtn");
let playerTwoOutput = document.querySelector(".playerTwoOutput");

let playerOneResult;
let playerTwoResult;

playerOneBtn.addEventListener("click", () => {
  let oneInput = playerOneInput.value;
  let oneInputNumber = Number(oneInput);

  if (oneInput) {
    if (isNaN(oneInputNumber)) {
      playerOneOutput.innerHTML = "Please enter only number";
    } else if (oneInputNumber > 0 && oneInputNumber <= 10) {
      playerOneResult = oneInput;
      playerOneOutput.innerHTML = playerOneResult;

      playerTwo.style.display = "block";
      playerOne.style.display = "none";
    } else {
      playerOneOutput.innerHTML = "please enter value only 1 ot 10";
    }
  } else {
    playerOneOutput.innerHTML = "Please enter a value";
  }
});

playerTwoBtn.addEventListener("click", () => {
  let TwoInput = playerTwoInput.value;
  let TwoInputNumber = Number(TwoInput);

  if (TwoInput) {
    if (isNaN(TwoInputNumber)) {
      playerTwoOutput.innerHTML = "Please enter only number";
    } else if (TwoInputNumber > 0 && TwoInputNumber <= 10) {
      playerTwoResult = TwoInput;
      playerTwoOutput.innerHTML = playerTwoResult;
      if (playerOneResult === playerTwoResult) {
        playerTwoOutput.innerHTML = "Hurry! you won";
        playerOne.style.display = "block";
      } else {
        playerTwoOutput.innerHTML = "you lose";
      }
    } else {
      playerTwoOutput.innerHTML = "please enter value only 1 ot 10";
    }
  } else {
    playerTwoOutput.innerHTML = "Please enter a value";
  }
});

// number guessing

// counter
let counter = document.querySelectorAll(".counter");
let counterArr = Array.from(counter);
counterArr.map((item) => {
  let count = 0;
  function counterUp() {
    count++;

    if (count <= item.dataset.count) {
      item.innerHTML = count;
    }
  }
  setInterval(() => {
    counterUp();
  }, item.dataset.speed / item.dataset.count);
});
// counter

// count down timer
let day = document.querySelector(".day");
let hour = document.querySelector(".hour");
let min = document.querySelector(".min");
let sec = document.querySelector(".sec");
let countDownDate = new Date("15 May 2025 14:00:00").getTime();
function dateCountDown() {
  let now = new Date().getTime();
  let distance = countDownDate - now;

  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let secs = Math.floor((distance % (1000 * 60)) / 1000);

  day.innerHTML = days + "d";
  hour.innerHTML = hours + "h";
  min.innerHTML = mins + "m";
  sec.innerHTML = secs + "s";

  if (distance < 0) {
    clearInterval(x);
    day.innerHTML = "expired";
    hour.innerHTML = "expired";
    min.innerHTML = "expired";
    sec.innerHTML = "expired";
  }
}
let x = setInterval(() => {
  dateCountDown();
}, 1000);
// count down timer
