const nav =document.querySelector("nav").querySelector('ul')
const navMenu =document.querySelector(".navExtended")

nav.onmouseover=function(){
    navMenu.style.opacity=1
    navMenu.style.height='71vh'
    console.log(navMenu)

}
navMenu.onmouseover=function(){
    navMenu.style.opacity=1
    navMenu.style.height='71vh'
    console.log(navMenu)

}

nav.onmouseleave =function(){
    navMenu.style.opacity=0
    navMenu.style.height='30vh'
}
navMenu.onmouseleave =function(){
    navMenu.style.opacity=0
    navMenu.style.height='30vh'
}