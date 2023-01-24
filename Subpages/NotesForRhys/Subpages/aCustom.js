
function Expand(element){
    let link=element.attributes.href.nodeValue
   
    // const element2=document.getElementById('')
    // console.log(document.getElementById('Hero').children[0].children[1])
    document.getElementById('Hero').children[0].children[1].style.opacity=0
   element.innerText='‎ '
   element.style.zIndex=1000
   element.style.backgroundColor=`#111111`
   document.body.style.overflow='hidden'
    element.style.transform=`scale(20000%)`
    // element.
    setTimeout(()=>{
        window.location.href=link

    },300)
}


// aCustom.addEventListener('click',e=>{
   
// })