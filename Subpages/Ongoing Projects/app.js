const cursor=document.getElementById("cursor")
const cursor2=document.getElementById("cursor2")
document.addEventListener('mousemove', (event) => {
    x=event.clientX
    y=event.clientY
    parallax(window.scrollY);
});
window.addEventListener("scroll",function(){
    parallax(window.scrollY);
});
function parallax(distance){
    const item = document.getElementById('graph')
    item.style.transform=`translateY(${(distance*-.1)-100}px)`
    cursor.style.transform=`translateX(${x-40}px) translateY(${y+(window.scrollY)-40}px)`
    cursor2.style.transform=`translateX(${x-30}px) translateY(${y+(window.scrollY)-30}px)`
}








