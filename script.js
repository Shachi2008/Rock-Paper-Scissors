 let userScore=0;
 let compScore=0;

 const choices=document.querySelectorAll(".choice");
 const msg=document.querySelector("#msg"); 
 const userScorePara=document.querySelector("#user-score");
 const compScorePara=document.querySelector("#comp-score");
const genCompChoice = () => {
    //rock,ppaper,scissors
    const options=["rock" , "paper" , "scissor"];
    //generate a random number(as strings cannot be generated random but nos. can be generated randomly)
    //to generate randomly rock ,paper or scissor
   const randIdx= Math.floor(Math.random()*3);
    return options[randIdx];
}
const drawGame=() => {
   
    msg.innerText="Game was drawn";
    msg.style.backgroundColor="#081b31";
};

const showWinner = (userWin , userChoice , compChoice) => {
    if(userWin)
    {
       userScore++; 
       userScorePara.innerText=userScore;
        msg.innerText="You win!";
        msg.style.backgroundColor="green";
    }
    else
    {
        compScore++;
        compScorePara.innerText=compScore;
    msg.innerText="You lose!";
    msg.style.backgroundColor="red";
}
};
 const playGame=(userChoice)=>{
    console.log("user choice=",userChoice);
    //generate computer choice
    const compChoice=genCompChoice();
    console.log("comp choice=",compChoice);
    if(userChoice==compChoice){
        //draw game
        drawGame();
    }
    else{
        let userWin=true; // to track if user wins
        if(userChoice=="rock"){
            //computer's choice will be either scissors or paper
           userWin= compChoice=="paper" ? false : true;
        }
        else if(userChoice=="paper")
        {
            //computer's choice will be either rock or scissor
            let userWin=compChoice=="scissors" ? false:true;
        }
        else{
            //computer's choice will be either paper , rock
            let userWin=compChoice=="rock" ? false : true;
        }
        showWinner(userWin , userChoice , compChoice);
    }

 };

 choices.forEach((choice)=>{
    console.log(choice);
    choice.addEventListener("click" , ()=>{
        const userChoice=choice.getAttribute("id");
        
        playGame(userChoice);
    });
 });



