const NavOnScroll=document.getElementById('HeroSecondaryContainer')
document.addEventListener('scroll',e=>{
    // console.log(window.scrollY)
    if(window.scrollY>200 && window.scrollY<400){
        // console.log('hhd')
        NavOnScroll.style.opacity=0;
        NavOnScroll.style.height=0;
    }
    if(window.scrollY>400){
        NavOnScroll.style.opacity=1;
        NavOnScroll.classList.add('NavOnScroll')
    }
    else{
        NavOnScroll.style.opacity=1;
        NavOnScroll.classList.remove('NavOnScroll')
    }
})

// NavOnScroll.classList.add('NavOnScroll')
