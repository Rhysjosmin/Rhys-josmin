const t=document.getElementById('top');
const bottom=document.getElementById('bottom');
const player=document.getElementById('player');
const floor=document.getElementById('floor');
const GameArea=document.getElementById('game');
const Gamestate=document.getElementById('Gamestate');


let playerPosition=0
var end=0;
var ypos=0;
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
    //player.style.transform=`scale(70%) translateY(min(-15vw,-15vh))`;
    floor.style.width='80vw'
    player.textContent="😊 "
    setTimeout(down ,500);
    setTimeout(game,1500);
    

 
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
        
   
    setTimeout(MakeEnemies,randomNum)
}

 MakeEnemies()