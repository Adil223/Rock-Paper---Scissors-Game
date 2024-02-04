let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
let audioWin = new Audio('./sounds/winning.wav');
let audioLose = new Audio('./sounds/losing.wav');

const genCompChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const drawGame = () => {
    msg.innerText = "Woow! Game is Draw 😮";
    msg.style.backgroundColor = "dimgrey";
    audioWin.pause(); // Pause winning sound
    audioLose.pause(); // Pause losing sound
};

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `Hurray! You Win 🥳 Your ${userChoice} beats Computer ${compChoice}`;
        msg.style.backgroundColor = "green";
        audioLose.pause(); // Pause losing sound
        audioWin.play(); // Play winning sound
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `Oops! Better Luck Next Time 😴 Computer ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor = "red";
        audioWin.pause(); // Pause winning sound
        audioLose.play(); // Play losing sound
    }
};

const playGame = (userChoice) => {
    const compChoice = genCompChoice();
    console.log("Comp Choice = ", compChoice);

    if (userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = compChoice === "scissor" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true;
        }

        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});



