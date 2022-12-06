const ProfilePic = document.getElementById('ProfilePic');

var move=0 //0 if The image is not following the mouse

// ProfilePic.addEventListener('mousedown',followMouse)
// function followMouse(e){
// if(move==0){
//     document.addEventListener('mousemove', (event) => {
//             move=1
//         x=Math.round(event.screenX)
//         y=Math.round(event.screenY)
//         // acc=event.c
        
//         ProfilePic.style.transform=`translateX(${x-500}px) translateY(${y+(window.scrollY)}px)`
        
//     });
    
// }else{

// }


// }
// let Moving=0
// ProfilePic.onmousedown = p =>{
//     if(Moving===0){
//         Moving=1;
        
//         window.onmousemove = e => {
//                 console.log(p)
             
//                 mousePercentOffsetX=Math.round(((e.clientX/window.innerWidth*100)-100)/5)*5
//                 mousePercentOffsetY=Math.round(((e.clientY/window.innerHeight*100)-50)/5)*5
//                 ProfilePic.animate({
//                     transform:`translate(${mousePercentOffsetX}%,${mousePercentOffsetY}%)`},{duration:1000,fill:"forwards"});
//             }
//         }
// }

// window.onscroll = e =>{
//     // ProfilePic.style.backgroundSize='10vw'
//     ProfilePic.animate(
//         {
//             backgroundSize: `${((window.scrollY/document.body.scrollHeight)*1)+70}%`
//         },{
//             duration:1000,fill:"forwards"
//         }
//     );
//     console.log(window.scrollY/document.body.scrollHeight)
// }
