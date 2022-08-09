function parallax(distance){
    const item = document.getElementById('graph')
    const item2 = document.getElementById('main')
    const item3 = document.getElementById('footer')
    item.style.transform=`translateY(${(distance*-.1)-100}px)`
    //item2.style.transform=`translateY(${distance*.5}px)`
    //item3.style.transform=`translateY(${distance*.5}px)`
    
    cursor.style.transform=`translateX(${x-40}px) translateY(${y+(window.scrollY)-40}px)`
    cursor2.style.transform=`translateX(${x-30}px) translateY(${y+(window.scrollY)-30}px)`
}


window.addEventListener("scroll",function(){
    parallax(window.scrollY);
    
});

const cursor=document.getElementById("cursor")
const cursor2=document.getElementById("cursor2")

document.addEventListener('mousemove', (event) => {
    x=event.clientX
    y=event.clientY
    xAcc=event.movementX
    parallax(window.scrollY);
    
	
});


