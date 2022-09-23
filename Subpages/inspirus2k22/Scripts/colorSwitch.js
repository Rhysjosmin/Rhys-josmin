//fa-moon fa-sun

function darkmode(){
const icon=document.getElementById('DarkMode');
const body=document.querySelector('body')
if(icon.classList.contains('fa-moon')){
    icon.classList.remove('fa-moon')
    icon.classList.add('fa-umbrella-beach')

    body.classList.remove('yellow')
    body.classList.add('dark')

}else if(icon.classList.contains('fa-umbrella-beach')){
    icon.classList.remove('fa-umbrella-beach')
    icon.classList.add('fa-sun')

    body.classList.remove('dark')
    body.classList.add('yellow')
}else if(icon.classList.contains('fa-sun')){
    icon.classList.remove('fa-sun')
    icon.classList.add('fa-moon')

    body.classList.remove('yellow')
    
}

}

//w--b--y