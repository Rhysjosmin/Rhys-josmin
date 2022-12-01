const mn= document.getElementById('mn');
mn.style.display='none'


         
         
            
         
let menu=0;
const v = document.getElementById("vid");
const s = document.getElementById("src");
const loc='../General'

let SUBCAT=''


window.onload = (event) => {
   s.src=loc+SUBCAT+'/Start.mp4';
   v.load();
   v.play();
   v.loop = false;
   v.preload="auto";
};



function St(){
   s.src = loc+SUBCAT+'/1.mp4';
   v.load();
   v.play();
   v.loop = true;
   v.preload="auto";
}

function Expand(){
if(menu==0){
   c1.textContent='Mr. Ramrao Wagh'
   c2.textContent='Rev Fr. Kinley D\'Cruz'
   c3.textContent='Dr. Neena Panandikar'
   c4.textContent='Dr. Kala Nayak'
   c5.textContent='Prof. Amey Tilve & Shubham Tendulkar'

   c1.style.display='Block'
   c2.style.display='Block'
   c3.style.display='Block'
   c4.style.display='Block'
   c5.style.display='Block'
   




   menu=1
   exp.textContent='Close'
   CV.classList.remove('disappear')
}else{
   c1.textContent=''
   c2.textContent=''
   c3.textContent=''
   c4.textContent=''
   c5.textContent=''



  


   
   c1.style.display='none'
   c2.style.display='none'
   c3.style.display='none'
   c4.style.display='none'
   c5.style.display='none'
   
   menu=0
   exp.textContent='Open'
   CV.classList.add('disappear')
}



}

var index=0;
function LogoRev()
{
   s.src = './AvinyaLogoReveal0001-0242.mov';
   v.load();
   v.play();
   v.loop = false;
   v.preload="auto";
   v.addEventListener('ended', function(e) {
      Still();
   }, false);
}

function Still(){
s.src = '../General/3.mp4';
v.load();
      v.play();
      v.loop = true;
      v.preload="auto";
}

function changeVideo1() 
{ 
   if(index>=5){
   index=4;
   }
     index+=1;
   s.src = loc+SUBCAT+'/'+index+'.mp4';
   v.load();
   v.play();
   v.loop = true;
   v.preload="auto";
}


const exp=document.getElementById("Expand"); 

const c1=document.getElementById("change1"); 
const c2=document.getElementById("change2"); 
const c3=document.getElementById("change3"); 
const c4=document.getElementById("change4"); 
const c5=document.getElementById("change5"); 
const CV=document.getElementById("CV"); 


exp.onclick=Expand;
c1.onclick=changeVideo1;
c2.onclick=changeVideo1;
c3.onclick=changeVideo1;
c4.onclick=changeVideo1;
c5.onclick=changeVideo1;









// let menu=0;
// const v = document.getElementById("vid");
// const s = document.getElementById("src");
// const loc='../General'

// let SUBCAT=''


// window.onload = (event) => {
//    s.src=loc+SUBCAT+'/Start.mp4';
//    v.load();
//    v.play();
//    v.loop = false;
//    v.preload="auto";
// };



// function St(){
//    s.src = loc+SUBCAT+'/1.mp4';
//    v.load();
//    v.play();
//    v.loop = true;
//    v.preload="auto";
// }

// function Expand(){
// if(menu==0){
//    c1.textContent='Mr. Ramrao Wagh'
//    c2.textContent='Rev Fr. Kinley D\'Cruz'
//    c3.textContent='Dr. Neena Panandikar'
//    c4.textContent='Dr. Kala Nayak'
//    c5.textContent='Prof. Amey Tilve & Shubham Tendulkar'

//    c1.style.display='Block'
//    c2.style.display='Block'
//    c3.style.display='Block'
//    c4.style.display='Block'
//    c5.style.display='Block'
//    menu=1
//    exp.textContent='Close'
//    CV.classList.remove('disappear')
// }else{
//    c1.textContent=''
//    c2.textContent=''
//    c3.textContent=''
//    c4.textContent=''
//    c5.textContent=''

//    c1.style.display='None'
//    c2.style.display='None'
//    c3.style.display='None'
//    c4.style.display='None'
//    c5.style.display='None'
//    menu=0
//    exp.textContent='Open'
//    CV.classList.add('disappear')
// }



// }


// function changeVideo1() { 
//    s.src = loc+SUBCAT+'/1.mp4';
//    v.load();
//    v.play();
//    v.loop = true;
//    v.preload="auto";
// }
// function changeVideo2() { 
//    s.src = loc+SUBCAT+'/2.mp4';
//    v.load();
//    v.play();
//    v.loop = true;
//    v.preload="auto";
// }
// function changeVideo3() { 
//    s.src = loc+SUBCAT+'/3.mp4';
//    v.load();
//    v.play();
//    v.loop = true;
//    v.preload="auto";
// }
// function changeVideo4() { 
//    s.src = loc+SUBCAT+'/4.mp4';
//    v.load();
//    v.play();
//    v.loop = true;
//    v.preload="auto";
// }
// function changeVideo5() { 
//    s.src = loc+SUBCAT+'/5.mp4';
//    v.load();
//    v.play();
//    v.loop = true;
//    v.preload="auto";
// }

// const exp=document.getElementById("Expand"); 

// const c1=document.getElementById("change1"); 
// const c2=document.getElementById("change2"); 
// const c3=document.getElementById("change3"); 
// const c4=document.getElementById("change4"); 
// const c5=document.getElementById("change5"); 
// const CV=document.getElementById("CV"); 


// exp.onclick=Expand;
// c1.onclick=changeVideo1;
// c2.onclick=changeVideo2;
// c3.onclick=changeVideo3;
// c4.onclick=changeVideo4;
// c5.onclick=changeVideo5;

