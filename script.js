let usrScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg"); // FIXED
const usrScorepara=document.querySelector("#user-score");
const compScorepara=document.querySelector("#comp-score");
const end=document.querySelector("#end");

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const usrchoice = choice.getAttribute("id");
        playgame(usrchoice);
    });
});

const gencompchoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const playgame = (usrchoice) => {
    console.log("user choice =", usrchoice);
    const compchoice = gencompchoice();
    console.log("comp choice =", compchoice);

    if (compchoice === usrchoice) {
        
        msg.innerText = "It's a tie!";
         msg.style.backgroundColor="black";
    } else if (
        (usrchoice === "rock" && compchoice === "scissor") ||
        (usrchoice === "paper" && compchoice === "rock") ||
        (usrchoice === "scissor" && compchoice === "paper")
    ) {
        usrScore++;
        usrScorepara.innerText=usrScore;
         msg.style.backgroundColor="green";

        msg.innerText = "You win!";
    } else if (
        (compchoice === "rock" && usrchoice === "scissor") ||
        (compchoice === "paper" && usrchoice === "rock") ||
        (compchoice === "scissor" && usrchoice === "paper")
    ) {
        compScore++;
        compScorepara.innerText=compScore;
        msg.innerText = "Computer wins!";
        msg.style.backgroundColor="red";
    } else {
        msg.innerText = "Invalid choice.";
    }
    end.innerText = `Computer picked: ${compchoice}`;
}
