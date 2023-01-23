const NavOnScroll=document.getElementById('HeroSecondaryContainer')
document.addEventListener('scroll',e=>{
    console.log(window.scrollY)
    if(window.scrollY>445){
    
        NavOnScroll.classList.add('NavOnScroll')
    }
    else{
        NavOnScroll.classList.remove('NavOnScroll')
    }
})

// NavOnScroll.classList.add('NavOnScroll')
