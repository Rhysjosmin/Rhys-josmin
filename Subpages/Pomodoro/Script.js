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
var Alarm = new Audio('audio/Alarm.mp3');
var BackgroundAudio= new Audio('audio/BackgroundAudio.mp3')

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
            BackgroundAudio.pause();
            Alarm.play();
            Alarm.loop();

        }
        seconds--;


    },1000)
}

function setTime(time,button){
    BackgroundAudio.pause()
    const buttons = document.querySelectorAll('.button');

    buttons.forEach(b => {
      b.classList.remove('selectedButton');
    });
   button.classList.add('selectedButton')

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
        BackgroundAudio.play()
        BackgroundAudio.volume=.3
        CountDown();
        Paused=false;
        
        
    }else{
        BackgroundAudio.pause()
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