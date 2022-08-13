player='X'
color='rgb(225, 65, 180)'
const winner=document.getElementById('winner')
const tile=document.getElementsByClassName("tile");
win=''
var audio = new Audio('./1.flac');
var win = new Audio('./2.wav');
f=0;
function assign(id){
    
    if(tile[id].innerHTML==""){
            //Assigning Values
        
        audio.play();

        tile[id].innerHTML=player
        tile[id].style.background=color
        tile[id].style.transform= `scale(1.1)`;
        if(player==='X'){
            player='O'
            color='lime'
        }else{
            player='X'
            color='rgb(225, 65, 180)'
        }

        //Checking For Win
            
        
    }
    x=0
    while(x<3){
        
        
        if(tile[0+(3*x)].innerHTML===tile[1+(3*x)].innerHTML && tile[0+(3*x)].innerHTML===tile[2+(3*x)].innerHTML && tile[0+(3*x)].innerHTML!=''){
                fill(tile[0+(3*x)].innerHTML);
                winner.innerText=tile[0+(3*x)].innerHTML+' Won';
            }
            if(tile[0+x].innerHTML===tile[3+x].innerHTML && tile[0+x].innerHTML===tile[6+x].innerHTML && tile[0+x].innerHTML!=''){
                fill(tile[0+x].innerHTML);
                winner.innerText=tile[0+x].innerHTML+' Won'
            }
            if(tile[0].innerHTML===tile[4].innerHTML && tile[0].innerHTML===tile[8].innerHTML && tile[0].innerHTML!=''){
                fill(tile[0].innerHTML);
                winner.innerText=tile[0].innerHTML+' Won'
            }
            if(tile[2].innerHTML===tile[4].innerHTML && tile[2].innerHTML===tile[6].innerHTML && tile[2].innerHTML!=''){
                fill(tile[2].innerHTML);
                winner.innerText=tile[2].innerHTML+' Won'
            }
            
        x++;
    }
    
    if(f>20){
        reset()
    }
}
function fill(w){
    y=0
        while(y<9){
            tile[y].innerHTML=w
            tile[y].style.background='rgb(255, 102, 0)'
            tile[y].style.transform= `scale(1.1)`;
            y++;
        }
        win.play();
        f++;
}


function reset(){
    y=0
    f=0
        while(y<9){
            tile[y].innerHTML=''
            tile[y].style.background='rgb(59, 121, 255)'
            tile[y].style.transform= `scale(1)`;
            y++;
            winner.innerText='XOX'
        }
}



