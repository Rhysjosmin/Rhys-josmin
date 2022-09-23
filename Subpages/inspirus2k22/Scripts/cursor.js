const cursor=document.getElementById("cursor")

document.addEventListener('mousemove', (event) => {
    x=event.clientX
    y=event.clientY
    Cursor_move(window.scrollY);
});
window.addEventListener("scroll",function(){
    Cursor_move(window.scrollY);
});
function Cursor_move(distance){

   
    cursor.style.transform=`translateX(${x-20}px) translateY(${y+(window.scrollY)-20}px)`
}
