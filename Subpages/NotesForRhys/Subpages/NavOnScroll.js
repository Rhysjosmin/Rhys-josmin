const NavOnScroll=document.getElementById('HeroSecondaryContainer')

document.addEventListener('scroll',e=>{
    if(window.scrollY>100 && window.scrollY<400){
 
        NavOnScroll.style.height=0;
    }
    if(window.scrollY>400){
       
        NavOnScroll.classList.add('NavOnScroll')
    }
    else{
       
        NavOnScroll.classList.remove('NavOnScroll')
    }
})

// NavOnScroll.classList.add('NavOnScroll')
