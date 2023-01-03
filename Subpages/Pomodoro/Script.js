const Clock =document.getElementById('Time');
const TitleClock =document.getElementById('titleTimer');
const Image =document.getElementById('bg');
Paused=true;
DisabledColor='rgba(255, 255, 255, 0.4)'
Clock.style.color=DisabledColor
minutes=25
seconds=00
time=+minutes+":"+'0'+seconds;
Clock.innerText=time;
TitleClock.innerText=time;
function CountDown(){
    ClockID=setInterval(()=>{
        if(minutes<10){
            if(seconds<10){
                time='0'+minutes+":"+'0'+seconds;
        
                }else{
        
                    time='0'+minutes+":"+seconds;
                }
        }else{
            if(seconds<10){
                time=minutes+":"+'0'+seconds;
        
                }else{
        
                    time=minutes+":"+seconds;
                }
        }
        
        Clock.innerText=time;
        TitleClock.innerText=time;
        if(seconds<=0){
            seconds=60;
            minutes--
        }
        if(minutes<0){
            clearInterval(ClockID)
        }
        seconds--;


    },1000)
}

function setTime(time){
    

while(minutes!=time){
    if(minutes>time){
  
	minutes--;

    }else{
        minutes++;
    }
    setTimeout(()=>{},10)
}

while(seconds!=0){
    seconds--;

}
time=+minutes+":"+'0'+seconds;
Clock.innerText=time;
TitleClock.innerText=time;
Clock.style.color=DisabledColor
        
    clearInterval(ClockID)
    Paused=true;
}



Clock.addEventListener('click',()=>{
    if(Paused){
        Clock.style.color='white'
        CountDown();
        Paused=false;
        
        
    }else{
        Clock.style.color=DisabledColor
        
        clearInterval(ClockID)
        Paused=true;
    }
})
id=1;

function changeImg(){
    if(id>4){
        id=1
    }
    id++
    Image.src='Images/'+id+'.jpg'

}