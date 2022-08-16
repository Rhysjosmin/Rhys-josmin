const t=document.getElementById('top');
const bottom=document.getElementById('bottom');
const player=document.getElementById('player');
const floor=document.getElementById('floor');
const GameArea=document.getElementById('game');
const Gamestate=document.getElementById('Gamestate');
const ti =document.getElementById('title')

let playerPosition=0
var end=false;
var ypos=0;
let ran=0
let  SCORE=404

let score=document.getElementById('score')

window.addEventListener('touchstart', function() {
    initialize()
    playerPosition=0
        playerPosition=80
        player.style.transform=`scale(70%)  translateY(${-playerPosition}px)`  
    });

document.addEventListener('keyup', event => {
if (event.code === 'Space') {
initialize()
}})

function initialize(){
    t.style.transform=`translateY(-6vw)`;
    bottom.style.transform=`translateY(6vw)`;
   
    floor.style.width='80vw'
    player.textContent="😊 "
    setTimeout(down ,500);
    
    if(ran!=1){
        setTimeout(initscore,600) 
        MakeEnemies()
        ran=1
        let scoreincriment =setInterval(function(){
            prevscore=parseInt(localStorage.getItem('score'))
            SCORE+=1
            if(SCORE>prevscore){
                score.textContent=SCORE
                
            }else{
                score.textContent=SCORE+'|'+`${prevscore}`
            }
            ti.textContent=SCORE
            
            if(end===true){
                clearInterval(scoreincriment)

                localStorage.setItem('score',Math.max(SCORE,prevscore))
            }
        },50) 
    }
    
 
    }  
    

function down (){
    player.textContent="☹️"
    player.style.transform=`scale(70%) translateY(min(8vw,8vh))`;   
}

function control(e){
    if(e.keyCode===32){
        playerPosition=0
    
         
        playerPosition=80
        player.style.transform=`scale(70%)  translateY(${-playerPosition}px)`   
                  
            
            
            
       
    } 
}


document.addEventListener('keyup',control)


function MakeEnemies(){
    
      let Enemyposition=82;
        let randomNum=(Math.random()*4000)+400
        const Enemy =document.createElement('div');
        Enemy.classList.add('enemy');
        GameArea.appendChild(Enemy)
        Enemy.style.left=Enemyposition+'vw'
        Enemy.textContent='🤡'
        let timerId=setInterval(function(){
            if(Enemyposition<12){ 
                clearInterval(timerId)
                GameArea.removeChild(Enemy )
            }
            Enemyposition-=1;
            Enemy.style.left=Enemyposition+'vw'

            var style = window.getComputedStyle(player);
            var matrix = new WebKitCSSMatrix(style.transform);
            console.log();

            
            
            if(matrix.m42>15 && Enemyposition==50){
                Gamestate.textContent='💀'
                end=true 
            }



        },20);   
        
   if(end!=true){
    setTimeout(MakeEnemies,randomNum)
   }
    
}



function initscore(){
    
    while(SCORE>0){
        SCORE--
        score.textContent=SCORE
    }
}


