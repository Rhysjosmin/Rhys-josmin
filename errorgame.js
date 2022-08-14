const t=document.getElementById('top');
const bottom=document.getElementById('bottom');
const player=document.getElementById('player');


document.addEventListener('keyup', event => {
if (event.code === 'Space') {
initialize()

}
function initialize(){
t.style.transform=`translateY(-8vw)`;
bottom.style.transform=`translateY(8vw)`;
player.style.transform=`scale(70%) translateY(-5vw)`;
 

}

}
)
