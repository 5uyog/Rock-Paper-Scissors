let userScore=0;
let compScore=0;


const options=document.querySelectorAll(".option");
const result=document.querySelector("#result");
const user=document.querySelector("#user-score")
const comp=document.querySelector("#comp-score")

const getCompChoice=() => {
    const choices=["rock","paper","scissors"]
    const ind= Math.floor(Math.random() * 3);
    return choices[ind]
}

const drawGame=() => {
    
    result.innerText="Game draw, play again.";
    result.style.backgroundColor= "black";
}

const winner=(userWin,userChoice,compChoice) => {
    if(userWin){
        userScore++;
        user.innerText=userScore;
        result.innerText=`You win :) You  chose ${userChoice}. Computer chose ${compChoice}. `;
        result.style.backgroundColor= "rgb(31,132,90)";
    }
    else{
        compScore++;
        comp.innerText=compScore;
        result.innerText=`You lost :( You  chose ${userChoice}. Computer chose ${compChoice}. `;
        result.style.backgroundColor= "rgb(201,55,44)";
    }
}

const game= (userChoice) =>{


const compChoice=getCompChoice();



if(userChoice === compChoice){
    drawGame();
}
else{
    let userWin = true;
    if(userChoice === "rock"){
        userWin = compChoice === "paper" ? false:true;
    }
    else if(userChoice === "paper"){
        userWin = compChoice === "scissors" ? false:true;
    }
    else{
        userWin = compChoice === "rock" ? false:true;
    }
    winner(userWin,userChoice,compChoice);
}

}

options.forEach((option) => {
    option.addEventListener("click",() => {
        const userChoice=option.getAttribute("id");
         game(userChoice)
    })
})