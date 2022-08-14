const t=document.getElementById('top');
const bottom=document.getElementById('bottom');
const player=document.getElementById('player');
const floor=document.getElementById('floor');


var end=0;
var ypos=0;
window.addEventListener('touchstart', function() {
    initialize()
  });

document.addEventListener('keyup', event => {
if (event.code === 'Space') {
initialize()
}})

function initialize(){
    t.style.transform=`translateY(-8vw)`;
    bottom.style.transform=`translateY(8vw)`;
    player.style.transform=`scale(70%) translateY(min(-10vw,-10vh))`;
    floor.style.width='80vw'
    player.textContent="☹️"
    setTimeout(up,500);
    setTimeout(game,1500);
    } 
    

function up(){
    player.textContent="😊"
    player.style.transform=`scale(70%) translateY(min(8vw,8vh))`;   
}


function game(){
    //Game Code
}