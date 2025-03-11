"use strict";

let currentScore = 20;  //Setting the initial score as 20

let randomNumber = () => {  //function to generate a random number
    let number = Math.floor(Math.random() * 20) + 1;
    return number;
}

let gameNumber = randomNumber();
console.log(gameNumber);
document.querySelector('.btn.check').addEventListener('click',()=>{  //setting an event on click of check button
    var guessNumber = Number(document.querySelector(".guess").value);   //reading the number from the input box after clicking on check
    if(gameNumber === guessNumber) {  //If result is true
        document.querySelector('body').style.backgroundColor = '#60b347';  //change bg color to green
        document.querySelector(".message").textContent = "You Win!";  //change text to this
        document.querySelector(".highscore").textContent = currentScore;  //change highscore
    }
    else {
        if (guessNumber > gameNumber)  //if result is different
            document.querySelector(".message").textContent = "Too High!";  //print appropriate message
        else
            document.querySelector(".message").textContent = "Too Low..";
        currentScore--;
        document.querySelector(".score").innerText = currentScore;  //change score after each loss
    }
})

document.querySelector('.btn.again').addEventListener('click',()=> {  //reset function
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector(".message").textContent = "Start guessing...";
    document.querySelector(".score").textContent = 20;
    document.querySelector(".highscore").textContent = currentScore;
    currentScore = 20;
})