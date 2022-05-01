const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
const Bg = document.getElementById('text')
var compPoints =document.getElementById('computer')
var youPoints =document.getElementById('you')
var Win =document.getElementById('winPercent')

const audio = new Audio('./Pop.mp3')

audio.pitch=2


let C=0;
let Y=0;

let userChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click',(e)=>{
    userChoice=e.target.id
    userChoiceDisplay.innerHTML=userChoice
    colorText()
    generateComputerChoice()
    getResult()
    audio.play()
    
}))

function colorText(){
    if (userChoice==='rock'){
       
        userChoiceDisplay.style.color='#fc4f05'
    }

    if (userChoice==='scissors'){
      
        userChoiceDisplay.style.color='yellow'
    }

    if (userChoice==='paper'){
       
        userChoiceDisplay.style.color='beige'
    }

}

function generateComputerChoice(){
    const randomNumber = Math.floor(Math.random()*3)+1

    if (randomNumber===1){
        computerChoice='rock'
        computerChoiceDisplay.style.color='#fc4f05'
    }

    if (randomNumber===2){
        computerChoice='scissors'
        computerChoiceDisplay.style.color='yellow'
    }

    if (randomNumber===3){
        computerChoice='paper'
        computerChoiceDisplay.style.color='beige'
    }
    computerChoiceDisplay.innerHTML=computerChoice
    
}

function getResult(){
    if(computerChoice===userChoice){
        result="It's a Draw!"
        resultDisplay.style.color='White'
        Bg.style.backgroundColor='grey'
        
    }

    if(computerChoice==='rock'&& userChoice==='paper'){
        result="You Win!"
        resultDisplay.style.color='#6ae7f7'
        Bg.style.backgroundColor='#6a6ae6'
        Y=Y+1
        Score()
        C=C
        
    }
    if(computerChoice==='rock'&& userChoice==='scissors'){
        result="Computer Wins!"
        resultDisplay.style.color='#ff005d'
        Bg.style.backgroundColor='#BD1616'
        Y=Y
        Score()
        C=C+1
               
    }

    if(computerChoice==='scissors'&& userChoice==='paper'){
        result="Computer Wins!"
        resultDisplay.style.color='#ff005d'
        Bg.style.backgroundColor='#BD1616'
        Y=Y
        Score()
        C=C+1
        
    }
    if(computerChoice==='scissors'&& userChoice==='rock'){
        result="You Win!"
        resultDisplay.style.color='#6ae7f7'
        Bg.style.backgroundColor='#6a6ae6'
        Y=Y+1
        Score()
        C=C
        
        
    }
    if(computerChoice==='paper'&& userChoice==='rock'){
        result="Computer Wins!"
        resultDisplay.style.color='#ff005d'
        Bg.style.backgroundColor='#BD1616'
        Y=Y
        Score()
        C=C+1
    }
    if(computerChoice==='paper'&& userChoice==='scissors'){
        result="You Win!"
        resultDisplay.style.color='#6ae7f7'
        Bg.style.backgroundColor='#6a6ae6'
        Y=Y+1
        Score()
        C=C
        
    }
    resultDisplay.innerHTML=result


}

function Score(){
    compPoints.innerHTML=C
    youPoints.innerHTML=Y
    Win.innerHTML=Math.round((C/(C+Y))*100)
    if(Win.innerHTML<50){
        Win.style.color='red'
        Win.innerHTML=Win.innerHTML+'😔'
        
    }
    if(Win.innerHTML>=50){
        Win.style.color='#6a6ae6'
        Win.innerHTML=Win.innerHTML+'🤗'
    }
    
  
}
