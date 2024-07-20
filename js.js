let userscore=0;
let compscore=0;

const choices = document.querySelectorAll(".box");
const mesg = document.querySelector("#mes");

const userScorepara = document.querySelector("#user-score");
const compScorepara = document.querySelector("#comp-score");


const genCompChoice = () =>{
  const options = ["rock","paper","scissor"];
   //rock,paper,scissor
 const randIdx = Math.floor(Math.random() * 3);
 return options[randIdx];
};

const drawGame = () =>{
  console.log("Game was Draw");
  mesg.textContent = "Game was Draw";
  mesg.style.backgroundColor = "blue";
};
 
const showWinner = (userWin) =>{
  if(userWin){
    userscore++;
    userScorepara.innerText = userscore;
    console.log("You win");
    mesg.innerText = "You Win!"
    mesg.style.backgroundColor = "green";
  }
  else{
    compscore++;
    compScorepara.innerText = compscore;
    console.log("You lose");
    mesg.innerText = "You Lose!"
    mesg.style.backgroundColor = "red";
  }
};

const playGame = (userChoice) => {
   console.log("user choice =",userChoice);
   //generate computer choice
   const compChoice = genCompChoice();
   console.log("comp choice =",compChoice);

   if(userChoice === compChoice){
    //draw game
    drawGame();
   }
   else{
    let userWin = true;
    if(userChoice === "rock"){
      //paper,scissor
      userWin = compChoice === "paper" ? false : true;
    }
    else if(userChoice === "paper"){
      //rock,scissor
      userWin = compChoice === "scissor" ? false : true;
   }
   else{
       //rock,paper
       userWin = compChoice === "rock" ? false : true;
   }
   showWinner(userWin);
  }
};

choices.forEach((box) => {
        box.addEventListener("click",() => {
              const userChoice = box.getAttribute("id");
              playGame(userChoice);
        });
});

