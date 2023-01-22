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