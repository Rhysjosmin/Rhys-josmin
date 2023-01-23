document.addEventListener("dblclick", (e) => {
    console.log(e)
    // if(e.srcElement | e.srcElement.pa

    //   )
  addSticker(e.pageX,e.pageY);

});

const Time=Math.random()*4000
setTimeout(()=>{
    
PopupAlert("Try Double Clicking The Screen")
},Time)

function addSticker(x,y){
const sticker=document.createElement('img')
sticker.src=`https://media1.giphy.com/media/kDXf683QhH07VFQelQ/giphy.gif?cid=ecf05e479712o1urf3h06i0ioe3k4qn7iofm96zdj2gr8rs5&rid=giphy.gif&ct=s`
sticker.className='sticker'

sticker.style.position='absolute'
sticker.style.top=`${y}px`
sticker.style.left=`${x}px`
sticker.style.scale=1
let randomTime=Math.random()*5000
document.body.append(sticker)
setTimeout(()=>{
    sticker.style.opacity=0
},randomTime)
randomTime+=Math.random()*500

// setTimeout(()=>{
//     sticker.remove()
// },5000)
// setTimeout(()=>{
//     sticker.remove()
// },5000)
setTimeout(()=>{
    sticker.remove()
},5000)
}


