function parallax(distance){
    const item = document.getElementById('graph')
    const item2 = document.getElementById('main')
    const item3 = document.getElementById('footer')
    item.style.transform=`translateY(${distance*-.01}px)`
    item2.style.transform=`translateY(${distance*.5}px)`
    item3.style.transform=`translateY(${distance*.5}px)`
 

}

window.addEventListener("scroll",function(){
    parallax(window.scrollY);

});