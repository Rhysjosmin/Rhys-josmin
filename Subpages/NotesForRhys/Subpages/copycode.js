function copyCode(element){
element.classList.add('Copied')
navigator.clipboard.writeText(element.innerText)
setTimeout(()=>{
    element.classList.remove('Copied')
},1500)
PopupAlert("Copied " );

}

function truncate(str, n){
    return (str.length > n) ? str.slice(0, n-1) + '....':str;
  };

function Expand(element){
    // const element2=document.getElementById('')
    document.getElementById('Hero').children[1].style.opacity=0
   element.innerText='‎ '
   element.style.backgroundColor=`#111111`
    element.style.transform=`scale(10000%)`
   
}

function PopupAlert(Text){
    const popup=document.createElement('div')
    popup.className='Popup'
    popup.textContent=Text

    document.body.append(popup)
    setTimeout(()=>{
        popup.style.bottom=`1rem`
    },50)
    setTimeout(()=>{
        popup.style.bottom=`-4rem`
    },2000)
    setTimeout(()=>{
        popup.remove()
    },2500)
    
}
