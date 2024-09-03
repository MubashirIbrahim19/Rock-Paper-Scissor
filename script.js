let yourScore = 0;
let compScore = 0;
let timer = 3;

const images = document.querySelectorAll(".image");
const your_score = document.querySelector(".score1");
const comp_score = document.querySelector(".score2");
const timerBox = document.querySelector(".timeBox");
const zero = document.querySelector(".zero");
const images2 = document.querySelector(".images2");
const image1 = document.querySelector(".image1");
const image2 = document.querySelector(".image2");
const image3 = document.querySelector(".image3");
const image4 = document.querySelector(".image4");
const image5 = document.querySelector(".image5");
const image6 = document.querySelector(".image6");
const dublicateImage1 = document.querySelector(".dublicateImage1");
const dublicateImage2 = document.querySelector(".dublicateImage2");
const dublicateImage3 = document.querySelector(".dublicateImage3");
const playAgain = document.querySelector(".playAgain");
const winDraw = document.querySelector(".winDraw");
const reverse1 = document.querySelector(".reverse1");
const reverse2 = document.querySelector(".reverse2");
const reverse3 = document.querySelector(".reverse3");
const reset = document.querySelector(".reset");
const Again = document.querySelector(".Again");
const header = document.querySelector(".header");

const draw = (computerchoice) => {
  if (computerchoice === "paper") {
    setTimeout(() => {
      image4.classList.remove("hide");
      timerBox.classList.add("hide");
      winDraw.innerText = "MATCH DRAW";
      winDraw.style.color = "white";
    }, 170);
  } else if (computerchoice === "scissor") {
    setTimeout(() => {
      image5.classList.remove("hide");
      timerBox.classList.add("hide");
      winDraw.innerText = "MATCH DRAW";
      winDraw.style.color = "white";
    }, 170);
  } else {
    setTimeout(() => {
      image6.classList.remove("hide");
      timerBox.classList.add("hide");
      winDraw.innerText = "MATCH DRAW";
      winDraw.style.color = "white";
    }, 170);
  }
};
const computerChoice = (myChoice) => {
  let compChoice = ["paper", "scissor", "rock"];
  let randomInd = Math.floor(Math.random() * 3);
  let computerChoice2 = compChoice[randomInd];

  if (myChoice === computerChoice2) {
    let newValue = Math.random();
    if (newValue < 0.5) {
      compChoice = compChoice.filter((choice) => choice !== myChoice);
      randomInd = Math.floor(Math.random() * 2);
      computerChoice2 = compChoice[randomInd];
    }
  }
  return computerChoice2;
};

const playGame = (myChoice) => {
  let computerchoice = computerChoice(myChoice);
  if (myChoice === computerchoice) {
    draw(computerchoice);
  }

  if (myChoice === "paper") {
    if (computerchoice === "rock") {
      setTimeout(() => {
        image6.classList.remove("hide");
        timerBox.classList.add("hide");
        your_score.innerText = ++yourScore;
        your_score.style.color = "green";
        winDraw.innerText = "YOU WIN";
        winDraw.style.color = "rgb(69, 250, 90)";
      }, 170);
    } else if (computerchoice === "scissor") {
      setTimeout(() => {
        timerBox.classList.add("hide");
        image5.classList.remove("hide");
        comp_score.innerText = ++compScore;
        comp_score.style.color = "rgb(226, 167, 10)";
        winDraw.innerText = "YOU LOSE";
        winDraw.style.color = "red";
      }, 170);
    }
  }
  if (myChoice === "scissor") {
    if (computerchoice === "rock") {
      setTimeout(() => {
        image6.classList.remove("hide");
        timerBox.classList.add("hide");
        comp_score.innerText = ++compScore;
        comp_score.style.color = "rgb(226, 167, 10)";
        winDraw.innerText = "YOU LOSE";
        winDraw.style.color = "red";
      }, 170);
    } else if (computerchoice === "paper") {
      setTimeout(() => {
        timerBox.classList.add("hide");
        image4.classList.remove("hide");
        your_score.innerText = ++yourScore;
        your_score.style.color = "green";
        winDraw.innerText = "YOU WIN";
        winDraw.style.color = "rgb(69, 250, 90)";
      }, 170);
    }
  }
  if (myChoice === "rock") {
    if (computerchoice === "scissor") {
      setTimeout(() => {
        image5.classList.remove("hide");
        timerBox.classList.add("hide");
        your_score.innerText = ++yourScore;
        your_score.style.color = "green";
        winDraw.innerText = "YOU WIN";
        winDraw.style.color = "rgb(69, 250, 90)";
      }, 170);
    } else if (computerchoice === "paper") {
      setTimeout(() => {
        timerBox.classList.add("hide");
        image4.classList.remove("hide");
        comp_score.innerText = ++compScore;
        comp_score.style.color = "rgb(226, 167, 10)";
        winDraw.innerText = "YOU LOSE";
        winDraw.style.color = "red";
      }, 170);
    }
  }
};
const box = () => {
  zero.innerText = timer;
};
images.forEach((image) => {
  image.addEventListener("click", () => {
    header.classList.add("header1");
    header.classList.remove("header2");
    header.classList.remove("header3");

    let myChoice = image.getAttribute("id");
    setTimeout(() => {
      timerBox.classList.remove("hide");
    }, 25);
    images2.classList.add("hide");
    reset.classList.add("hide");
    if (myChoice === "paper") {
      image1.classList.remove("hide");
    } else if (myChoice === "scissor") {
      image2.classList.remove("hide");
    } else {
      image3.classList.remove("hide");
    }

    const restart1 = () => {
      header.classList.add("header3");
      header.classList.remove("header2");
      header.classList.remove("header1");
      if (myChoice === "paper") {
        reverse1.classList.remove("reverse1");
        reverse1.classList.add("reverse1-1");
        reverse2.classList.add("reverse2");
        reverse2.classList.remove("reverse2-2");
        reverse3.classList.add("reverse3");
        reverse3.classList.remove("reverse3-3");
      } else if (myChoice === "scissor") {
        reverse2.classList.remove("reverse2");
        reverse2.classList.add("reverse2-2");
        reverse1.classList.add("reverse1");
        reverse1.classList.remove("reverse1-1");
        reverse3.classList.add("reverse3");
        reverse3.classList.remove("reverse3-3");
      } else {
        reverse3.classList.remove("reverse3");
        reverse3.classList.add("reverse3-3");
        reverse2.classList.add("reverse2");
        reverse2.classList.remove("reverse2-2");
        reverse1.classList.add("reverse1");
        reverse1.classList.remove("reverse1-1");
      }
      playAgain.classList.add("hide");
      timerBox.classList.add("hide");
      image1.classList.add("hide");
      image2.classList.add("hide");
      image3.classList.add("hide");
      image4.classList.add("hide");
      image5.classList.add("hide");
      image6.classList.add("hide");
      images2.classList.remove("hide");
      zero.innerText = "3";
      zero.classList.remove("countBox");
      dublicateImage1.classList.remove("position1");
      dublicateImage2.classList.remove("position2");
      dublicateImage3.classList.remove("position3");
    };
    Again.addEventListener("click", restart1);

    reset.addEventListener("click", () => {
      your_score.innerText = "0";
      your_score.style.color = "rgb(18, 40, 82)";
      comp_score.innerText = "0";
      comp_score.style.color = "rgb(18, 40, 82)";
      yourScore = 0;
      compScore = 0;
      zero.innerText = "3";
      restart1();
    });

    const countDown = setInterval(() => {
      timer--;

      box();
      if (timer === 0) {
        clearInterval(countDown);
        zero.classList.add("countBox");
        playGame(myChoice);

        dublicateImage1.classList.add("position1");
        dublicateImage2.classList.add("position2");
        dublicateImage3.classList.add("position3");
        timer = 3;
        reset.classList.remove("hide");
        setTimeout(() => {
          playAgain.classList.remove("hide");
          header.classList.remove("header1");
          header.classList.add("header2");
        }, 170);
      }
    }, 470);
  });
});
